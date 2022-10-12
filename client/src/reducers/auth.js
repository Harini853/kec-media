const authReducer = (state = {data : null},action) => {
    switch(action.type){
        case 'SET_USER':
            localStorage.setItem('KEC-MEDIA',JSON.stringify({...action?.data}))
            return {...state,data:action?.data}
        default:
            return state
    }
}

export default authReducer