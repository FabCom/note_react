import React, { useState, useEffect } from "react";
import Note from "./notes/note";
import Notes from "./notes/notes_list";
import BtnAdd from "./notes/btn_add"



const Dashboard = () => {
  // console.log(localStorage.blocNote)
  const [notes, setNotes] = useState([])
  const [activNote, setActivNote] = useState(null)
  const save = () => {
    console.log(notes)
    localStorage.setItem('blocNote',JSON.stringify(notes))
    console.log(localStorage.blocNote)
    setActivNote(null)
  }

  useEffect(() => {
    
    if(localStorage.blocNote){
      setNotes(JSON.parse(localStorage.blocNote))
    }
  },[setNotes])

  // console.log(activNote)
  return(
    <div className="container">
      <div className="sidebar">
        <BtnAdd notes={notes} setNotes={setNotes} activNote={activNote} setActivNote={setActivNote} />
        <Notes notes={notes} setNotes={setNotes} activNote={activNote} setActivNote={setActivNote} save={save}/>
      </div>
      <div className="content"><Note notes={notes} setNotes={setNotes} activNote={activNote} setActivNote={setActivNote} save={save}/></div>
    </div>
  )

}

export default Dashboard