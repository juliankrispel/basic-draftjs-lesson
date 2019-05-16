import React, { useState } from 'react'
import './App.css'
import { Editor, EditorState } from 'draft-js'

const initialState = EditorState.createEmpty()

function App() {
  const [editorState, setEditorState] = useState(initialState)
  return <div className="App">
    <Editor
      editorState={editorState}
      onChange={setEditorState}
    />
  </div>
}

export default App
