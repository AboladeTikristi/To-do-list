import React from 'react'

function Add({allTasks,addTask,saved}) {
    const [show, toggleShow] = React.useState(true);
    const [shown, toChange] = React.useState(true);
    const [showed, toChanged] = React.useState(true);
    const [checks, toComplete] = React.useState(false);
    const [task, setTask] = React.useState("");
    const [dates, setDates] = React.useState("");
    const [when, setWhen] = React.useState("");
  return (
    <>
        <div style={{marginTop:'500px!important'}} className="row w-100 d-flex mt-5 align-items-center position-fixed bottom-0">
      <div align="center" className="col-12 mx-auto  pb-3  rounded">
        
        <div className="input-group">
        
          <input type="text" className="form-control w-75 position-relative"onChange={(e)=>setTask(e.target.value)}style={
            {fontFamily:'Arial, FontAwesome'}}value={task} placeholder="&#xf0ca; What would you like to do? "required/>
            <button className='btn bg-success position-relative right-0' onClick={() => toggleShow(!show)}><i className="fa fa-calendar" aria-hidden="true"></i></button> 
         {showed && (<button className='btn bg-danger position-relative right-0'onClick={()=>addTask(task,dates,when,checks)}><i className="fa fa-plus-circle" aria-hidden="true"></i></button> )} 
          {!shown && (<button value={toChange} onClick={()=>saved(task,when,dates,toChanged,toChange,setTask,setDates,setWhen,toggleShow)}className='btn bg-danger position-relative right-0'>sav;</button>)}
          
         
        </div>
        {!show && (<div className=" mt-5 input-group date">

          <input type="time" placeholder="00:00 (24 hours-format)"value={when}onChange={(e)=>setWhen(e.target.value)} className='form-control'/>
          <input type="date" placeholder="00/00/0000" value={dates}  onChange={(e)=>setDates(e.target.value)}className='form-control'/>
      
        </div>)}
      </div>

    </div>
    </>
  )
}

export default Add

