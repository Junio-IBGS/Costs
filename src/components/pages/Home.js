import styles from'./Home.module.css'

import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora</p>
            <LinkButton to='/newproject'text='Criar projeto'/>

            <img src={savings} alt='costs'/>

        </section>
    )
}

export default Home