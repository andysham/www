import React, { FC } from 'react'
import styled from 'styled-components'
import { BlogContent } from './BlogContent'
import { BlogTitle } from './BlogTitle'
import { Slate, Editable } from 'slate-react'
import { useEditor } from '../hooks'
import { Descendant } from 'slate'

const BlogPostBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 20em;
`

const ImageBox = styled.div`
    display: grid;
    grid-column: 1 / 3;
    background-color: #eee;
    height: 20em;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 4em;
    & div {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }
`

const initialValue: Descendant[] = [{
    children: [{ text: 'A line of text in a paragraph.' }],
  }]

export const BlogPost: FC = () => {

    const readOnly = false
    const editor = useEditor()

    return <Slate editor={editor} value={initialValue}>
        <BlogPostBox>
            <ImageBox>
                <BlogTitle text="Diffusion Models: A Guide" readOnly={readOnly}/>
            </ImageBox>
            <BlogContent>
                <Editable readOnly={readOnly} onKeyDown={event => {
                    if (event.key === '&') {
                        // Prevent the ampersand character from being inserted.
                        event.preventDefault()
                        // Execute the `insertText` method when the event occurs.
                        editor.insertText('and')
                    }
                }}/>
            </BlogContent>
        </BlogPostBox>
    </Slate>
}