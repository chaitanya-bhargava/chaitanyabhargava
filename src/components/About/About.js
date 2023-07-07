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
              <img src="html5-color.svg" alt="html5" className="w-[60px] h-[60px] m-4"/>
              <img src="css3-color.svg" alt="css3" className="w-[60px] h-[60px] m-4"/>
              <img src="javascript-color.svg" alt="javascript" className="w-[60px] h-[60px] m-4"/>
              <img src="react-color.svg" alt="react" className="w-[60px] h-[60px] m-4"/>
              <img src="nextdotjs-color.svg" alt="nextdotjs" className="w-[60px] h-[60px] m-4"/>
              <img src="tailwindcss-color.svg" alt="tailwindcss" className="w-[60px] h-[60px] m-4"/>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center">
              Backend Development
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <img src="nodedotjs-color.svg" alt="nodedotjs" className="w-[60px] h-[60px] m-4"/>
              <img src="express-color.svg" alt="express" className="w-[60px] h-[60px] m-4"/>
              <img src="php-color.svg" alt="php" className="w-[60px] h-[60px] m-4"/>
              <img src="mysql-color.svg" alt="mysql" className="w-[60px] h-[60px] m-4"/>
              <img src="mongodb-color.svg" alt="mongodb" className="w-[60px] h-[60px] m-4"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 m-8">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center">
              Tools and Frameworks
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <img src="firebase-color.svg" alt="firebase" className="w-[60px] h-[60px] m-4"/>
              <img src="git-color.svg" alt="git" className="w-[60px] h-[60px] m-4"/>
              <img src="github-color.svg" alt="github" className="w-[60px] h-[60px] m-4"/>
              <img src="redux-color.svg" alt="redux" className="w-[60px] h-[60px] m-4"/>
              <img src="reactrouter-color.svg" alt="reactrouter" className="w-[60px] h-[60px] m-4"/>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center">Programming</p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <img src="cplusplus-color.svg" alt="cplusplus" className="w-[60px] h-[60px] m-4"/>
              <img src="python-color.svg" alt="python" className="w-[60px] h-[60px] m-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
