import type { Block } from 'payload';

export const CoreValuesBlock: Block = {
    slug: 'coreValuesBlock',
    interfaceName: 'Core Values',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: {
                en: 'Title',
                ka: 'სათაური',
                ru: 'Заголовок',
            },
            localized: true,
        },
        {
            name: 'description',
            type: 'text',
            label: {
                en: 'Description',
                ka: 'აღწერა',
                ru: 'Описание',
            },
            localized: true,
        },
        {
            name: 'values',
            type: 'array',
            fields: [
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    label: {
                        en: 'Media',
                        ka: 'მედია',
                        ru: 'Медиа',
                    },
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    label: {
                        en: 'Title',
                        ka: 'სათაური',
                        ru: 'Заголовок',
                    },
                    required: true,
                    localized: true,
                },
                {
                    name: 'description',
                    type: 'text',
                    label: {
                        en: 'Description',
                        ka: 'აღწერა',
                        ru: 'Описание',
                    },
                    localized: true,
                },
            ],
        },
    ],
};
