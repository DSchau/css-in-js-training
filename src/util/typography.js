import Typography from 'typography';
import grandViewTheme from 'typography-theme-grand-view';

grandViewTheme.googleFonts = [
  {
    name: 'Montserrat',
    styles: ['700']
  },
  {
    name: 'Arvo',
    styles: ['400', '700']
  },
  {
    name: 'Bungee',
    styles: ['400']
  }
];

export default new Typography(grandViewTheme);
