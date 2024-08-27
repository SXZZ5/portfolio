import { useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wrapper from './Cards.jsx'


function BaseComponent(){
    const [active, setActive] = useState("none");
    console.log("base: " + active);
    return <div>
        <App active={active} setActive={setActive}/>
        <Wrapper active={active} setActive={setActive}/>
    </div>
}


function base() {
    createRoot(document.getElementById('root')).render(
        <>
            <BaseComponent/>
        </>
    )
}

base();