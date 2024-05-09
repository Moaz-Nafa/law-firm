import React, { useEffect, useState } from 'react';
import './timer.css';
import MAP from '../../assets/map.png'

const Timer = ({maxRange}) => {

    const [counter1, setCounter1] = useState(maxRange);
    useEffect(()=>{
        if(counter1 < 532){
            setTimeout(()=> setCounter1(counter1 + 1),60)
        }
    },[counter1])
////////////////////////////////////////////////////////////////
    const [counter2, setCounter2] = useState(maxRange);
    useEffect(()=>{
        if(counter2 < 29){
            setTimeout(()=> setCounter2(counter2 + 1),1000)
        }
    },[counter2])
//////////////////////////////////////////////////////////////////    
    const [counter3, setCounter3] = useState(maxRange);
    useEffect(()=>{
        if(counter3 < 35){
            setTimeout(()=> setCounter3(counter3 + 1),1000)
        }
    },[counter3])

  return (
    <>
    <div className='timer'>
   
        <div className='timer-item'>
            <div className='counter'>
                + {counter1}
            </div>
            <h2> Satisfied Clients</h2>
        </div>

        <div className='timer-item'>
            <div className='counter'>
                + {counter2}
            </div>
            <h2> Lawyers</h2>
        </div>

        <div className='timer-item'>
            <div className='counter'>
                + {counter3}
            </div>
            <h2>Years Of Experience</h2>
        </div>
    </div>
    </>
  )
}

export default Timer