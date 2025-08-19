import styles from "./page.module.css";
import MainNavBar from "@/components/navBars/mainNavBar/mainNavBar";
import Welcome from "@/components/welcome/welcome";
import Footer from "@/components/footer/footer"
import LeftImageCard from "@/components/bigCards/leftImageCard/leftImageCard";
import RightImageCard from "@/components/bigCards/rightImageCard/rightImageCard";
import Form from "./(views)/form/page";

export default function Home() {
  return (
    <div className={styles.page}>
        <MainNavBar/>
        <Welcome/>

        <div className={styles.deptos}>
            <LeftImageCard
                image={'/testImages/interactiveGallery/prue.png'}
                name={'Aqua'}
                cantGuests={5}
                description={'Departamento luminoso y moderno, ideal para parejas o familias. Cuenta con cocina equipada, baño privado y vista al cerro. Ubicado en zona tranquila, a minutos del centro.'}
                forbidden={'No se permite fumar dentro de los departamentos. No se alquila a grupos de jóvenes solos. No se permiten fiestas ni reuniones. Se solicita respeto por el descanso de los vecinos y cuidado del mobiliario.'}
            />
            <RightImageCard
                image={'/testImages/interactiveGallery/prue.png'}
                name={'Lavanda'}
                cantGuests={5}
                description={'Departamento luminoso y moderno, ideal para parejas o familias. Cuenta con cocina equipada, baño privado y vista al cerro. Ubicado en zona tranquila, a minutos del centro.'}
                forbidden={'No se permite fumar dentro de los departamentos. No se alquila a grupos de jóvenes solos. No se permiten fiestas ni reuniones. Se solicita respeto por el descanso de los vecinos y cuidado del mobiliario.'}
            />
        </div>

        <Form />
        <Footer />
    </div>
  );
}
