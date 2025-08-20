import SecondNavBar from "@/components/navBars/secondNavBar/secondNavBar";
import ToggleButton from "@/components/seeMoreButton/toggleButton";
import styles from "./page.module.css";
import Carousel from "@/components/carrousel/carousel";

export default function page(){
    return(
       <main>
        <SecondNavBar></SecondNavBar>
        <Carousel></Carousel>
        <ToggleButton></ToggleButton>
       </main>
    );
}