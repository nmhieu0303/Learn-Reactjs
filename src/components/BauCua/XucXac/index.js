import React from 'react'
import { animated, useSpring } from 'react-spring';
import './XucXac.css'
export default function XucXac(props) {
    const { xucXac } = props;

    const [spring, set] = useSpring(() => ({
        to: {
            xyz: [900, 900, 900]
        },
        from: {
            xyz: [0, 0, 0]
        },
        config: { duration: 1000 },
        reset: true
    }))
    set({ xyz: [900, 900, 900] ,reset: true})
    return (
        <div className="scene ml-5">
            <animated.div className="cube"
                style={{
                    transform: spring.xyz.interpolate((x, y, z) => `translateZ(-25px) rotateX(${x}deg)  rotateY(${y}deg)  rotateZ(${z}deg)`)
                }}
            >
                <img className="cube__face front" src={xucXac.hinhAnh} alt={xucXac.name} />
                <img className="cube__face back" src='./images/GameBauCua/ga.png' alt={xucXac.name} />
                <img className="cube__face left" src='./images/GameBauCua/ca.png' alt={xucXac.name} />
                <img className="cube__face right" src='./images/GameBauCua/tom.png' alt={xucXac.name} />
                <img className="cube__face bottom" src='./images/GameBauCua/cua.png' alt={xucXac.name} />
                <img className="cube__face top" src='./images/GameBauCua/bau.png' alt={xucXac.name} />
            </animated.div>
        </div>
    )
}
