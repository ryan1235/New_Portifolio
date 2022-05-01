import Footer from '../components/paramount/footer/Footer'
import Navbar from '../components/paramount/navbar/Navbar'
import NewHeader from '../components/paramount/newheade/NewHeade'
import Main from '../components/paramount/main/Main'
import styles from '../styles/Global.module.css'

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <NewHeader></NewHeader>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
