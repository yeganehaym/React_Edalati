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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
    <Routes>
        <Route path={"/"} element={<App/>} />
        <Route path={"/products"} element={<Template><Products/></Template>} />
        <Route path={"/products2"} element={<Template><Products2/></Template>} />
        <Route path={"/counters"} element={<Template><Counters/></Template>} />
        <Route path={"/p/:id/:year"} element={<Template><Paramter/></Template>} />
        <Route path={"/p/:id/:year/:month"} element={<Template><Paramter/></Template>} />
    </Routes>
</BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
