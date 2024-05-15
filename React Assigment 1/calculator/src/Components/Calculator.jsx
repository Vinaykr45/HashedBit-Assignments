import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {

    const [input,setinput] = useState('')

    const handelCalculator = (e) => {
      let value = e.target.getAttribute('value');
      
      if(value){
          setinput(input+value)
      }
      if(value==='='){
          setinput(eval(input))
      }
      if(value==='C'){
          setinput('')
      }
    }
console.log(input)
  return (
    <>
        <section className="bg">
        <div className="box">
            <div className="input">
                <input className="input_val" type="text" value={input} />
            </div>
    
        <div className="inner-box-grid">
          <div className="number add" value="+" onClick={handelCalculator}>
             +
            </div>
            <div className="number sub" value="-" onClick={handelCalculator}>
               -
          </div>
          <div className="number mul" value="*" onClick={handelCalculator}>
            ×
          </div>
          <div className="number divide" value="/" onClick={handelCalculator}>
              ÷
          </div>
            <div className="number nb-1" value="7" onClick={handelCalculator}>
               7
            </div>
            <div className="number nb-2" value="8" onClick={handelCalculator}> 
               8
          </div>
          <div className="number nb-3" value="9" onClick={handelCalculator}> 
               9
          </div>
          <div className="number nb-4" value="=" onClick={handelCalculator}> 
               =
          </div>
            <div className="number nb-5" value="4" onClick={handelCalculator}>
               4
            </div>
            <div className="number nb-6" value="5" onClick={handelCalculator}> 
               5
          </div>
          <div className="number nb-7" value="6" onClick={handelCalculator}> 
               6
          </div>
          <div className="number nb-8" value="1" onClick={handelCalculator}> 
               1
          </div>
          <div className="number nb-9" value="2" onClick={handelCalculator}> 
               2
            </div>
            <div className="number nb-10" value="3" onClick={handelCalculator}>
               3
          </div>
          <div className="number nb-11" value="0" onClick={handelCalculator}>
               0
          </div>
          <div className="number nb-12" value="." onClick={handelCalculator}>
               .
          </div>
          <div className="number nb-13" value="C" onClick={handelCalculator}>
               C
          </div>
         </div>
    </div>
    </section>
    </>
  )
}

export default Calculator
