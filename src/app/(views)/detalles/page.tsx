import SecondNavBar from "@/components/navBars/secondNavBar/secondNavBar";
import ToggleButton from "@/components/seeMoreButton/toggleButton";
import styles from "./page.module.css";

export default function page(){
    return(
       <main className={styles.bodyprueba}>
        <SecondNavBar></SecondNavBar>
        <ToggleButton></ToggleButton>
       </main>
    );
}