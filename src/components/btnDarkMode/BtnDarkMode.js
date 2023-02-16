/* eslint-disable no-mixed-operators */
import { useState, useEffect, useRef } from "react"

import sun from "./../../img/icons/sun.svg"
import moon from "./../../img/icons/moon.svg"

import "./style.css"


function BtnDarkMode () {

    const [darkMode, setDarkMode] = useState("light");
    const btnRef = useRef(null);

    const date = new Date();
    const hours = date.getHours();
    
  

    useEffect(() => {

        if (darkMode === "dark") {
            document.body.classList.add("dark")
            btnRef.current.classList.add("dark-mode-btn--active")
        } else {
            document.body.classList.remove("dark")
            btnRef.current.classList.remove("dark-mode-btn--active")
        }

    }, [darkMode]);



    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === "light" ? "dark" : "light";
        })
    };

    useEffect(() => {
        if ((hours >= 21 && hours < 24) || (hours >= 0 && hours <= 6) ) {
            setDarkMode("dark")
        } else {
            setDarkMode("light")
        }
    }, [hours]);

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}

export default BtnDarkMode