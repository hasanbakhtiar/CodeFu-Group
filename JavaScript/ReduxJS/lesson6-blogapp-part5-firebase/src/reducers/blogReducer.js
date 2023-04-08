// reducer start
const blogState = [];

export const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog];
    case "UPDATE_BLOG":
        return    state.map(item=>{
            if (item.id === action.id) {
                return {
                    ...item,
                    ...action.udpate
                }
            }else{
                return item;
            }
        })   
    case "REMOVE_BLOG":
        return state.filter(({id})=>{
            return id !== action.myid
        })
        case "SET_BLOGS":
            return action.blogs;
    default:
      return state;
  }
}
// reducer end