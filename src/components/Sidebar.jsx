import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Siderbar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            
            <div className={styles.profile}>                
                <Avatar src="http://github.com/eddwardmessias.png"/>
                <strong>Eddward Messias</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}