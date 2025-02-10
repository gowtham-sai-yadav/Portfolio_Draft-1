import Header from "../../Components/Header"
import Tile from "../../Components/Tile"
import { mdiLinkedin } from "@mdi/js";
import { mdiGithub } from '@mdi/js';
import { mdiGoogle } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import dp from './profile.jpg';
import './ContactPage.css'
import Footer from "../../Components/Footer";
function ContactPage () {
    return (
        <>
        <Header/>

        <Tile
            image={"circle"}
            img={dp}
            header={"Reach out to me!"}
            text1={"I am available on almost every social media platform.You want to discuss a project or just want to say hi? My Inbox is always open for you."}
            icon8={mdiGithub}
            icon9={mdiInstagram}
            icon10={mdiLinkedin}
            icon11={mdiGoogle}
            btnText={"See my Resume"}
        />


        <div className="connect">
            <h2>Let's connect and build something together!</h2>
        </div>

        <div className="img">
            <img src="https://ajitverma15.github.io/Interactive-Portfolio/Image/connection.svg"/>
        </div>

        <Footer/>
    </>
    )
   
}

export default ContactPage;