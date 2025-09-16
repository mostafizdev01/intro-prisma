

const UserLogin = (payload: any) => {
     const {email, password} = payload;
     console.log(email, password)
}

export const AuthServices = {
    UserLogin
}