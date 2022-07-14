import React from 'react'
import useSound from 'use-sound';
import{useState} from "react" 
import Add from "./components/Add"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import s1 from "./sound1.wav"



function App() {


  const [allTasks, setallTasks] = React.useState([]);
  const [savInd, toInd] = React.useState(); 
  const audio = new Audio(s1);
 // audio.loop=true;
  var i;
  // const soundUrl = '/public/sound1.wav';
  // const [play] = useSound(soundUrl, {
  //   volume: 0.5,
  // });
//   const ringing=()=>{
//     audio.play();
       
 
//   audio.onplaying=function(){
//     if(window.confirm("here"))
//       audio.pause()
  
//   }
// }
//   const timer=()=>{ 
//   const date=new Date()
//    var hr=date.getHours();
//    var min=date.getMinutes();
//    var yer=date.getFullYear();
//    var mon=date.getMonth()+1;
//    var day=date.getDate()
//    if (mon===10 || mon===11 || mon===12) {
//     mon=date.getMonth()+1;
//    }
//    else{
//     mon=`${0}${date.getMonth()+1}`;
//    }
//   if (hr.toString().length===1) {
//     hr=`${0}${date.getHours()}`
//    }
//    else{
//     hr=date.getHours();
//    }
//    if (min.toString().length===1) {
//     min=`${0}${date.getMinutes()}`
//    }
//    else{
//     min=date.getMinutes();
//    }
//    for (i = 0; i < allTasks.length; i++) {
    
//      var ob=allTasks[i] 
    
//     if(ob.when===`${hr}:${min}` && ob.dates ===`${yer}-${mon}-${day}`&& ob.checks===false)
//      {
      
//         ringing();
//    }

//   } 

//    }

//    //timer()
//    setInterval(timer,1000); 
  
 const stop=()=>{
   alert("here")
   audio.pause()
  //  clearInterval(timer)
 }
const addTask=(task,dates,when,checks)=>{
  const taskInfo={task,dates,when,checks}
   const newTask=[...allTasks,taskInfo]
   setallTasks(newTask)
  //  setTask("")
  //  setDates("")
  //  setWhen("")
  //  toggleShow(true);
  
 }

//  const toDelete=(index)=>{
//    const filt=allTasks.filter((t,index)=>(index))
//    setallTasks(filt);
//  }
//  const toEdit=(index)=>{
//    const editTask=allTasks[index];
//    setTask(editTask.task)
//    setDates(editTask.dates)
//    setWhen(editTask.when)
//    toggleShow(!show);
//    toChanged(!showed)
//    toChange(!shown)
//    toInd(index)
//  }
 const saved=(task,when,dates,toChanged,toChange,setTask,setDates,setWhen,toggleShow)=>{
  
   const hit=allTasks[savInd]
   hit.task=task
   hit.when=when
   hit.dates=dates
   console.log(hit)
   toChanged(false)
   toChange(true)
   setTask("")
   setDates("")
   setWhen("")
   toggleShow(true); 
   alert("saved edited Task")

 }
//  const check=(index)=>{
//   const newChecks=allTasks[index]
//     if (newChecks.checks===true) {
//       newChecks.checks=false;
//       toComplete(newChecks.checks)
//     }
//   else{
//     newChecks.checks=true;
//     toComplete(newChecks.checks)
//   }
    
  
//  }
   
  
  return(
    <>
  <div className="container-fluid justify-content-center align-items-center">
    <h1 className='text-white text-center'>To Do List</h1>
    <button onClick={()=>stop()}>stop</button>

              <Add allTasks={allTasks} addTask={addTask} saved={saved}/> 

    
          <div className="row d-flex mt-5 align-items-center ">
            <div className="col-6 mx-auto  pb-3 bg-light rounded">
            <h1 className='text-center'>All Tasks</h1>
            
            {allTasks.length<1? <h6>No task yet</h6>:
              // 08103612630 filter,find,indexOf
              
              allTasks.map((t,index)=>( 
                
                <div style={{backgroundColor:'lightgrey'}} className='shadow h-25  mt-3 rounded  p-2'>
                 <input onClick={()=>check(index)} type="checkbox" /><br/>
                  <small className="float-start">{t.dates}</small>
                  <button  style={{width:'10px',height:'10px',color:'blue'}} onClick={()=>toEdit(index)} className='float-end  btn'>
                     <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                  <button style={{width:'10px',height:'10px',color:'red'}} onClick={()=>toDelete(index)} className='float-end btn'>
                      <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                    <br/>
                    <span style={{ textDecoration: allTasks[index].checks===true ? "line-through" : "" }}>{t.task}</span>
                  <br/>
                    <small className='float-start'>{t.when}</small>
                    <br/>
                  
                </div> 
                
                  )
              )
             
               
            
            }
          </div>
          </div>
          


  </div>

  
    </>
  )
  
}
export default App;
