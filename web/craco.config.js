const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@processing-color": "#454158",
                            '@primary-color': '#454158',
                            "@menu-dark-bg": "#22212C",
                            "@link-color": "#80FFEA",
                            "@success-color": "#8AFF80",
                            "@warning-color": "#FFCA80",
                            "@error-color": "#FF9580",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};