import { useState } from 'react';

import styledComponents from './components.module.css';

export const MyComponent = () => {
  const [counter, setCouter] = useState(0);

  return (
    <div
      className={styledComponents.counter}
      onClick={() => {
        setCouter(counter + 1);
      }}>
      Counter: {counter}
    </div>
  );
};
