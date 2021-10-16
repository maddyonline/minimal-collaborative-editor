import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Editor } from '@tiptap/core'
import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import React from 'react'



const Tiptap = () => {
    const [editor, setEditor] = React.useState(null);
    React.useEffect(() => {
        // A new Y document
        const ydoc = new Y.Doc()
        // Registered with a WebSocket provider
        const provider = new WebsocketProvider('ws://127.0.0.1:8080', 'example-document', ydoc);
        const editor = new Editor({
            extensions: [
                StarterKit,
                Collaboration.configure({
                    document: ydoc,
                }),
            ],
            content: '<p>Hello World! 🌎️</p>',
        })
        setEditor(editor);

    }, [])


    console.log({ editor });

    return (
        <>
            {editor && <EditorContent editor={editor} />}
        </>
    )
}

export default Tiptap;