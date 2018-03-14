import Typography from 'typography';
import grandViewTheme from 'typography-theme-grand-view';

grandViewTheme.googleFonts = grandViewTheme.googleFonts.concat({
  name: 'Bungee',
  styles: ['400']
});

const typography = new Typography(grandViewTheme);

export default typography;
