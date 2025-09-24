import type { CollectionConfig } from 'payload';

import { authenticated } from '@/access/authenticated';

import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const ImageMedia: CollectionConfig = {
    slug: 'image-media',
    access: {
        create: authenticated,
        delete: authenticated,
        read: () => true,
        update: authenticated,
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
        staticDir: path.resolve(dirname, '../../public/media'),
        adminThumbnail: 'thumbnail',
        focalPoint: true,
        imageSizes: [
            {
                name: 'thumbnail',
                width: 300,
            },
            {
                name: 'square',
                width: 500,
                height: 500,
            },
            {
                name: 'small',
                width: 600,
            },
            {
                name: 'medium',
                width: 900,
            },
            {
                name: 'large',
                width: 1400,
            },
            {
                name: 'xlarge',
                width: 1920,
            },
            {
                name: 'og',
                width: 1200,
                height: 630,
                crop: 'center',
            },
        ],
    },
};
