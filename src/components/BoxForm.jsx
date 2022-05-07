import React, { useState } from 'react'

const BoxForm = (props) => {

    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(color);
        setColor("");
    
    }

  return (
    <div>
    <div className='container mt-5'>
       <div className='row'>
           <div className='col'></div>
           <div className='col bg-light'>
   <form onSubmit={ handleSubmit }>
       <div className='mb-3' >
           <label className='form-label'>Color: </label> 
           <input className='form-control' type="text" onChange={ (e) => setColor(e.target.value)} value={color} />
           <input className='btn btn-primary mt-3' type="submit" value='Add' />
       </div>     
   </form>
   </div>
   <div className='col'></div>
   </div>
   </div>

</div>
  )
}

export default BoxForm