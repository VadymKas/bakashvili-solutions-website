import type { CollectionConfig } from 'payload';

export const ImageMedia: CollectionConfig = {
    slug: 'image-media',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            localized: true,
        },
    ],
    upload: {
        mimeTypes: ['image/*'],
    },
};
