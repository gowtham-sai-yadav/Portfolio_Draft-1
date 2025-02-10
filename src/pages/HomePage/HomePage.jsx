import Tile from "../../Components/Tile";
import Header from "../../Components/Header";
import { mdiLaptop } from '@mdi/js';
import { mdiFileCode } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiBootstrap } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';
import Footer from "../../Components/Footer";


function HomePage() {
    return (
        <>

        <Header/>

        <Tile
      position={"right"}
      img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/20200630_162659.gif"}
      header={"Hello All! I'm Gowtham.. 👋"}
      text2={"A passionate and driven engineer, constantly pushing limits to build impactful solutions. With expertise in full-stack development, fintech, and AI, I turn ideas into reality."}
      image={"gif"}
      />


      <Tile
        img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Data_Analysis.svg"}
        header={"Competetive Programming"}
        icon1={mdiLaptop}
        icon2={mdiFileCode}
        text1={"By actively participating in various contests, I'm steadily improving my skills and making consistent progress every day"}
        text2={"Each challenge I face enhances my abilities and brings me closer to achieving my goals, one step at a time."}
      />


      <Tile 
        position={"right"}
        img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/website.svg"}
        header={"Web Development"}
        icon1={mdiLanguageHtml5}
        icon2={mdiLanguageCss3}
        icon4={mdiLanguageJavascript}
        icon5={mdiReact}
        icon6={mdiNodejs}
        text1={"Building fully responsive and dynamic web frontends using HTML, CSS, JavaScript, and React."}  
        text2={"Currently focused on frontend development, with a strong eagerness to master backend technologies like Node.js, Django, and Flask."}  
        text3={"Experienced with Unity, Unreal Engine, Photoshop, and DaVinci Resolve for creative and game development projects."}
        
        />

    <Tile
      img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Coding.svg"}
      header={"Data Structures and Algorithms"}
      icon1={mdiLaptop}
      icon2={mdiFileCode}
      text1={" I have knowledge of Data Structures like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently."}
      text2={" As I know Data Structures and Algorithms are the heart of programming, so I love to solve programming questions in different competitive websites like Codeforces, Codechef, Hackerrank and many more."}
      />

      <Footer/>
      </>
    )

}
export default HomePage;