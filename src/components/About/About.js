import { Icon } from "react-3d-icons";
import {
    html5,
  css3,
  tailwindcss,
  javascript,
  react,
  nodedotjs,
  express,
  php,
  nextdotjs,
  python,
  cplusplus,
  mysql,
  mongodb,
  firebase,
  git,
  github,
} from "react-3d-icons";
const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center m-4 gap-4 text-white "
    >
      <div className="flex justify-center items-center gap-8 m-8">
        <p className="text-right font-bold text-4xl md:text-6xl">
          About
          <br />
          Me
        </p>
        <p className="w-[60%] md:w-[40%] text-base md:text-2xl">
          <strong>Hello! I'm Chaitanya Bhargava. </strong>I am a Web Developer
          proficient in Frontend with elementary knowledge of Backend. I enjoy
          making colourful websites and sharing them. I have worked on several
          solo as well as team projects in the past with varied tech stacks.
        </p>
      </div>
      <div className="flex flex-col m-8">
        <p className="font-bold text-4xl text-center">My Super Powers</p>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 m-8">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center">
              Frontend Development
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <Icon
                spin
                depth={5}
                file={html5}
                color={"#E34F26"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={css3}
                color={"#1572B6"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={javascript}
                color={"#F7DF1E"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={react}
                color={"#61DAFB"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={nextdotjs}
                color={"#ffffff"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={tailwindcss}
                color={"#06B6D4"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center">
              Backend Development
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <Icon
                spin
                depth={5}
                file={nodedotjs}
                color={"#339933"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={express}
                color={"#ffffff"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={php}
                color={"#777BB4"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={mysql}
                color={"#4479A1"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={mongodb}
                color={"#47A248"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 m-8">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center">
              Tools and Frameworks
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <Icon
                spin
                depth={5}
                file={firebase}
                color={"#FFCA28"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={git}
                color={"#F05032"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={github}
                color={"#ffffff"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center">Programming</p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <Icon
                spin
                depth={5}
                file={cplusplus}
                color={"#00599C"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
              <Icon
                spin
                depth={5}
                file={python}
                color={"#3776AB"}
                scale={10}
                style={{ height: "80px", width: "80px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
