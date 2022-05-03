import Style from './styles/Hub.module.css'
import Image from 'next/image'
import Btn from '../objects/Btn'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Hub() {
    return(         
        <section className={Style.hub_coteiner}>
            <div className={Style.text}>
                <p>OLÁ, MEU NOME É</p>
                <h1 data-aos="fade-up">RYAN LUCA</h1>
                <p>E SOU DESENVOLVEDOR FRONT-END</p>
                <div className={Style.btn_conteiner}>
                <Btn text='GitHub' href='https://github.com/ryan1235' icon={<FaGithubSquare/>}></Btn>
                <Btn text='linkedin' href='https://www.linkedin.com/in/ryan-luca-839194230/' icon={<FaLinkedin/>}></Btn>
                </div>
            </div>
            <div className={Style.img}>
                <Image id='img' alt='imagen do baner do site' src='/Banner.png' width="350" height="350"></Image>
            </div>
            
        </section>
    )

}