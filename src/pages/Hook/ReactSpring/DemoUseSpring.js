import { getRoles } from '@testing-library/react'
import React, { useState } from 'react'
import { useSpring, animated, useSprings, useTrail, useTransition } from 'react-spring'


const items = ['Lorem', 'Mor', 'Times']

export default function DemoUseSpring() {
    /*const propsColor = useSpring({ to: { opacity: 1, color: 'yellow' }, from: { opacity: 0, color: 'red' } })
    const propsNumber = useSpring({
        from: { number: 0 },
        number: 100,
        config: { duration: 3000 }
    })
    const { color, fontSize, ...propsArray } = useSpring({
        color: [252, 3, 3],
        fontSize: 3,
        from: {
            color: [244, 252, 3],
            fontSize: 1
        },
        config: { duration: 3000, delay: 0 }
    })

    const propsAnimation = useSpring({
        from: {
            with: '50%',
            height: '50%',
            fontSize: '1rem'
        },
        to: async (next, cancel) => {
            await next({ with: '100%', height: '100%', fontSize: '3rem' });
            await next({ with: '50%', height: '50%', fontSize: '1rem' });
            await next({ with: '100%', height: '100%', fontSize: '3rem' })
        },
        loop: true,
        reverse: true,
        config: { duration: 3000 }
    })

    const opacitys = [
        { opacity: 0.3, color: 'red', content: 'FrontEnd', num: 300 },
        { opacity: 0.5, color: 'green', content: 'FullStask', num: 50 },
        { opacity: 0.8, color: 'blue', content: 'BackEnd', num: 100 },
        { opacity: 1, color: 'yellow', content: 'DA', num: 30 }
    ]

    // const propsSprings = useSprings(opacitys.length, opacitys.map(item => {
    //     return {
    //         opacity: item.opacity,
    //         color: item.color,
    //         content: item.content,
    //         num: item.num,
    //         from: {
    //             opacity: 0,
    //             color: '#000',
    //             num: 0
    //         },
    //         config:{duration: 3000}
    //     }
    // }))


    // const renderContent = (propSprings) => {
    //     return (
    //         <>
    //             <animated.h2 style={propSprings}>
    //                 {propSprings.content}
    //             </animated.h2>
    //             <animated.h2 style={propSprings}>
    //                 { propSprings.num.to(n=>n.toFixed(0))}
    //             </animated.h2>
    //         </>
    //     )
    // }*/

    // let [status, setstatus] = useState(true)

    // const [trail, set, stop] = useTrail(items.length, () => {
    //     return {
    //         opacity: status ? 1 : 0,
    //         color: 'green',
    //         height: status ? 80 : 0,
    //         from: { opacity: 0, height: 0, color: 'red' },
    //         config: { duration: 1000 ,mass: 5, tension: 2000, friction: 200 }
    //     }
    // })
    // console.log(`state`, status)

    // set({
    //     opacity: status ? 1 : 0,
    //     color: 'green',
    //     height: status ? 80 : 0,
    //     from: { opacity: 0, height: 0, color: 'red' },
    //     config: { duration: 1000 ,mass: 5, tension: 2000, friction: 200 }
    // })


    const [arrItem, setArrItem] = useState([
        { id: 1, title: 'ABC', content: 'nextjs' },
        { id: 2, title: 'FE', content: 'reactjs' },
        { id: 3, title: 'BE', content: 'nextjs' }])

    const transitions = useTransition(arrItem,{
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' }
    })

    const renderItems = () => {
            return transitions((transition,item, index) => {
                console.log(`item`, item)
                return <animated.div style={transition} key={index} className="bg-dark p-3 text-white my-2">
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    <button className="btn btn-danger"
                        onClick={()=>{
                            console.log(`item.id`, item.id)
                            setArrItem([...arrItem.filter(i=>i.id!==item.id)])
                        }}
                    >Xóa</button>
                </animated.div>
            })
    }
    return (
        <div>
            {/* <h2>Change color text</h2>
            <animated.div style={propsColor}>I will fade in</animated.div>
            <h2>Change number</h2>
            <animated.h1 className="text-danger">{propsNumber.number.to(n => n.toFixed(0))}</animated.h1>

            <animated.p className="text-primary" style={{ fontSize: propsNumber.number }}>{propsNumber.number.to(n => n.toFixed(0))}</animated.p> */}

            {/* <animated.h2
                style={
                    {
                        fontSize: fontSize.to(fontSize => `${fontSize}rem`),
                        color: color.to((r, g, b) => `rgb(${r},${g},${b})`)
                    }}>
                fontSize
            </animated.h2> */}

            {/* <animated.div>
                {propsSprings.map((propSprings, index) => {
                    return <div key={index}>
                        {renderContent(propSprings)}
                    </div>
                })}
            </animated.div>


            <animated.div className="bg-primary" style={propsAnimation}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reiciendis.
            </animated.div> */}

            {/* UseTrail */}
            {/* <button onClick={() => {
                setstatus(!status)
            }}>
                set toggle
            </button>
            <button onClick={() => {
                set({ color: 'blue' })
            }}>
                set Color
            </button>
            {trail.map((style, index) => {
                return (<animated.h1 key={index} style={style}>
                    {items[index]}
                </animated.h1>)
            })} */}

            <div className="container">
                {renderItems()}
            </div>

        </div>
    )
}
