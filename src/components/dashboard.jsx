import React, { useState } from "react";
import Note from "./notes/note";
import Notes from "./notes/notes_list";
import BtnAdd from "./notes/btn_add"



const Dashboard = () => {

  const [notes, setNotes] = useState([])
  const [activNote, setActivNote] = useState(null)
  // console.log(activNote)
  return(
    <div className="container">
      <div className="sidebar">
        <BtnAdd notes={notes} setNotes={setNotes} activNote={activNote} setActivNote={setActivNote} />
        <Notes notes={notes} setNotes={setNotes} activNote={activNote} setActivNote={setActivNote}/>
      </div>
      <div className="content"><Note notes={notes} setNotes={setNotes} activNote={activNote} setActivNote={setActivNote}/></div>
    </div>
  )

}

export default Dashboard