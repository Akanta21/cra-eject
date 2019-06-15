let id = 0

export const addIncident = text => ({
  type: 'ADD_INCIDENT',
  id: id++,
  text
})

export const deleteIncident = desireId => ({
  type: 'DELETE_INCIDENT',
  id: desireId
})
