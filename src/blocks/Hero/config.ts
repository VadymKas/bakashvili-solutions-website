import type { Block } from 'payload';

export const HeroBlock: Block = {
    slug: 'heroBlock',
    interfaceName: 'Hero',
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
            type: 'text',
            label: {
                en: 'Description',
                ka: 'აღწერა',
                ru: 'Описание',
            },
            required: true,
            localized: true,
        },
        {
            name: 'items',
            type: 'array',
            label: {
                en: 'Slides',
                ka: 'სლაიდები',
                ru: 'Слайды',
            },
            fields: [
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ],
};
