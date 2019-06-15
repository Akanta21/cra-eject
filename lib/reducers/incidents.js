// initial incidents
const initialState = [
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


const incidents = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_INCIDENT':
      return [
        ...state,
        {
          id: action.id,
          ...action.incidentObject
        }
      ]

    case 'DELETE_INCIDENT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default incidents