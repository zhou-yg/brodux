## brodux



```
const store = createStore(...);

store.subscribeByKey({
   // while dispatching action cause [stateName] had changed.
   stateName(newValue, oldValue){
      ...
   }
});
```
