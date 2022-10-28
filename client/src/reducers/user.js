const usersReducer = (state={data:null},action) =>{
    switch(action.type){
        case "SET_USERS":
            return state={data:action.payload}
        default:
            return state
    }
}

export default usersReducer