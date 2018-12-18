import apiInteraction from './fetch';
import dataSelection from './select';
import dataTransformation from './transform';
import View from './view';
import './style.css';
import { compose } from 'recompose';

const enhance = compose(
  apiInteraction,
  dataSelection,
  dataTransformation,
);

export default enhance(View);
