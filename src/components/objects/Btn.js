
import Style from './Btn.module.css'

export default function Btn({ text, href, icon}) {

    return (<a className={Style.a} target='_blank' rel="noopener noreferrer" href={href}>{icon} {text}</a>)

}