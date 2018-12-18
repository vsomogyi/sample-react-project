// import apiInteraction from './fetch';
// import dataSelection from './select';
// import dataTransformation from './transform';
import formSubmit from './submit';
import View from './view';
// import './style.css';
import { compose } from 'recompose';

const enhance = compose(
  // apiInteraction,
  // dataSelection,
  // dataTransformation,
  formSubmit,
);

export default enhance(View);
