


export default function createStore(reducer) {
  // add your code here
}
  let state;

  function dispatch(action) {
    state = reducer(state, action);

  }

  function getState() {
    return state;
  };

function render() {
  const container = document.getElementById('container');

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  };
}
