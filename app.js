const { createStore } = require('redux')
const counter = require('./counter')

const store = createStore(counter)

const render = () => {
  console.log(store.getState())
}

store.subscribe(render)
render()
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
