import React, { useState } from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'

const Header = () => {
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow)
    }
    return (
        <header id='header' className={`${show ? "show" : ""}`} role='banner'>
            <Logo toggleMenu={toggleMenu} />

            <Menu />

            <Sns />
        </header>
    )
}

export default Header