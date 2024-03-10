import {useState} from "react";
import * as noteService from "../Services/NoteService"
import {toast} from "react-toastify";

export const NewNote=()=>{

    const [note,setNote]=useState({
        id:0,
        title:'',
        text:'',
        date:'',
    })

    const setValue=e=>{
        //const name=e.target.name;
        //const value=e.target.value;

        const {name,value}=e.target;

        const o={
            name:'',
            family:'',
            father:'yeganeh',
            address:'kashan'
        }

        const {address,family,father}=o;


        const mynote={...note};
        mynote[name]=value;
        setNote(mynote)
    }

    const submit=async e=>{
        e.preventDefault();
        const data=await noteService.newNote(note);

        console.log(data)
        if(data.id>0)
            toast('Data Added');
        else
            toast("Data Not Added")
    }
    return (
        <>
            <form method={"post"} onSubmit={submit}>
                <div className={"form-group"}>
                    <input className={"form-control"} placeholder={"Title"} type={"text"} name={"title"} value={note.title} onInput={e=>setValue(e)} />
                </div>
                <div className={"form-group"}>
                    <textarea className={"form-control"}
                              name={"text"}
                              placeholder={"Write Your Note Here"} value={note.text}
                              onInput={e=>setValue(e)}></textarea>
                </div>
                <div className={"form-group"}>
                    <button type={"submit"} className={"btn btn-primary"}>Save Note</button>
                </div>
            </form>
        </>
    )
}