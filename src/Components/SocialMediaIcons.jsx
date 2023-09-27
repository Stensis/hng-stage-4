import { BsLinkedin, BsGit } from "react-icons/bs";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="http://linkedin.com/in/irene-njuguna98"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={35} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Stensis"
        target="_blank"
        rel="noreferrer"
      >
        <BsGit size={35} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
