import type { CollectionConfig } from 'payload';

import { authenticated } from '@/access/authenticated';

export const Users: CollectionConfig = {
    slug: 'users',
    access: {
        admin: authenticated,
        create: authenticated,
        delete: authenticated,
        read: authenticated,
        update: authenticated,
    },
    admin: {
        defaultColumns: ['name', 'email', 'role'],
        useAsTitle: 'name',
    },
    auth: true,
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                },
                {
                    name: 'role',
                    type: 'select',
                    required: true,
                    defaultValue: 'owner',
                    options: [
                        {
                            label: {
                                en: 'Owner',
                                ka: 'მფლობელი',
                                ru: 'Владелец',
                            },
                            value: 'owner',
                        },
                        {
                            label: {
                                en: 'Admin',
                                ka: 'ადმინი',
                                ru: 'Админ',
                            },
                            value: 'admin',
                        },
                        {
                            label: {
                                en: 'Super Admin',
                                ka: 'სუპერ ადმინი',
                                ru: 'Супер Админ',
                            },
                            value: 'superAdmin',
                        },
                    ],
                },
            ],
        },
    ],
    hooks: {
        beforeChange: [
            async ({ data, req }) => {
                if (data.role === 'superAdmin' && req.user?.role !== 'superAdmin') {
                    const messages: Record<string, string> = {
                        en: 'Only a superAdmin can assign the superAdmin role.',
                        ka: 'მხოლოდ სუპერ ადმინს შეუძლია სუპერ ადმინის როლის დანიშვნა.',
                        ru: 'Только супер админ может назначить роль супер админа.',
                    };
                    const locale = req.locale || 'en';
                    throw new Error(messages[locale] || messages.en);
                }
                return data;
            },
        ],
    },
    timestamps: true,
};
