
const initialState={
    user:'',
    loggedIn:false,
    email:'',

}

const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'signin':
            return{
                ...state,
                user:action.payload.user,
                loggedIn:true,
                email:action.payload.email,
            }
        case 'signout':
            return{
                ...state,
                user:'',
                loggedIn:false,
                email:''
            }
    
        default:
            return state
    }
}

export default userReducer;