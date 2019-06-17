import { CREATE_INCIDENT, DELETE_INCIDENT, ADD_USER } from '../types'

let id = 0

export const createIncident = incidentObject => ({
  type: CREATE_INCIDENT,
  id: id++,
  incidentObject
})

export const deleteIncident = desireId => ({
  type: DELETE_INCIDENT,
  id: desireId
})

export const addUser = name => ({
  type: ADD_USER,
  id: 'testId',
  name
})
