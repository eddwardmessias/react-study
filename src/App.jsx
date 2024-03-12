import { Header } from './components/Header';
import { Post } from './components/Post';
import { Siderbar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {  
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Siderbar/>
        <main>
          <Post
            author="Eddward Messias"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur illum quidem magni exercitationem reiciendis rerum totam at ullam rem. Debitis, maxime molestiae tempora ex perferendis et distinctio! Aut, sint." 
          />          
          <Post
            author="Daniel Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur illum quidem magni exercitationem reiciendis rerum totam at ullam rem. Debitis, maxime molestiae tempora ex perferendis et distinctio! Aut, sint." 
          />
        </main>
      </div>
    </div>
  );
}

export default App
