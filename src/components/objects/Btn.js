
import Style from './Btn.module.css'

export default function Btn({ text, href, icon}) {

    return (<a className={Style.a} rel="noreferrer" href={href}>{icon} {text}</a>)

}