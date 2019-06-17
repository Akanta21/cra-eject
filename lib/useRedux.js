import React, { useContext } from 'react'

export const StateContext = React.createContext()
export const DispatchContext = React.createContext()

export const useRedux = (mapState = () => { }, mapDispatch = () => { }) => {
  const stateContext = useContext(StateContext)
  const dispatchContext = useContext(DispatchContext)
  let reduxState = mapState(stateContext)

  const dispatcher = (fn) => {
    Object.keys(dispatchContext).map((action) => {
      const actionPayload = dispatchContext[action]
      return actionPayload(fn)
    })
  }

  const reduxDispatch = mapDispatch(dispatcher)

  return {
    ...reduxState,
    ...reduxDispatch
  }
}