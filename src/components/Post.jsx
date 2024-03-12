import styles from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(){
    return(

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="http://github.com/eddwardmessias.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Eddward Messias</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title='11 de maio às 8:13' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>


            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>

                <p>Acabei de subir mais um projeto no meu portifolio</p>
                <p>Se liga ai <a href="#">ed.desing/eddwardmessias</a></p>
                <p>
                    <a href="#">#Developer</a>{' '}
                    <a href="#">#Linkedin</a>{' '}
                    <a href="#">#Github</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />
                
                <footer>                    
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>

    );
}