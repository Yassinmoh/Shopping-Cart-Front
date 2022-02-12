import React from 'react'
import '../../css/Header/header.css'
import { wores } from '../../words'

const Header = () => {
    return (
        <>
            <header>
                {wores.headerTitle}
            </header>
        </>
    )
}

export default Header