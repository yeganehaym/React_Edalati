import {useState} from "react";
import * as noteService from "../Services/NoteService"
import {toast} from "react-toastify";
import Joi from "joi";
import {messages} from "../Utilities/Joi_translations";
import {PasswordInput} from "./Shared/PasswordInput";

export const NewNote=()=>{

    const [note,setNote]=useState({
        id:0,
        title:'',
        text:'',
        date:'',
    })

    const [errors,setErrors]=useState([]);

    const [error,setError]=useState({})



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

        const propertyValidator=Joi.object({
            [name]:validations[name]
        })

        const validationResult=propertyValidator.validate({[name]:value},options);
        if(validationResult.error && validationResult.error.details && validationResult.error.details.length>0)
        {
            setError({...error, [name]:validationResult.error.details[0].message})
        }
        else{
            setError({...error,[name]:''})
        }

    }

    const validations={
        title:Joi
            .string()
            .regex(/[^@ ^\u0600-\u06FF]/)
            .min(3)
            .max(30)
            .required()
            .label("عنوان"),
        text:Joi
            .string()
            .alphanum()
            .min(3)
            .valid()
            .required()
            .label("متن یادداشت")
    };

    const schema=Joi.object(validations);

    const options={
        abortEarly:false,
        allowUnknown:true,
        messages:messages,
        errors:{
            language:'fa'
        }

    }
    const submit=async e=>{
        e.preventDefault();

        const mynote={...note};

        const newSchema=schema['title'];
        const validationResult=schema.validate(mynote,options);
        console.log(validationResult);

        if(validationResult.error && validationResult.error.details)
        {
            setErrors(validationResult.error.details.map(e=>e.message))
        }
        return;

        const data=await noteService.newNote(note);

        console.log(data)
        if(data.id>0)
            toast('Data Added');
        else
            toast("Data Not Added")
    }
    return (
        <>
            {
                errors && errors.length>0 &&
                <p className={"alert alert-danger"} style={{direction:'rtl'}}>
                    <ul className={"text-danger"}>
                        {
                            errors.map(e=><li>{e}</li>)
                        }
                    </ul>
                </p>
            }
            <form method={"post"} onSubmit={submit}>
                <div className={"form-group"}>
                    <input className={"form-control"} placeholder={"Title"} type={"text"} name={"title"}
                           value={note.title} onInput={e=>setValue(e)} />
                    <span className={"text-small text-danger"}>{error["title"]}</span>
                </div>
                <div className={"form-group"}>
                    <textarea className={"form-control"}
                              name={"text"}
                              placeholder={"Write Your Note Here"} value={note.text}
                              onInput={e=>setValue(e)}></textarea>
                    <span className={"text-small text-danger"}>{error["text"]}</span>

                </div>

                <div className={"form-group"}>
                    <PasswordInput name={"pass"} value={"123456"} />

                </div>
                <div className={"form-group"}>
                    <button type={"submit"} className={"btn btn-primary"}>Save Note</button>
                </div>
            </form>
        </>
    )
}