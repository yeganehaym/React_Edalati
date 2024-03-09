import axios from "axios";


export const getNotesFromService=async ()=>{
    try {
        const result=await axios.get('http://localhost:5140/notes',{

        });
        return result.data;
    }
    catch (ex)
    {
        console.log(ex)
    }
}

export const newNote=async note=>{
    const result=await axios.post('http://localhost:5140/postNote',note);
    return result.data;
}