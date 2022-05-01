import Style from './Navbar.module.css'
import Link from 'next/link'
import { DiTerminal } from "react-icons/di";


export default function Navbar() {
    return(
        <nav data-aos="fade-down" className={Style.nav_conteiner}>
            <DiTerminal/>
            <menubar>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link  href="#experiencia">
                    <a >Experiêcias</a>
                </Link>
                <Link  href="/Projetos">
                    <a>Projetos</a>
                </Link>
                <Link href="/Contatos">
                    <a>Contatos</a>
                </Link>
            </menubar>
        </nav>
    )

}