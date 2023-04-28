import React, { useRef } from 'react'
import './style.css'
// import Groupchat from './component/groupchat'
import { useState } from 'react';
import { update } from 'lodash';

export default function Main_page() {
  const inputref=useRef(null);

  const[updated,setupdated]=useState('');

  const handleInputChange=()=>{
    setupdated(updated+ `\n`+inputref.current.value);
    // let sharduli = updated;

  }
  return (
    <div className='container'>
        <div className='container1'>
            <h1>Smartbot</h1>
            
            <hr/>

            <input
            type='text' placeholder='Enter your queries here...' ref={inputref} />
            
            <div>
             {updated}
            </div>
            
            <button onClick={handleInputChange}><i class="fa-solid fa-magnifying-glass"></i></button>
            
        </div>
    </div>
  )
}
