import { UserProps } from "../../types/user";
import styles from './User.module.css';

const User = ({
  avatar_url,
  bio,
  name,
}: UserProps) => {

  return (
    <div className={styles.container}>
      <img className={styles.avatar} width={220} height={220} src={avatar_url} alt={""} />
      <div className={styles.infos}>
        <h2>{name}</h2>
        <p>{bio ?? "Este usuário ainda não adicionou uma bio."}</p>
      </div>
    </div>
  )
}

export default User
