// initial incidents
const initialState = [
  {
    title: "Test incident",
    assignee: "Admin",
    status: "Resolved"
  },
  {
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
          text: action.text,
          completed: false
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