import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



import Props2 from './Props2'
import Props3 from './Props3'
import Props4 from './Props4'

import Css5 from './Css5';

// const root2=ReactDOM.createRoot(document.getElementById(<props  name="abhishek" roll ={100} / >,'root2'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App  name="abhishke"  lname={"gupta"} />


       <Props2  name={"shivang"} lname={"yadav"} />
   

    <Props3  clg="lovely clg "/>
    <Props4   company ="xyz"  salary={80000} msg="what msg"/>

    <Css5/>
  </>
);





