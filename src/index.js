import { render } from 'react-dom';

import 'normalize-css';
import './style.css';

import { MyComponent } from './components';
import styles from './test.module.css';

render(
  <>
    <h2 className={styles.body}>Hello world from React jsx!</h2>
    <MyComponent />
  </>,
  document.getElementById('application')
);
