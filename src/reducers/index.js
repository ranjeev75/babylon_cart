import { combineReducers } from 'redux'

const initState = {
  bag: [],
  navigation: true,
  inventory: []
}

function bag(state=initState.bag, action){
  switch (action.type) {
    case 'ADD_ITEM':
      const itemInBag = state.findIndex((each) => each.id === action.item.id)
      if (itemInBag !== -1){
         return (state = state.map(item => {
            if(item.id !== action.item.id) return item;
              return {
                ...item,
                counter : item.counter + 1
              };
            })
          )
    } else {
      action.item.counter = 1
       return(
         [
          ...state,
          action.item
        ]
      )
    }

    case 'DELETE_ITEM':
      return (state = state.map(item => {
          if(item.id !== action.id) return item;
          return {
            ...item,
            counter : item.counter - 1
          };
        })
      )
    default:
        return state
  }
}

function navigation(state=initState.navigation, action){
  switch (action.type) {
    case 'NAVIGATION_DESTINATION':
      return state = action.bool
    default:
      return state
  }
}

function inventory(state=initState.inventory, action){
  switch (action.type) {
    case 'ADD_INVENTORY':
      return [
        ...state,
        action.inventory
      ]
    case 'ITEM_BOUGHT':
        return (
        state = state.map(item => {
          if(item.id !== action.id) return item;
          return {
            ...item,
            qty : item.qty - 1
          };
        })
      )
    case 'ITEM_RETURNED':
        return (
        state = state.map(item => {
          if(item.id !== action.id) return item;
            return {
              ...item,
              qty : item.qty + 1
            };
          })
        )
    default:
      return state
  }
}

const Reducer = combineReducers({
  bag,
  navigation,
  inventory,
})

export default Reducer
