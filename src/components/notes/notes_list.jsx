import React from "react";

const Notes = ({notes, setNotes, activNote, setActivNote}) => {


  const onNoteSelected = (event, note) => {
    // console.log(activNote)
    setActivNote(notes.filter((item) => item.id === note.id)[0])
  }

  const deleteNote = ({id}) => {
    setNotes(notes.filter((note) => note.id !== id))
    // console.log(notes)

  }
  return (
    <div className="card-list">
      {
      notes.map((note) => 
        (
          
        <div className="card-reduced" key={note.id} onClick={(e) => onNoteSelected(e, note)} >
          <button >{note.title}</button>
          <button onClick={() => deleteNote(note)} >X</button>
        </div>
        )
      )
      }

    </div>
  )
}

export default Notes