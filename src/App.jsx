import { useState, useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import gll from "./assets/photu.png"
import CardWrapper from './Cards'

function App({ active, setActive }) {

    console.log("App: " + active);


    const springHello = useSpring({
        from: { x: -400 },
        to: { x: 0 },
        config: {
            mass: 1,
            friction: 10,
            tension: 100
        },
        delay: 0,
    })

    const springDes = useSpring({
        from: {x: 400},
        to: { x: 0},
        config: {
            mass: 1, 
            friction: 10,
            tension: 100
        },
        delay: 10,
    })

    const springPhoto = useSpring({
        from: { y: -800},
        to: { y: 0},
        config: {
            mass: 1,
            friction: 13,
            tension: 100,
        },
        delay: 1000,
    })

    const springButtons = useSpring({
        from: {y: 800},
        to: {y: 0},
        config:{
            mass: 1,
            friction: 20,
            tension: 180,
        },
        delay: 2000,
    })

    return <animated.div
        className="font-interfont font-semibold text-5xl text-white justify-center items-center"
        style={{ zIndex: "10", }}>

        {/* <Hello div> */}
        <animated.div style={{...springHello}}>
            Hello, I'm Sushant.
        <br></br>
        </animated.div>

        <animated.div className="font-interfont font-medium text-xl text-white"
            style={{ position: "relative", right: "60px", ...springHello}}>
            Final Year CS Student, and Aspiring Developer.
        </animated.div>
        <animated.div style={{...springButtons}}>
            <ButtonBar active={active} setActive={setActive} />
        </animated.div>
        <animated.div style={{ ...springPhoto }}>
            <Photo />
        </animated.div>
    </animated.div>

}

function Photo() {
    return <>
        <animated.div style={{
            position: "relative",
            left: 400,
            bottom: 200,
        }} >
            <img src={gll} height="200" width="200" />
        </animated.div>
    </>
}

function ButtonBar({ active, setActive }) {
    return <>
        <div>
            <animated.div style={{
                display: "flex",
                position: "relative",
                right: "100px",
                top: "5px",
            }}>
                <ButtonComponent1 active={active} setActive={setActive} />
                <ButtonComponent2 active={active} setActive={setActive} />
                <ButtonComponent3 active={active} setActive={setActive} />
            </animated.div>
        </div>
    </>
}

function ButtonComponent1({ active, setActive }) {

    function toggleState() {
        if (active == "Profiles") setActive("none");
        else setActive("Profiles");
    }

    console.log(active);

    return <>
        <div onClick={toggleState}>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-base px-5 py-3 text-center me-2 mb-2"
            >Profiles</button>
        </div>
    </>
}

function ButtonComponent2({ active, setActive }) {

    function toggleState() {
        if (active == "Projects") setActive("none");
        else setActive("Projects");
    }

    console.log(active);

    return <>
        <div onClick={toggleState}>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-base px-5 py-3 text-center me-2 mb-2"
            >Projects</button>
        </div>
    </>
}

function ButtonComponent3({ active, setActive }) {

    function toggleState() {
        if (active == "Contact") setActive("none");
        else setActive("Contact");
    }

    console.log(active);

    return <>
        <div onClick={toggleState}>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-base px-5 py-3 text-center me-2 mb-2"
            >Contact</button>
        </div>
    </>
}

export default App 
