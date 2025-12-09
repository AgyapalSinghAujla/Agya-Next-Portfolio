import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="ag-footer-container">
        <div className="ag-footer-left">
          <h1>
            From design to <span>deployment</span> —
            <br />I make your vision web-ready.
          </h1>
          <p>
            "Let’s bring your ideas to life with sleek, custom-crafted web
            experiences that truly reflect your vision."
          </p>
          <div className="ag-footer-social-link">
            <a
              href="https://www.linkedin.com/in/agyapal-singh-020983241/"
              target="_blank"
              aria-label="LinkedIn Profile - Agyapal Singh"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AgyapalSingh"
              target="_blank"
              aria-label="GitHub Profile - Agyapal Singh"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/agya_aujla/"
              target="_blank"
              aria-label="Instagram Profile - Agyapal Singh"
            >
              <AiFillInstagram />
            </a>

            <a
              href="https://wa.me/919877500750?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services"
              target="_blank"
              aria-label="Whatsapp - Agyapal Singh"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>

        <div className="ag-footer-right">
          <div className="ag-footer-addres-info">
            <div>
              <a
                href="https://www.google.com/maps?q=Mohali,+Punjab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLocationDot />
                <span>
                  Mohali, Punjab <MdArrowOutward />
                </span>
              </a>
            </div>

            <div>
              <a href="mailto:agyapalsinghaujla@gmail.com">
                <MdEmail />
                <span>
                  Ping Me <MdArrowOutward />
                </span>
              </a>
            </div>

            <div>
              <a href="tel:+919877500750">
                <MdPhone />
                <span>
                  Let's Talk <MdArrowOutward />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
