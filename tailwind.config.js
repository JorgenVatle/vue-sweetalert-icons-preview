/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    theme: {
        container: {
            center: true,
            padding: '2rem',
        }
    },
    variants: {},
    plugins: [require('tailwindcss-grid')({
        grids: [1, 2, 3, 5, 6, 8, 10, 12],
        gaps: {
            0: '0',
            4: '1rem',
            8: '2rem',
            10: '2.5rem',
            '4-x': '1rem',
            '4-y': '1rem',
        },
        autoMinWidths: {
            '16': '4rem',
            '24': '6rem',
            '300px': '300px',
        },
        variants: ['responsive'],
    })],
};
