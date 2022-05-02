import Card from '../../objects/Card'
import Style from './Projects.module.css'


export default function Projects() {
    return(
        <main data-aos="fade-up" className={Style.projects_conteiner}>
            <h1>Meus Projetos</h1>
            <div className={Style.cards}>
                <Card
                title='estudando javaSkipt'
                alt = 'uma previl do site estudando javascript'
                src = '/estudandojava.png'
                hrefdemo = 'https://ryan1235.github.io/estudandojavaS/'
                hrefgit= 'https://github.com/ryan1235/estudandojavaS'
                resumo= 'Um site aonde eu postava todo o meu progreso aprendendo javaScript'
                />

                <Card
                title='Meu primeiro Portfólio '
                alt = 'uma previl do site estudando Meu primeiro Portfólio'
                src = '/PrimeiroPortifolio.png'
                hrefdemo = 'https://ryan1235.github.io/MeuPortifolio/'
                hrefgit= 'https://github.com/ryan1235/MeuPortifolio'
                resumo='Meu primeiro portifolio versão anterios a esta'
                />

                <Card
                title='Primeiro passo em NextJs '
                alt = 'uma previl do site estudando NextJs'
                src = '/ComeçandoReact.png'
                hrefdemo = 'https://estudando-react-three.vercel.app/'
                hrefgit= 'https://github.com/ryan1235/EstudandoReact'
                resumo='Esse foi meu primeiro passo com next em um emersivão dev alura'
                />

                <Card
                title='Ryan Tube '
                alt = 'uma previl do site Ryan Tube'
                src = '/ryantube.png'
                hrefdemo = 'https://github.com/ryan1235/ryanyoutube'
                hrefgit= 'https://ryan1235.github.io/ryanyoutube/'
                resumo='Esse foi meu primeiro site realmente "serio" em html, css e javascript'
                />

                
                <Card
                title='Minecraft Loja'
                alt = 'uma previl do site minecraft loja'
                src = '/minecraftloja.png'
                hrefdemo = 'https://github.com/ryan1235/ryanyoutube'
                hrefgit= 'https://ryan1235.github.io/ryanyoutube/'
                resumo='Esse foi o meu primeiro contato com apis e tambem com uma tentativar de fazer uma loja virtual'
                />
            </div>
        </main>
    )

}