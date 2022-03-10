const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@layout-body-background": "#22212C",
                            "@layout-header-background": "#22212C",
                            "@background-color-light": "#454158",
                            "@table-body-sort-bg": "#7970A9",
                            "@heading-color": "#F8F8F2",
                            "@text-color": "#F8F8F2",
                            "@text-color-secondary": "#F8F8F2",
                            "@collapse-header-bg": "#454158",
                            "@icon-color-hover": "#7970A9",
                            "@body-background": "#22212C",
                            "@component-background": "#22212C",
                            '@primary-color': '#454158',
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