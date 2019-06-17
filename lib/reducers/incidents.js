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
    case 'CREATE_INCIDENT':
      return [
        ...state,
        {
          id: action.id,
          ...action.incidentObject
        }
      ]

    default:
      return state
  }
}

