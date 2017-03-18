export function addItem(item){
  return {
    type: 'ADD_ITEM', item
  }
}

export function deleteItem(id) {
  return {
    type: 'DELETE_ITEM', id
  }
}

export function navigationDestination(bool) {
  return {
    type: 'NAVIGATION_DESTINATION', bool
  }
}

//TODO DO YOU NEED TO ADD INVENTORY INTO THE REDUX STORE?
