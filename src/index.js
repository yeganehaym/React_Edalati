import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./Counter";
import {Counters} from "./Counters";
import {RatingBar} from "./RatingBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <RatingBar  rate={2} readonly={false}/>
    <RatingBar count={5} rate={3} />
    <RatingBar count={5}  readonly={false}/>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
