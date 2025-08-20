import styles from "./secondNavBar.module.css";
import Image from "next/image";

export default function secondNavBar(){
    return(
        <nav className={styles.navBarProperties}>
            <div>
                <Image src={"/logos/logoComplejoNavBar.png"} alt={"Logo complejo"} width={400} height={80}/>
            </div>
            <div className={styles.navSectionsProperties}>
                <a href={"/"}>Nuestro complejo</a>
                <a href={"/cabanias"}>Cabañas</a>
                <a href={"/form"}>Reservas</a>
            </div>
        </nav>
    );
}