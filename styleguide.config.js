const path = require('path');

module.exports = {
  title: 'React Styleguide',
  skipComponentsWithoutExample: true,
  require: [path.resolve(__dirname, 'src/docs/styleguide-styles.css')],
  ignore: ['**/Backdrop/*.*', '**/*.spec.js'],
  sections: [
    {
      name: 'Installation',
      content: path.resolve(__dirname, 'src/docs/installation.md')
    },
    {
      name: 'Elements',
      components: path.resolve(__dirname, 'src/elements/**/[A-Z]*.js')
    },
    {
      name: 'Components',
      components: path.resolve(__dirname, 'src/components/**/[A-Z]*.js')
    }
  ]
};
