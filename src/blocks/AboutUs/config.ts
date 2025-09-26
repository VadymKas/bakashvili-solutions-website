import type { Block } from 'payload';
import { link } from '@/fields/link';

export const AboutUsBlock: Block = {
    slug: 'aboutUsBlock',
    interfaceName: 'About Us',
    fields: [
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
            type: 'textarea',
            label: {
                en: 'Description',
                ka: 'აღწერა',
                ru: 'Описание',
            },
            required: true,
            localized: true,
        },
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
            name: 'enableLink',
            type: 'checkbox',
            label: {
                en: 'Add link',
                ka: 'ბმულის დამატება',
                ru: 'Добавить ссылку',
            },
        },
        link({
            overrides: {
                admin: {
                    condition: (_data, siblingData) => {
                        return Boolean(siblingData?.enableLink);
                    },
                },
            },
        }),
    ],
};
