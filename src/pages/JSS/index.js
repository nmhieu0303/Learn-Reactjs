import React from 'react'
import { Button, ButtonYellow } from './components/Button'
import { StyleLink } from './components/Link'

export default function JSS() {
    return (
        <div>
            <Button className='btn-styled'>Hello</Button>
            <Button primary size='2x' className='btn-styled'>primary</Button>
            <ButtonYellow >Yellow</ButtonYellow>
            <StyleLink className='btn' backgroundColor='blue'>aSDasdasd </StyleLink>
        </div>
    )
}
