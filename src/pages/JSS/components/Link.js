import React from 'react'
import styled from 'styled-components'

export const Link = ({ className, children, ...resprops }) => (
    <a className={className} {...resprops}>
        {children}
    </a>
)

export const StyleLink = styled(Link)`
    background-color: ${props => props.backgroundColor|| 'red'};
    color: white;
    font-weight: bold;
`