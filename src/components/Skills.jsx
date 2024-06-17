import React from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiJsBadge, DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiMui, SiStorybook } from "react-icons/si";

let arr = [{
  icon: <FaHtml5 className="commonIcons" />,
  heading: "HTML"
},
{
  icon: <FaCss3Alt className="commonIcons" />,
  heading: "CSS"
},
{
  icon: <DiJsBadge className="commonIcons" />,
  heading: "JavaScript"
},
{
  icon: <DiMongodb className="commonIcons" />,
  heading: "MongoDB"
},
{
  icon: <DiNodejsSmall className="commonIcons" />,
  heading: "Node Js"
},
{
  icon: <DiReact className="commonIcons" />,
  heading: "React Js"
},
{
  icon: <SiMui className="commonIcons" />,
  heading: "Material UI"
},
{
  icon: <SiStorybook className="commonIcons" />,
  heading: "Storybook"
}
]

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills__header">
          <div className="common">
            <h1 className="mainHeader">Tech Stack</h1>
          </div>

          <div className="row bgMain">
            {arr.map((item) => (
              <div className="col-skill bgMain">
                <div className="skills__box">
                  {item.icon}
                  <div className="skills__box-header">{item.heading}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
