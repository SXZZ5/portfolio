import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Scroller from "./Scroller";

import cflogo from './assets/logocf.png'
import lclogo from './assets/lclogo.png'
import cclogo from './assets/cc.png'
import linkedinlogo from './assets/linkedinlogo.png'
import gmaillogo from './assets/gmaillogo.png'
import parserT from './assets/parserT.png'
import ballstop from './assets/ballstop.png'
import githublogo from './assets/github_logo.png'

import './Cards.css'

function Wrapper({ active }) {
    return <>
        <div className="flex align-center justify-center"
            style={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "50",
            }}>
            <CardWrapper active={active} />
        </div>
    </>
}

function CardWrapper({ active }) {
    console.log("cardwrapper: " + active);
    if (active == "none") {
        return <div className="flex justify-center">
            <Inactive />
        </div>
    } else if (active == "Profiles") {
        return <div className="flex  justify-center text-white">
            <Profiles />
        </div>
    } else if (active == "Projects") {
        return <div className="flex  justify-center text-white">
            <Projects />
        </div>
    } else if (active == "Contact") {
        return <div className="flex  justify-center text-white">
            <Contact />
        </div>
    }
}

function Profiles() {
    const spring = useSpring({
        from: { x: -400 },
        to: { x: 0 },
        config: {
            mass: 1,
            friction: 10,
            tension: 150,
        }
    })

    return <>
        <animated.div className="w-full flex  justify-center" style={{ ...spring }}>
            <Card imglocation={cflogo} link={"https://codeforces.com/profile/SXZZ5"} stringArr={textCodeforces} />

            <Card imglocation={cclogo} link={"https://www.codechef.com/users/sxzz5"} stringArr={textCodechef} />

            <Card imglocation={lclogo} link={"https://leetcode.com/u/sushantsxzz5/"} stringArr={textLeetcode} />
            {/* <Card imglocation={githublogo}/> */}

        </animated.div>
    </>
}

function Projects() {
    const spring = useSpring({
        from: { y: 300 },
        to: { y: 0 },
        config: {
            mass: 1,
            friction: 10,
            tension: 150,
        }
    })

    return <>
        <animated.div className="w-full flex justify-center" style={{ ...spring }}>
            <Card imglocation={parserT} link={"https://github.com/SXZZ5/ParserT"} stringArr={textParserT} />
            <Card imglocation={ballstop} link={"https://github.com/SXZZ5/BallStop"} stringArr={textBallstop} />
        </animated.div>
    </>
}

function Contact() {
    const spring = useSpring({
        from: { x: 300 },
        to: { x: 0 },
        config: {
            mass: 1,
            friction: 10,
            tension: 150,
        }
    })

    return <>
        <animated.div className="w-full flex justify-center" style={{ ...spring }}>
            <Card imglocation={linkedinlogo} link={"https://www.linkedin.com/in/sushantsxzz5/"} stringArr={textLinkedin} />
            <Card imglocation={gmaillogo} link={"www.gmail.com"} stringArr={textGmail} />
        </animated.div>
    </>
}

function Inactive() {
    return <>
        <Scroller />
    </>
}

function SubCard({ imglocation, link }) {
    return <>
        <div className="card flex items-center justify-center"
            style={{
                boxShadow: "0px 0px 10px 8px rgba(97,97,97,1)",
            }}>
            <a href={link} className="card__content flex items-center justify-center">
                <img src={imglocation} />
            </a>
        </div>
    </>
}

function Card2({ textStrings, link, }) {
    const spring = useSpring({
        from: { y: 100},
        to: {y: 0},
        config:{
            mass: 1,
            friction: 10,
            tension: 150,
        }
    })

    return <animated.div className="card items-center justify-center" style={{...spring}}>
        <a className="card__content flex flex-col items-center justify-center" style={{
            boxShadow: "-3px 4px 44px 38px rgba(131, 38, 213, 0.4)",
        }} href={link}>
            <div className="card__glass flex flex-col items-center justify-center">

                {textStrings.map((z) => {
                    return <>
                        <TextComponent textString={z} />
                    </>
                })}
            </div>
        </a>
    </animated.div>
}

function Card({ imglocation, link, stringArr = sample, }) {
    const [showing, setshowing] = useState(false);

    function toggleState() {
        setshowing((prev) => {
            return !prev;
        })
    }

    console.log(showing);


    if (!showing) {
        return <div onMouseEnter={toggleState}>
            <SubCard imglocation={imglocation} link={link} />
        </div>
    } else {
        return <div onMouseLeave={toggleState}>
            <Card2 textStrings={stringArr} link={link} />
        </div>
    }
}

function TextComponent({ textString, }) {
    const spring = useSpring({
        from: { y: 50 },
        to : { y: 0 },
        config: {
            mass: 1,
            friction: 10,
            tension: 150,
        }
    })
    return <animated.div className="w-full text-slate-900 font-domine font-semibold text-xl p-2" style={{ ...spring}}>
        <span>&#8226;</span>
        {textString}
    </animated.div>

}

const sample = ["sample string 1", "sample string 2"];
const textCodeforces = ["Achieved Specialist Title", "100+ Contests", "900+ Problems Solved"];
const textLeetcode = ["Data Structures", " Algorithms"];
const textCodechef = ["Ranked 3 Stars.", "Country Rank of 4000."]
const textParserT = ["CLI Tool to parse Test Cases.", "Built with Modern C++ 20."]
const textBallstop = ["Simple 2D Game.", "Written using SDL2.", "Cross-Platform."]
const textGmail = ["sushantsxzz5@gmail.com"];
const textLinkedin = ["Click to visit."]


export default Wrapper;

