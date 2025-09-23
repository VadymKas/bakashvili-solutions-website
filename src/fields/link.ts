import type { Field, GroupField } from 'payload';

import deepMerge from '@/utilities/deepMerge';

export type LinkAppearances = 'default' | 'outline';

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
    default: {
        label: 'Default',
        value: 'default',
    },
    outline: {
        label: 'Outline',
        value: 'outline',
    },
};

type LinkType = (options?: {
    appearances?: LinkAppearances[] | false;
    disableLabel?: boolean;
    overrides?: Partial<GroupField>;
}) => Field;

export const link: LinkType = ({ appearances, disableLabel = false, overrides = {} } = {}) => {
    const linkResult: GroupField = {
        name: 'link',
        type: 'group',
        admin: {
            hideGutter: true,
        },
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        name: 'type',
                        type: 'radio',
                        admin: {
                            layout: 'horizontal',
                            width: '50%',
                        },
                        defaultValue: 'reference',
                        options: [
                            {
                                label: {
                                    en: 'Internal link',
                                    ka: 'შიდა ბმული',
                                    ru: 'Внутренняя ссылка',
                                },
                                value: 'reference',
                            },
                            {
                                label: {
                                    en: 'Custom URL',
                                    ka: 'მორგებული URL',
                                    ru: 'Пользовательский URL',
                                },
                                value: 'custom',
                            },
                        ],
                    },
                    {
                        name: 'newTab',
                        type: 'checkbox',
                        admin: {
                            style: {
                                alignSelf: 'flex-end',
                            },
                            width: '50%',
                        },
                        label: {
                            en: 'Open in new tab',
                            ka: 'ახალ ჩანართში გახსნა',
                            ru: 'Открыть в новой вкладке',
                        },
                    },
                ],
            },
        ],
    };

    const linkTypes: Field[] = [
        {
            name: 'reference',
            type: 'relationship',
            admin: {
                condition: (_, siblingData) => siblingData?.type === 'reference',
            },
            label: {
                en: 'Document to link to',
                ka: 'დოკუმენტი ბმულისთვის',
                ru: 'Cсылки на документ',
            },
            relationTo: ['pages'],
            required: true,
        },
        {
            name: 'url',
            type: 'text',
            admin: {
                condition: (_, siblingData) => siblingData?.type === 'custom',
            },
            label: {
                en: 'Custom URL',
                ka: 'მორგებული URL',
                ru: 'Пользовательский URL',
            },
            required: true,
        },
    ];

    if (!disableLabel) {
        linkTypes.map((linkType) => ({
            ...linkType,
            admin: {
                ...linkType.admin,
                width: '50%',
            },
        }));

        linkResult.fields.push({
            type: 'row',
            fields: [
                ...linkTypes,
                {
                    name: 'label',
                    type: 'text',
                    admin: {
                        width: '50%',
                    },
                    label: {
                        en: 'Label',
                        ka: 'ლეიბლი',
                        ru: 'Метка',
                    },
                    required: true,
                    localized: true,
                },
            ],
        });
    } else {
        linkResult.fields = [...linkResult.fields, ...linkTypes];
    }

    if (appearances !== false) {
        let appearanceOptionsToUse = [appearanceOptions.default, appearanceOptions.outline];

        if (appearances) {
            appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance]);
        }

        linkResult.fields.push({
            name: 'appearance',
            type: 'select',
            admin: {
                description: 'Choose how the link should be rendered.',
            },
            defaultValue: 'default',
            options: appearanceOptionsToUse,
        });
    }

    return deepMerge(linkResult, overrides);
};
