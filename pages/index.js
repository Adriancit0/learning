import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>    
      <h1> Aprendiendo Next.js desde cero</h1>
      <a>
        <Link href="/about">Ir a about</Link>
      </a>

      <button onClick={() => router.push("/article/2")}>
        Navegar de forma programáatica a un artículo
      </button>
    </div>
  );
}
