let id = 0

export const createIncident = incidentObject => ({
  type: 'CREATE_INCIDENT',
  id: id++,
  incidentObject
})

export const deleteIncident = desireId => ({
  type: 'DELETE_INCIDENT',
  id: desireId
})
