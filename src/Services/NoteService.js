import http from "./HttpService";

export const getNotesFromService=async ()=>{

    try {
        const result=await http.get('notes');

        return result.data;
    }
    catch (ex)
    {
        console.log(ex)
    }
}

export const newNote=async note=>{
    const result=await http.post('newnote',note);
    return result.data;
}