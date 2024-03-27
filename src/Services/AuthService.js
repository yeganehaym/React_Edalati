import client from './HttpService'

const login_url="/login";

export const login=async (login)=>{

    const result=await client.post(login_url,login);
    if(result.statusCode==204)
        return null;
    return result.data.token;

}