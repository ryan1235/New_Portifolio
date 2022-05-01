import Style from './ExperiencesLeaft.module.css'


export default function ExperiencesKeaft({ icon, title, text }) {

    return (
        <div className={Style.Conteiner_experiences} data-aos="fade-left">
            <p>{text}</p>
            <div className={Style.head_experiences}>
                {icon}
                <h3>{title}</h3>
            </div>
        </div>
    )

}