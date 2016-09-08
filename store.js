const createStore = reducer => {
  let state
  let listeners = []

  const getState = () => state

  const dispatch = action => {
    state = reducer(state, action)
  }

  const subscribe = listener => {
    listeners.push(listener)
  }

  // dispatch to initialise state
  dispatch({})

  return {
    getState,
    dispatch,
    subscribe
  }
}

module.exports = createStore
