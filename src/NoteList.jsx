import {useEffect, useState} from "react";
import {NoteItem} from "./Components/Shared/NoteItem";
import axios from "axios";
import * as noteService from "./Services/NoteService";

export const NoteList=()=>{

    const [notes,setNotes]=useState([]);


    const getNotesFromApi=()=>{

        const promise=axios.get('http://localhost:5140/notes');
        promise.then(result=>{
            console.log('Then');
            console.log(result);
            setNotes(result.data);
        });

        promise.catch(result=>{
            console.log('Catch');
            console.log(result);
        });

        promise.finally(()=>{
            console.log('Finally');
        })

    }

    const getNotesFromApiAsync=async ()=>{
        try {
            const result=await axios.get('http://localhost:5140/notes',{

            });
            setNotes(result.data);
        }
        catch (ex)
        {
            console.log(ex)
        }
    }

    const getNotesFromApiAsync2=async ()=>{
        try {
            const data=await noteService.getNotesFromService();
            setNotes(data);
        }
        catch (ex)
        {
            console.log(ex)
        }
    }

    useEffect(()=>{

        const fetch=async()=>{
            await getNotesFromApiAsync2()
        }

        fetch()

    },[])

    return(
        <>
            <div className={"iq-tab-content"}>

            <div className={"note-content tab-content"}>
                <div className={"tab-pane fade active show"}>
            <div className={"icon active animate__animated animate__fadeIn i-grid"}>
            <div className="row">

                <div className="col-lg-4 col-md-6">
            {
                notes.length>0 &&
                notes.map(note=><NoteItem key={note.id} note={note} />)
            }

                    {
                        notes.length==0 &&
                        <span>No Data</span>
                    }
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}