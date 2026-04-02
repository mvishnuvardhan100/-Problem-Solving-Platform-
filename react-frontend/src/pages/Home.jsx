import styles from "./Home.module.css";
import { HomeTopBar } from "../components/HomeTopBar";
import { HomeDescription } from "../components/HomeDescription";
import { Loading } from "../components/Loading";

export const Home = () => {
  return (
    <div className={styles.containerOfEverthing}>
      <HomeTopBar />
      <HomeDescription />
    </div>
  )
}