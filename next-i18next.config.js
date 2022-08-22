module.exports = {
    i18n: {
        locales: ['en', 'es', 'fr', 'it', 'de'],
        defaultLocale: 'en',
    },
    localePath: './src/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    debug: process.env.NODE_ENV === 'development',
};
