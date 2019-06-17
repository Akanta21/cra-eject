import React, { useReducer } from 'react'
import incidentReducer, { incidentInitialState } from './reducers/incidents'
import { StateContext, DispatchContext } from './useRedux'

const ReduxProvider = ({ children }) => {
  const [incidents, dispatchIncident] = useReducer(incidentReducer, incidentInitialState)

  return (
    <DispatchContext.Provider value={{ dispatchIncident }}>
      <StateContext.Provider
        value={{ incidents }}
      >
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export default ReduxProvider