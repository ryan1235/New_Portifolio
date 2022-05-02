import Style from './Card.module.css'
import Image from 'next/image'
import Btn from './Btn'
import { MdConnectedTv } from "react-icons/md";
import { GoOctoface } from "react-icons/go";

export default function Card({ title, alt, src, hrefdemo, hrefgit, resumo}) {

    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" className={Style.card_conteiner}>
            <h2>{title}</h2>
            <Image alt={alt} src={src} width="300" height="300"></Image>
            <p>{resumo}</p>
            <div>
            <Btn text='Demo' icon={<MdConnectedTv/>} href={hrefdemo}></Btn>
            <Btn text='GitHub' icon={<GoOctoface/>} href={hrefgit}></Btn>
            </div>
        </div>
    )

}