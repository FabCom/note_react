import React from "react";
import {v4 as uuidv4} from 'uuid'


const BtnAdd = ({notes, setNotes,activNote, setActivNote}) => {
  const data_newNote = {id: uuidv4(), title: 'new note', text: ''}
  
  const NewNote = (event) => {
    event.preventDefault()
    setNotes(notes => [...notes, data_newNote])
    setActivNote(data_newNote)
  }
  
  return (
    <button className="btn-add" onClick={(e) => NewNote(e)} >Créer</button>
  )
}

export default BtnAdd