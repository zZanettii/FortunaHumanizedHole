import Image from "next/image"
import Styles from '@/app/littleHoles/littleHoles.module.scss'

export default function LittleHoles(){
    return(
        <div className={Styles.container}>
            <h1>Deixo aqui um pouquinho do meu trabalho</h1>
            <div className={Styles.img}>
            <Image 
            src={'/orelha1.jpeg'}
            alt="orelha1"
            width={250}
            height={300}
            >
            </Image>
            </div>

            <div className={Styles.img}>
            <Image
            src={'/orelha2.jpeg'}
            alt="orelha2"
            width={250}
            height={300}
            >
            </Image>
            </div>
        </div>
    )
}