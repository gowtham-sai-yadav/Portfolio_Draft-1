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
      text2={"A passionate and hustling engineering student wanting to acheive greater heights, never hesitate from pushing my limits and achieve the results which i need"}
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
        text1={" Building Fully responsive website frontend using HTML, CSS, Javascript and React."}
        text2={" As of now I have knowledge only of frontend but in near future I will learn more skills and excited to explore NodeJS, Django, Flask and many more."}
        text3={" I have also used Unity,Unreal-Engine,photoshop,Davinci Resolve"}
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