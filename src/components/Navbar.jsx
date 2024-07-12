import Image from "next/image";
import Link from "next/link";
import Styles from "@/components/navbar.module.scss";

export default function Navbar() {
  return (
    <main className={Styles.Navbar}>
      <div className={Styles.logo}>
        <Link href="/" className={Styles.link}>
          <Image
            className={Styles.logoImage}
            src={"/logoMarcelle.jpeg"}
            alt="Logo"
            width={1960}
            height={1080}
          ></Image>
        </Link>
      </div>

      <div className={Styles.menu}>
        <Link href="about" className={Styles.logoLink}>
          Sobre
        </Link>
        <Link href="littleHoles" className={Styles.logoLink}>
          Furinhos
        </Link>
        <Link href="contact" className={Styles.logoLink}>
          Contato
        </Link>
      </div>
    </main>
  );
}
