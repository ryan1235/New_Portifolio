import Style from './Main.module.css'
import Hub from '../../secondary/Hub'
import Experiencias from '../../secondary/Experiencias'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Main() {
    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])
    return(
        <main className={Style.conteiner}>
            <Hub/>
            <Experiencias/>
        </main>
    )

}