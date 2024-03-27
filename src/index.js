import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./Counter";
import {Counters} from "./Counters";
import {RatingBar} from "./RatingBar";
import {Products} from "./Products";
import {Products2} from "./Products2";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Template} from "./Template";
import Paramter from "./Paramter";
import {UserTemplate} from "./Components/Templates/UserTemplate";
import {NoteList} from "./Components/NoteList";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {NewNote} from "./Components/NewNote";
import {Login} from "./Components/Login";
import {Logout} from "./Components/Logout";
import {Cursor} from "./Components/Cursor";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
    <Routes>
        <Route path={"/"} element={<UserTemplate roles={['reader','writer']} ><NoteList/></UserTemplate>} />
        <Route path={"/admin"} element={<Template  roles={['reader','writer']}><NoteList/></Template>} />
        <Route path={"/new"} element={<UserTemplate roles={['writer']}><NewNote/></UserTemplate>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/logout"} element={<Logout/>} />
        <Route path={"/cursor"} element={<Cursor/>} />

    </Routes>
</BrowserRouter>

    <ToastContainer />
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
