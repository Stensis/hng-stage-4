import { useMediaQuery } from "react-responsive";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "../assets/me.jpeg";
import { motion } from "framer-motion";
import SocialMediaIcons from "../Components/SocialMediaIcons";

const LandingPage = ({ setSelectedPage }) => {
  const isAboveMdScreen = useMediaQuery({ query: "(min-width:1060px )" });
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center  py-10  mx-auto w-5/6 gap-6"
    >
      {/* Image Section */}
      <div className="md:order-2 flex justify-center z-10 mt-6">
        {isAboveMdScreen ? (
          <div className=" relative z-0 ml-20 before:absolute before:-top-14 before:-left-14 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1] ">
            <img
              src={Image}
              alt="image"
              className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] rounded-t-[400px] md:max-w-[400px]"
            />
          </div>
        ) : (
          <div>
            <img
              src={Image}
              alt="image"
              className=" hover:filter hover:saturate-0 transition duration-500 z-10 w-full max-w-[300px] rounded-t-[400px] md:max-w-[400px]"
            />
          </div>
        )}
      </div>

      {/* Main section */}
      <div className="z-30 basis-3/5 mt-12">
        {/* Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-2xl md:mb-4 font-opensans text-center md:text-start">
            Hi! I am
          </p>
          <p className="text-6xl font-playfair z-20 text-center md:text-start ">
            <span className="z-20">Irene</span> {""}
            <span
              className={`lg:relative lg:text-deep-white lg:font-semibold z-10 lg:before:content-brush before:absolute before:right-[-100px] before:bottom-[-100px] before:z-[-80] before:-top-26`}
            >
              Wangari
            </span>
          </p>

          <p className=" mt-12 mb-7 text-base text-justify">
            I am a dedicated software engineer with a demonstrated ability to
            efficiently manage time and collaborate effectively with teams. With
            a strong eagerness for continuous learning, I am prepared to
            leverage my skills in diverse roles to contribute to and grow within
            the organization.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex mt-5 justify-center md:justify-start"
        >
          <AnchorLink
            className=" bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue  hover:text-white transition duration-500"
            onClick={() => {
              setSelectedPage("contact");
            }}
            href="#contact"
          >
            {" "}
            Contact Me!
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 "
            onClick={() => {
              setSelectedPage("contact");
            }}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 flex items-center justify-center font-playfair px-10 h-full">
              Lets Talk!
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex mt-5 justify-center md:justify-start"
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;
