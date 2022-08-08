import React, { FC } from 'react'
import styled from 'styled-components'
import { BlogPost } from './BlogPost'
import { Sidebar } from './Sidebar'

const PageBox = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;
    font-family: "Computer Modern Serif";
    display: grid;
    grid-template-columns: 20em 1fr;
`

export const Page: FC = () => {
    return <PageBox>
        <Sidebar>hey</Sidebar>
        <div>
            <BlogPost/>
        </div>
    </PageBox>
}