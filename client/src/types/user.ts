export interface UserInterface{
    email: string;
    fullname: string,
    username: string,
    password:string,

}

export interface UserStateInterface{
    user:UserInterface
    userLoading:boolean
}
