import React, { useReducer } from 'react'
import incidentReducer, { incidentInitialState } from './reducers/incidents'
import userReducer, { initialUser } from './reducers/users'

export const Store = React.createContext();

const StoreProvider = ({ children }) => {
  const [incidentState, incidentDispatch] = useReducer(incidentReducer, incidentInitialState)
  const [userState, userDispatch] = useReducer(userReducer, initialUser)
  const value = {
    incidents: incidentState,
    users: userState,
    incidentDispatch: incidentDispatch,
    userDispatch: userDispatch
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export default StoreProvider