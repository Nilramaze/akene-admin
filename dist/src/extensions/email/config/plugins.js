"use strict";
// src/extensions/email/config/plugins.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    email: {
        config: {
            provider: 'custom-provider', // Name of your custom provider
            providerOptions: {
                host: 'smtp.mailtrap.io',
                port: 587,
                secure: false,
                auth: {
                    user: 'your-smtp-user',
                    pass: 'your-smtp-password',
                },
            },
            settings: {
                defaultFrom: 'your-email@example.com',
                defaultReplyTo: 'your-email@example.com',
            },
        },
    },
};
