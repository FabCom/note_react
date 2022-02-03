import React, { useState } from "react";
import Showdown from 'showdown';
import MarkdownInput from "./markdown_input";

const converter = new Showdown.Converter();

const Note = ({notes, setNotes, activNote, setActivNote}) => {
  // console.log(notes) 
  console.log(activNote)
  if(activNote === null){
    activNote = {id:null, title:'', text:''}
  }
  
  const [id, setId] = useState(activNote.id)
  const [title, setTitle] = useState(activNote.title)
  const [text, setText] = useState(activNote.text)
  
  const convertMarkdown = (text) => {
    return {__html:converter.makeHtml(text)}
  }

  if (activNote.id === null){
    return (
      <div className="card">
        <div className="card-top">
          <h1>Créer ou sélectionner une note</h1>
        </div>
        <hr/>
        <div className="card-bottom">
        </div>
      </div>
    )
  } else {
    return (
      <div className="card">
        <div className="card-top">
          {id}
          <h1>{title}{console.log(convertMarkdown(text))}</h1>
          <div dangerouslySetInnerHTML={convertMarkdown(text)} />
          
        </div>
        <hr/>
        <div className="card-bottom">
          <MarkdownInput 
            id={id}
            setId={setId}
            notes={notes}
            setNotes={setNotes}
            title={title}
            setTitle={setTitle}
            text={text}
            setText={setText}
            activNote={activNote}
          />
        </div>
      </div>
    )
  }
}

export default Note