import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCheck,
} from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Contact = () => {
  const form = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const [buttonState, setButtonState] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonState("sending");
    emailjs
      .sendForm(
        "service_usp9rlk",
        "template_zfnfk1u",
        form.current,
        "01x711bfdsoZQAxPF",
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setButtonState("sent");
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        messageInputRef.current.value = "";
        setTimeout(() => setButtonState("idle"), 2500);
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
        setButtonState("idle");
      });
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center m-4 py-16 md:py-24"
    >
      <p className="text-white diff-font font-bold text-2xl md:text-4xl uppercase p-4 m-4">
        Contact
      </p>
      <div className="flex flex-col lg:flex-row w-[90%] lg:w-[85%] max-w-[1200px] gap-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-[40%] text-white flex flex-col justify-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's <span className="text-[#7EC8E3]">Connect</span>
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-8">
            Have a project in mind or just want to chat? Feel free to reach out
            through the form or any of the channels below.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7EC8E3] bg-opacity-10 flex items-center justify-center shrink-0">
                <AiOutlineMail className="text-[#7EC8E3]" size={18} />
              </div>
              <p className="text-sm md:text-base">
                chaitanyabhargava5@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7EC8E3] bg-opacity-10 flex items-center justify-center shrink-0">
                <AiOutlinePhone className="text-[#7EC8E3]" size={18} />
              </div>
              <p className="text-sm md:text-base">+91 9717393877</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7EC8E3] bg-opacity-10 flex items-center justify-center shrink-0">
                <TfiLocationPin className="text-[#7EC8E3]" size={18} />
              </div>
              <p className="text-sm md:text-base">Delhi, India</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/chaitanya-bhargava"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#7EC8E3] bg-opacity-10 flex items-center justify-center hover:bg-opacity-25 transition-all duration-300"
            >
              <AiFillGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanya-bhargava-192b5922a/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#7EC8E3] bg-opacity-10 flex items-center justify-center hover:bg-opacity-25 transition-all duration-300"
            >
              <AiFillLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/_chaitanya.03/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#7EC8E3] bg-opacity-10 flex items-center justify-center hover:bg-opacity-25 transition-all duration-300"
            >
              <AiOutlineInstagram size={20} />
            </a>
            <a
              href="https://x.com/cheenudotdev"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#7EC8E3] bg-opacity-10 flex items-center justify-center hover:bg-opacity-25 transition-all duration-300"
            >
              <RiTwitterXFill size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-[60%] flex flex-col items-center bg-gradient-to-br from-[#0a0a2e]/60 via-[#000300]/80 to-[#0d1117]/60 border border-white border-opacity-10 mx-auto p-6 m-4 rounded-xl w-full"
        >
          <p className="text-white font-normal text-l xs:text-2xl md:text-3xl p-2 m-2 xs:p-4 xs:m-4">
            Send me a message
          </p>
          <div className="relative w-full">
            <AiOutlineUser
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              name="sender_name"
              placeholder="Full Name"
              required
              className="rounded-lg text-white bg-gray-400 bg-opacity-30 p-4 pl-12 my-3 w-full text-xs xs:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7EC8E3] transition-all"
              autoComplete="off"
              ref={nameInputRef}
            />
          </div>
          <div className="relative w-full">
            <AiOutlineMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="email"
              name="sender_email"
              placeholder="Email"
              required
              className="rounded-lg text-white bg-gray-400 bg-opacity-30 p-4 pl-12 my-3 w-full text-xs xs:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7EC8E3] transition-all"
              autoComplete="off"
              ref={emailInputRef}
            />
          </div>
          <div className="relative w-full">
            <BiMessageDetail
              className="absolute left-4 top-7 text-gray-400"
              size={18}
            />
            <textarea
              rows={7}
              name="message"
              placeholder="Message"
              required
              className="rounded-lg text-white bg-gray-400 bg-opacity-30 p-4 pl-12 my-3 w-full h-auto resize-none overflow-hidden text-xs xs:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7EC8E3] transition-all"
              autoComplete="off"
              ref={messageInputRef}
            />
          </div>
          <button
            type="submit"
            disabled={buttonState !== "idle"}
            className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg px-8 py-3 lg:px-10 lg:py-4 m-4 text-xs xs:text-sm md:text-base min-w-[160px] transition-all duration-300 ${
              buttonState === "sent"
                ? "text-green-400 border border-green-400 border-opacity-40 bg-green-400 bg-opacity-10 scale-105"
                : buttonState === "sending"
                  ? "text-[#7EC8E3] border border-[#7EC8E3] border-opacity-40 bg-[#7EC8E3] bg-opacity-10 opacity-80"
                  : "text-[#7EC8E3] border border-[#7EC8E3] border-opacity-40 hover:bg-[#7EC8E3] hover:bg-opacity-10 hover:scale-105"
            }`}
          >
            {buttonState === "idle" && "Send Message"}
            {buttonState === "sending" && (
              <>
                <AiOutlineLoading3Quarters className="animate-spin" size={18} />
                Sending...
              </>
            )}
            {buttonState === "sent" && (
              <>
                <AiOutlineCheck size={18} />
                Sent!
              </>
            )}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
