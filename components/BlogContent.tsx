import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const BlogContentBox = styled.div`
    background-color: #fff;
    padding: 2em 2.5em;
    font-size: 1.1em;
    font-family: "Inter";
    font-weight: 300;
`

export const BlogContent: FC<PropsWithChildren<{}>> = ({ children }) => {
    return <BlogContentBox>{children}</BlogContentBox>
}