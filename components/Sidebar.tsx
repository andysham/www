import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { ShamDev } from './ShamDev'

const SidebarBox = styled.div`
    background-color: #000000;
    color: white;
    display: grid;
    grid-template-rows: auto 1fr;
`

const ShamDevBox = styled.div`
    padding: 1em;
    text-align: center;
`

export const Sidebar: FC<PropsWithChildren<{}>> = ({ children }) => {
    return <SidebarBox>
        <ShamDevBox>
            <ShamDev/>
        </ShamDevBox>
        <div>{children}</div>
    </SidebarBox>
}