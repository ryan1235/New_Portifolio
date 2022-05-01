import Style from './styles/Hub.module.css'
import Image from 'next/image'
import Btn from '../objects/Btn'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Hub() {
    return(         
        <section className={Style.hub_coteiner}>
            <div>
                <h2>OLÁ, MEU NOME É</h2>
                <h1 data-aos="fade-up">RYAN LUCA</h1>
                <h2>E SOU DESENVOLVEDOR FRONT-END</h2>
                <div className={Style.btn_conteiner}>
                <Btn text='GitHub' href='https://github.com/ryan1235' icon={<FaGithubSquare/>} target='_blank'></Btn>
                <Btn text='linkedin' href='https://www.linkedin.com/in/ryan-luca-839194230/' icon={<FaLinkedin/>} target='_blank'></Btn>
                </div>
            </div>
            <Image src='/Banner.png' width="350" height="350"></Image>
        </section>
    )

}