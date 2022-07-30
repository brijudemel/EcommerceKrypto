import Cookie from 'js-cookie'

const setCookie=(cookieName,userin)=>{
    Cookie.set(cookieName,userin,{
        expires:1,
        secure:true,
        sameSite:'strict',
        path:'/'
    })
}

export default setCookie