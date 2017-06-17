const redux = require('../lib/index.js');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

function test(state, action) {
  if(state){
    return state++;
  }
  return 0;
}

const store = createStore(combineReducers({
  test,
}));


store.subscribeByKey({
  test(v, old){
    console.log(v, old);
  }
});


store.dispatch({
  type: 1,
});

store.dispatch({
  type: 1,
});
