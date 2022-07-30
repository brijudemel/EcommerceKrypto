export const signInAction=(data)=>{
    return {
        type:'signin',
        payload:data
    }
}


export const signOutAction=(data)=>{
    return{
        type:'signout',
        payload:data
    }
}