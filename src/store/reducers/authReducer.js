const initState = {
    authError: null
}


const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log("Login error")
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCES':
            console.log("login success")
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS': 
            console.log("signout success")
            return state
        default: 
            return state;
    }
    
}

export default authReducer