import React from 'react'

const BoxDisplay = (props) => {
  return (
    <div className="mt-5" style={{display:"flex"}}>
        {/* <p>  {props.currentBox}</p>
        <p>  {props.colorBoxes}</p> */}
        {
            props.colorBoxes.map((box,i)=>{
                return (
                    <div className="m-1" key={i} style={{backgroundColor: box, width: 300, height: 300, color: box}}> {box} </div>
                )
            })
        }
    </div>
  )
}

export default BoxDisplay