import { ADD_USER } from '../types'

// initial incidents
export const initialUser = [
  {
    id: 1000,
    name: "Andrian",
    gender: "Male"
  }
]


export default (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]

    default:
      return state
  }
}

