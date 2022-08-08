import React, { FC } from 'react'
import styled from 'styled-components'

const ShamDevBox = styled.div`
    font-size: 2em;
    font-family: "Computer Modern Serif";
    user-select: none;
`

export const ShamDev: FC = () => {
    return <ShamDevBox><b>sham</b>.dev</ShamDevBox>
}