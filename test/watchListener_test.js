const redux = require('../lib/index.js').default;

console.log(redux);

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

function test(state, action) {
  if(state){
    return state + 1;
  }
  return 1;
}

const store = createStore(combineReducers({
  test,
}));


store.subscribeByKey({
  test(v, old){
    console.log(v, old);
  }
});

store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch({
  type: 1,
});

store.dispatch({
  type: 1,
});
