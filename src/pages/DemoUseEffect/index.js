import React, { useState, useEffect, useCallback } from 'react'
import ChildUseEffect from './ChildUseEffect';



export default function DemoUseEffect() {

    const [like, setlike] = useState(0)
    const [state, setState] = useState({ like: 0 })
    useEffect(()=>{ 
        console.log('componentDidMount');
    },[])

    useEffect(()=>{ 
        console.log('componentDidUpdate');
    },[state])

    const renderNotifi =()=>{
        return `Bạn đã like ${like} lần!!`
    }

    const useCallbackNotifi = useCallback(renderNotifi,[like])

    return (
        <div className="my-5 w-25 mx-auto">
            <button type="button" className="btn btn-primary"
                onClick={() => { setlike(like+1) }}>
                    👍
            </button>
            <div className="card">
                <img className="card-img-top" src="https://danviet.mediacdn.vn/2020/7/1/u5-15935680709581348231404.jpg" alt="" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">{like} 👍</p>
                </div>
            </div>
            <button type="button" className="btn btn-primary"
                onClick={() => { setState({ like: state.like + 1 }) }}>
                    Like
            </button>
            <ChildUseEffect renderNotifi={useCallbackNotifi()}/>
        </div>

    )
}
