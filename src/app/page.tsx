import styles from "./page.module.css";
import MainNavBar from "@/components/navBars/mainNavBar/mainNavBar";
import Welcome from "@/components/welcome/welcome";
import Footer from "@/components/footer/footer"
import LeftImageCard from "@/components/bigCards/leftImageCard/leftImageCard";
import RightImageCard from "@/components/bigCards/rightImageCard/rightImageCard";
import Form from "./(views)/form/page";
import Gallery from "@/components/gallery/gallery";
import ReviewsSection from "@/components/reviews/reviewsSection";
import GoogleMaps from "@/components/googleMaps/googleMaps";
import GroupFeatureCards from "@/components/featureCard/groupFeatureCards";

export default function Home() {
  return (
      <div className={styles.page}>
          <section id={'nav'}>
              <MainNavBar/>
          </section>
          <section id={'nuestro-complejo'}>
              <Welcome/>

              <GroupFeatureCards/>
          </section>
          <div className={styles.gallery}>
              <Gallery></Gallery>
          </div>

          <div className={styles.deptos} id={'cabanas'}>
              <LeftImageCard
                  image={'/dptos/lavanda/outhouse.jpeg'}
                  name={'Aqua'}
                  cantGuests={6}
                  description={'Cabaña moderna y luminosa con 2 habitaciones, una de ellas en suite.' +
                      ' Living con sofá cama, TV de pantalla plana, aire acondicionado y cocina ' +
                      'totalmente equipada con microondas, tostadora, pava eléctrica y demás.' +
                      ' Contiene además parrilla exterior.'
                  }
                  forbidden={'No se permite fumar dentro de los departamentos. ' +
                      'Se solicita respeto por el descanso de los vecinos y cuidado del mobiliario.'}
                  bath={2}
                  dorm={2}
              />
              <RightImageCard
                  image={'/dptos/lavanda/outplants2.jpeg'}
                  name={'Lavanda'}
                  cantGuests={4}
                  description={'Cabaña moderna y luminosa.' +
                      ' Living con sofá cama, TV de pantalla plana, aire acondicionado y cocina ' +
                      'totalmente equipada con microondas, tostadora, pava eléctrica y demás.' +
                      ' Contiene además parrilla exterior.'}
                  forbidden={'No se permite fumar dentro de los departamentos. ' +
                      'Se solicita respeto por el descanso de los vecinos y cuidado del mobiliario.'}
                  bath={1}
                  dorm={1}
              />
          </div>

          <div id={'reservas'}>
              <Form/>
          </div>

          <div className={styles.gallery}>
              <ReviewsSection></ReviewsSection>
          </div>

          <GoogleMaps/>

          <Footer/>
      </div>
  );
}
