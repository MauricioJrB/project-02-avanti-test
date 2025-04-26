import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { UserProps } from '../types/user';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import User from '../components/User/User';

import github from '../assets/github-image.png';
import styles from './Home.module.css';
import Error from '../components/Error/Error';

const Home = () => {

  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (username: string) => {
    setIsLoading(true);
    setError(false);
    setUser(null)
    
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    setIsLoading(false);

    if (response.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, bio, name } = data;

    const userData: UserProps = {
      avatar_url,
      bio,
      name,      
    }
    setUser(userData);
  }

  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <FaGithub size={58} color='#FFFFFF'/>
      <h1>Perfil GitHub</h1>
      <img src={github} alt="Github logo" />
    </div>

    <div className={styles.content}>
      <Search loadUser={loadUser}/>
      
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {error && <Error />}
          {user && <User {...user}/>}
        </>
      )}
    </div>
  </div>
  )
}

export default Home
