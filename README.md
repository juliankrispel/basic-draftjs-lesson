1. `npm install draft-js --save-dev`
2. `import { Editor, EditorState } from 'draft-js'`
3. import { useState } from 'react';
4. ```jsx
const [editorState, setEditorState] = useState(EditorState.createEmpty())
5. onChange={setEditorState}
6. editorState={editorState}
```