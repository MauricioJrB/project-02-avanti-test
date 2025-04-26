import { FaSpinner } from "react-icons/fa"

import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <>
      <FaSpinner className={styles.loader}/>
    </>
  )
}

export default Loading
