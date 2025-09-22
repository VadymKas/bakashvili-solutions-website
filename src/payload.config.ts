// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users/Users';
import { ImageMedia } from './collections/Media/ImageMedia';
import { VideoMedia } from './collections/Media/VideoMedia';
import { Pages } from './collections/Pages';

import { Header } from './globals/Header/config';

import { en } from '@payloadcms/translations/languages/en';
import { ru } from '@payloadcms/translations/languages/ru';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Users, ImageMedia, VideoMedia, Pages],
    globals: [Header],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
    plugins: [payloadCloudPlugin()],
    localization: {
        locales: [
            {
                label: 'English',
                code: 'en',
            },
            {
                label: 'Georgian',
                code: 'ka',
            },
            {
                label: 'Russian',
                code: 'ru',
            },
        ],
        defaultLocale: 'en',
        fallback: true,
    },
    i18n: {
        fallbackLanguage: 'en',
        supportedLanguages: { en, ru },
    },
});
