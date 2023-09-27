import LineGradient from '../Components/LineGradient';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { BiLogoJavascript, BiLogoCss3, BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoRedux } from 'react-icons/bi';

const MySkills = () => {
  return (
    <section id='skills' className='pt-10 pb-24'>
      <div className='md:flex md:justify-between md:gap-16'>
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: false, amount: 0.5 }} transition={{ delay: 0.4, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} className='flex flex-col justify-center items-center w-full'>
          <p className='font-playfair font-semibold text-4xl mb-5'>
            MY <span className='text-red'>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <div className='flex justify-center md:justify-between w-full mt-10 flex-wrap'>
            <BiLogoJavascript size={60} className=' hover:text-red transition duration-500 hover:animate-bounce' />
            <BiLogoCss3 size={60} className=' hover:text-red transition duration-500 hover:animate-bounce' />
            <BiLogoHtml5 size={60} className='hover:text-red transition duration-500 hover:animate-bounce' />
            <BiLogoReact size={60} className='hover:text-red transition duration-500 hover:animate-spin' />
            <BiLogoTailwindCss size={60} className=' hover:text-red transition duration-500 hover:animate-bounce' />
            <BiLogoRedux size={60} className=' hover:text-red transition duration-500 hover:animate-spin' />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
