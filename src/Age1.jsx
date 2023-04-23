import React from 'react'
import { useState } from 'react'
export default function Age1() {
    var x=0;
 var y=0;
    const [a,func1] =useState(x);
const [b,func2]=useState(y);

function incremnet2()
{
    func2(b+2);

}
    function incremnet()
    {
        
      func1(a+1);

      alert("this is alert box" + a);


    }
  return (



    <div>

        <></>
        <h1>age is {a}</h1>
    <button  onClick={incremnet}>

        click to incremnet
    </button>


    <h1> for my childer {b}</h1>

    <button  onClick={incremnet2 }>
    click to incremnet2
    </button>
    </div>
  )
}
