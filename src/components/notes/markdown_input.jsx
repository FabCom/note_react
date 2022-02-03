import React, { useEffect} from "react";

const MarkdownInput = ({notes, setNotes, id, setId, title, setTitle,text,setText, activNote, setActiveNote}) => {
  console.log(activNote)
  const updateNote = (title, id, text) => {
    const newNote = notes.map((note)=> {
      if (note.id === id) {
        return { title,id,text}
      } else {
        return note
      } 
    })
    setNotes(newNote)
  }

  useEffect(() => {
    if(activNote){
      setId(activNote.id)
      setTitle(activNote.title)
      setText(activNote.text)
    }
  },[activNote, setId,setTitle,setText])

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log(notes)
    updateNote(title,id,text)
    
    console.log(notes)
  }

  const onTitleChange = (event) => {
    setTitle(event.target.value)

  }

  const onTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>titre</label>
      <input type='text' value={title} required onChange={onTitleChange}/>
      <label>Text</label>
      <textarea type="text" value={text} onChange={onTextChange} />
      <button className="btn-add" type="submit">valider</button>
    </form>
  )
}

export default MarkdownInput