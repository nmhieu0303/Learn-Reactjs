import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'


export default function Themes(propsComponent) {

    const configDarkTheme = {
        backgroundColor: '#000',
        color: '#fff',
    }
    const configLightTheme = {
        backgroundColor: '#fff',
        color: '#000',
    }


    const [state, setstate] = useState({ theme: configDarkTheme })

    const DivStyles = styled.div`
        background-color:${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
        padding:5%;
    `

    const changeTheme = (event) => {
        setstate(prevState => {
            return {
                ...prevState, theme : event.target.value === 'dark' ? configDarkTheme : configLightTheme
            }
        })
    }
    return (
        <ThemeProvider theme={state.theme}>
            <DivStyles>Test JSS config theme</DivStyles>

            <select onChange={changeTheme}>
                <option value="dark">Dark theme</option>
                <option value="light">Light theme</option>
            </select>
        </ThemeProvider>
    )
}
