import React from 'react';
import stateContext from '../context/state';
import useInitialState from '../hooks/useInitialState';

const Home = () => {
  const initialState = useInitialState(stateContext);
  return (
    <stateContext.Provider value={initialState}>
      <h1>Algo</h1>
    </stateContext.Provider>
  );
};

export default Home;
