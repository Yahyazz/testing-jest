import { useState } from 'react';

import PropTypes from 'prop-types';

export const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div>
      <div>
        Count:
        <h3 data-testid="count">{count}</h3>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired
};
