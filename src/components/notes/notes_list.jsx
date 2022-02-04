import React from "react";

const Notes = ({notes, setNotes, activNote, setActivNote, save}) => {


  const onNoteSelected = (event, note) => {
    // console.log(activNote)
    setActivNote(notes.filter((item) => item.id === note.id)[0])
  }

  const deleteNote = ({id}) => {
    setNotes(notes.filter((note) => note.id !== id))
    save()
    // console.log(notes)

  }
  return (
    <div className="card-list">
      {
      notes.map((note) => 
        (
          
        <div className="card-reduced" key={note.id}  >
          <div className="card-reduced-left">
            <button className="btn-select" onClick={(e) => onNoteSelected(e, note)} >{note.title}</button>
          </div>
          <div className="card-reduced-right">
            <button className="btn-delete" onClick={() => deleteNote(note)} >X</button>
          </div>
        </div>
        )
      )
      }

    </div>
  )
}

export default Notes