/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import { memo } from 'react';

 function ChildUseEffect(props) {
    const [state, setstate] = useState(0)
    console.log('render Child' )
    useEffect(() => {
        console.log("componentDidMount - Child");
        return () => {
            console.log("WillUnMount - Child");
        }
    }, [state])
    console.log(`props.renderNotifi`, props.renderNotifi)
    return (
        <div>
            <h1>{props.renderNotifi}</h1>
            <textarea cols={30} rows={10} className="w-100" />
        </div>
    )
}

export default memo(ChildUseEffect)