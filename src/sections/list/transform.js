import {
  compose,
  setDisplayName,
  // mapProps,
  mapPropsStream,
  createEventHandler,
} from 'recompose';
import { switchMap, startWith } from 'rxjs/operators';

const transformPropsStream = props$ => {
  const { stream: onChange$, handler: onChange } = createEventHandler();

  return props$.pipe(
    switchMap(
      props => onChange$.pipe(startWith('')),
      ({ entries, ...props }, inputValue) => {
        return {
          ...props,
          handleSearch: value => {
            onChange(value);
          },
          entries: entries
            .toJS()
            .filter(
              entry =>
                entry.title.toLowerCase().search(inputValue.toLowerCase()) !==
                -1,
            ),
          inputValue,
        };
      },
    ),
  );
};

// const transformProps = ({ entries }) => {
//   return {
//     entries: entries.toJS(),
//   };
// };

export default compose(
  setDisplayName('ListTransform'),
  // mapProps(transformProps),
  mapPropsStream(transformPropsStream),
);
