import styled from "styled-components";

/**
 * All children will be directly stacked on top of one another, rather than being separated.
 */
export const Stack = styled.div`
    display: grid;
    grid-template: 1fr / 1fr;
    & * {
        grid-area: 1 / 1 / 2 / 2;
    }
`