import { CREATE_INCIDENT, DELETE_INCIDENT } from '../types'

// initial incidents
export const incidentInitialState = [
  {
    id: 999,
    title: "Test incident",
    assignee: "Admin",
    status: "Resolved"
  },
  {
    id: 222,
    title: "Another incident",
    assignee: "Engineer",
    status: "Acknowledged",
  }
]


export default (state, action) => {
  switch (action.type) {
    case CREATE_INCIDENT:
      return [
        ...state,
        {
          id: action.id,
          ...action.incidentObject
        }
      ]

    case DELETE_INCIDENT:
      return state.filter((item) => item.id === action.id)

    default:
      return state
  }
}

