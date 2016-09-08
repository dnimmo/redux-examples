import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'
import counter from'./reducers/counter'

const store = createStore(counter)

const run = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('app')
  )
}

store.subscribe(run)
run()
