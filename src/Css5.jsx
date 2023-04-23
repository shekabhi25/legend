import React from 'react'
import { useState } from 'react';

export default function Css5() {


var[ x ,funx] =useState("red");
var y="blue";
var y2="black"
const [  open,useopen] =useState(true);

function changeTextcol(){
if(open)
{

    funx(y);
    // open=false;
    useopen(false)
}
else{
    funx(y2)
    useopen(true)
}
    // alert("change color of text box");
    

}
    const btnStyle={

        color: "black",
        backgroundColor : x,
    fontSize : "20px"
    };


    const textStyle={
        color: "green",
        background : x
    }
  return (
    <div>
      


      <textarea name="" id="" cols="20" rows="10"   style={textStyle} ></textarea>



      <button   onClick={changeTextcol} style={btnStyle}>btn is this</button>
    </div>
  )
}
