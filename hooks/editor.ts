import { useMemo } from 'react'
import { BaseEditor, createEditor } from 'slate'
import { ReactEditor, withReact } from 'slate-react'


export const useEditor = () => {
    return useMemo(
        () => withReact(
            createEditor() as BaseEditor & ReactEditor
        ), []
    )
}