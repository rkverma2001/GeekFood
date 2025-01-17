import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);

const Footer = () => {
  return (
    <footer className="bg-graywhite text-black p-8  flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-3">
        <div className="flex items-center mb-4">
          <img
            src="logoipsum-213.svg"
            alt="Footer Logo"
            className="h-12 w-[170px] mr-2"
          />
        </div>

        <div className="mb-4 text-black-100">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt{" "}
            <br />
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>

        <div className="flex items-center mb-4 font-bold tracking-wide">
          <a
            href="#"
            className="text-black px-3 transition duration-200 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#"
            className="text-black px-3 transition duration-200 hover:text-blue-500"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-black px-3 transition duration-200 hover:text-blue-500"
          >
            History
          </a>
          <a
            href="#"
            className="text-black px-3 transition duration-200 hover:text-blue-500"
          >
            Services
          </a>
          <a
            href="#"
            className="text-black px-3 transition duration-200 hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-black px-3 transition duration-200 hover:text-blue-500"
          >
            Blog
          </a>
        </div>

        <div className="flex items-center">
          <a href="#" className="text-black mx-2">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
          <a href="#" className="text-black mx-2">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a href="#" className="text-black mx-2">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a href="#" className="text-black mx-2">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} />
          </a>
          <a href="#" className="text-black mx-2">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="#" className="text-black mx-2">
            <FontAwesomeIcon icon={["fab", "xbox"]} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
