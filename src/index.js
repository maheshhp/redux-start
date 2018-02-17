import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { incrementAction } from './redux/actions';
import store from './redux/store';
import reducer from './redux/reducers';


const App = props => (
  <div>
    <p>Value = {props.count}</p>
    <br />
    <br />
    <button onClick={() => {
      store.dispatch(incrementAction);
      console.log(incrementAction);
    }}
    >Click Me
    </button>
  </div>
);

App.propTypes = {
  count: PropTypes.number,
};

App.defaultProps = {
  count: 0,
};


const render = () => {
  const state = store.getState();
  ReactDOM.render(<App count={state.count} />, document.getElementById('root'));
};
store.subscribe(render);
render();
