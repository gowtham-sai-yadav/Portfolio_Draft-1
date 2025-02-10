import ProgressBar from "../../Components/ProgressBar";
import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import './SkillsPage.css'
import Footer from "../../Components/Footer";

function SkillsPage () {

    const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000)

    return () => clearInterval(interval);
  })

    return (
        <>
        <Header/>
        <div className="skills">
            <div className="imgParent">
                <img src="https://ajitverma15.github.io/Interactive-Portfolio/Image/Skills.svg" alt="skillsImg"/>
            </div>
            <div className="progressBarParent">
                <h2>Proficiency</h2>
                <ProgressBar 
                    percentage= {85}
                    skill_text={"React"}
                    />
                <ProgressBar
                    percentage={80}
                    skill_text={"Next.Js"}
                    />
                <ProgressBar
                    percentage={80}
                    skill_text={"Node"}/>
                <ProgressBar
                    percentage={90}
                    skill_text={"Java"}/>
                <ProgressBar
                    percentage={70}
                    skill_text={"Python"}/>
                <ProgressBar
                    percentage={65}
                    skill_text={"Flutter"}/>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default SkillsPage;