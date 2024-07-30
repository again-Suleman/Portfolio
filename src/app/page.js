import styles from "./page.module.css";

// Components
import Header from "@/components/Header/page";
import Project from "@/components/Projects";

export default function Home() {

  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <Project />
    </main>
  );
}
