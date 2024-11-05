import ProjectForm from '../project/ProjectForm';
import styles from'./NewProject.module.css'

function newProject(){
    return (
        
        <div className={styles.newproject_container}>
        <h1 >Criar Projeto</h1>
        <p>Crie seu projeto para selecionar serviço</p>
        <ProjectForm  btnText="Criar Projeto "/>

        </div>
    )
}

export default newProject