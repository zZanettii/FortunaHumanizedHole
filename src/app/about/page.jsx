import Image from "next/image";
import Styles from "@/app/about/about.module.scss";
import Navbar from "@/components/Navbar";
import { main } from "json";

export default function About() {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1>
          Olá, sou a Marcelle Fortuna, enfermeira, e aqui conto um pouquinho
          sobre mim !!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          dignissimos, deserunt vero libero, voluptate provident sunt modi
          itaque odit ducimus cumque eius nesciunt eligendi soluta ullam
          possimus illo explicabo consectetur aliquid animi at? Nostrum ipsum
          molestias minus! Suscipit dolore ab, expedita adipisci debitis ratione
          in dolorem. Impedit laudantium, totam consequuntur optio reprehenderit
          facere dicta cumque repellat enim corporis necessitatibus quaerat!
        </p>
      </div>
      <div className={Styles.imageContainer}>
        <Image
          className={Styles.personalImage}
          src={'/personalImage.jpeg'}
          alt="ImagemPessoal"
          width={1960}
          height={1080}
        ></Image>
      </div>
    </div>
  );
}
