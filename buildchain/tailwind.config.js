/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

// Settings
const settingsGrid = require('./tailwind.settings.grid')
const settingsFontSizes = require('./tailwind.settings.fontSizes')
const settingsColors = require('./tailwind.settings.colors')
const settingsScreens = require('./tailwind.settings.screens')
const settingsProse = require('./tailwind.settings.prose')

// Plugins
const pluginAddComponents = require('./tailwind.plugins.addComponents')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      '../templates/**/*.{twig,html,vue,js,ts}',
      '../src/vue/**/*.{vue,js,ts}',
    ],
    layers: ['base', 'components', 'utilities'],
    mode: 'layers',
    options: {
      whitelist: ['../src/css/components/**/*.{pcss,css}'],
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['SofiaPro-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      'sans-bold': ['SofiaPro-Bold', 'Helvetica', 'Arial', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    fontSize: settingsFontSizes,
    colors: settingsColors,
    screens: settingsScreens,
    extend: {
      spacing: {
        '50vh': '50vh',
      },
      scale: {
        'flip': '-1'
      },
      zIndex: {
        '1000': '1000',
        '10000': '10000',
        '100000': '100000',
      },
      gridTemplateColumns: {...settingsGrid.gridTemplateColumns},
      gridColumn: {...settingsGrid.gridColumn},
      gridRowStart: {...settingsGrid.gridRowStart},
      gridRowEnd: {...settingsGrid.gridRowEnd},
      // Typography Plugin
      typography: theme => (settingsProse(theme))
    },
  },
  variants: {},
  corePlugins: {
    float: false,
    container: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')({
      modifiers: ['md'],
    }),
    require('tailwindcss-question-mark'),
    function ({addComponents}) {
      addComponents(pluginAddComponents);
    },
  ],
};
