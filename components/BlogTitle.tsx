import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Stack } from './util'

const TitleBox = styled.span`
    font-size: 4em;
    padding: 0 .2em;
    box-decoration-break: clone;
    line-height: 1em;
`

const TitleBGBox = styled(TitleBox)`
    background-color: black;
    opacity: 0.8;
    pointer-events: none;
    user-select: none;
`

const TitleTextBox = styled(TitleBox)`
    background-color: transparent;
    color: white;
    opacity: 1.0;
    & span[contenteditable] {
        outline: 0px solid transparent;
    }
`

interface BlogTitleProps {
    text?: string
    readOnly?: boolean
}

export const BlogTitle: FC<BlogTitleProps> = ({ 
    text = "", 
    readOnly = true, 
    onChange = () => {}
}) => {
    const [_text, setText] = useState(text)

    useEffect(() => {
        setText(text)
    }, [text])

    return <Stack style={{ overflow: 'hidden', padding: '.6em 0 .2em 0' }}>
        <div style={{zIndex: 0}}><TitleBGBox>
            {_text}
        </TitleBGBox></div>
        <div style={{zIndex: 1}}><TitleTextBox>
            {_text}
        </TitleTextBox></div>
    </Stack>
}