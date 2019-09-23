
const initialState = {
  friends: [
    {name: 'Victor', photo:'img/photo.jpg', id:1},
    {name: 'Sevilia', photo:'img/photo.jpg', id:2},
    {name: 'Billi', photo:'img/photo.jpg', id:3},
    {name: 'Hash', photo:'img/photo.jpg', id:4},
  ]
}

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;
