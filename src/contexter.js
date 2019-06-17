import React, { useContext, useReducer } from 'react'
import incidentReducer, { incidentInitialState } from '../lib/reducers/incidents'

const StateContext = React.createContext()
const DispatchContext = React.createContext()

export const useRedux = (mapState, mapDispatch) => {
  const stateContext = useContext(StateContext)
  const dispatchContext = useContext(DispatchContext)
  let reduxState = mapState(stateContext)

  const dispatcher = (fn) => {
    Object.keys(dispatchContext).map((d) => {
      const f = dispatchContext[d]
      return f(fn)
    })
  }

  const reduxDispatch = mapDispatch(dispatcher)

  return {
    ...reduxState,
    ...reduxDispatch
  }
}

const ReduxProvider = ({ children }) => {
  const [incidents, dispatchIncident] = useReducer(incidentReducer, incidentInitialState)

  return (
    <DispatchContext.Provider value={{ dispatchIncident }}>
      <StateContext.Provider
        value={{ incidents }}
      >
        {{ children }}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export default ReduxProvider