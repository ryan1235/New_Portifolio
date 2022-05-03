import Style from './Navbar.module.css'
import Link from 'next/link'
import { DiTerminal } from "react-icons/di";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from 'react';



export default function Navbar() {
    const [menuHamburger, setMenuHamburger] = useState(false)
    function openMenuHamburger() {
        setMenuHamburger(!menuHamburger)
    }
    return (
        <>
            <nav data-aos="fade-down" className={Style.nav_conteiner}>
                <DiTerminal />
                <menubar>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="../#experiencia">
                        <a >Experiêcias</a>
                    </Link>
                    <Link href="/Projetos">
                        <a>Projetos</a>
                    </Link>
                    <Link href="/Contatos">
                        <a>Contatos</a>
                    </Link>
                </menubar>
            </nav>
            {menuHamburger ? null :<div data-aos="zoom-out-left" onClick={openMenuHamburger} className={Style.containerMobile}>
                <HiOutlineMenu />
            </div>}
            {menuHamburger &&
                <nav onClick={openMenuHamburger} data-aos="zoom-out" className={Style.navMobile}>
                    <div data-aos="fade-right" className={Style.linksMobile}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="../#experiencia">
                                <a >Experiêcias</a>
                            </Link>
                            <Link href="/Projetos">
                                <a>Projetos</a>
                            </Link>
                            <Link href="/Contatos">
                                <a>Contatos</a>
                            </Link>
                    </div>
                </nav>
            }
        </>
    )

}