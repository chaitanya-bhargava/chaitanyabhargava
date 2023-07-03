import {RiMessage2Fill} from "react-icons/ri";
const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center m-4">
        <p className="text-white font-bold text-2xl md:text-4xl uppercase p-4 m-4">
          Contact
        </p>
      <form className="flex flex-col items-center w-[90%] md:w-[80%] lg:w-[50%] bg-[#000300] bg-opacity-80 border border-white border-opacity-10 mx-auto p-6 m-4 rounded-xl">
        <div className="flex justify-center items-center">
        <p className="text-white font-bold text-l xs:text-2xl md:text-3xl p-1 m-1 xs:p-4 xs:m-4">
          Send me a message
        </p>
        <RiMessage2Fill size={40} color="white" className=" w-[20px] h-[20px] xs:w-[40px] xs:h-[40px]"/>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="rounded-lg text-white bg-gray-400 bg-opacity-30 p-4 m-4 w-full text-xs xs:text-sm md:text-base"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-lg text-white bg-gray-400 bg-opacity-30 p-4 m-4 w-full text-xs xs:text-sm md:text-base"
          autoComplete="off"
        />
        <textarea
          rows={7}
          type="text"
          name="message"
          placeholder="Message"
          required
          className="rounded-lg text-white bg-gray-400 bg-opacity-30 p-4 m-4 w-full h-auto resize-none overflow-hidden text-xs xs:text-sm md:text-base"
          autoComplete="off"
        />
        <button
          type="submit"
          class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tighter text-black font-bold bg-[#A8A29C] rounded-lg group p-3 m-4 text-xs xs:text-sm md:text-base"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#846D62] rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span class="relative">Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
