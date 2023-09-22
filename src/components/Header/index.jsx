import React, { useState, useEffect } from "react";
import { ContainerHeader } from "./styles";
import LogoNexaPng from "../../assets/img/logo2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMenuHotdogOpen, setIsMenuHotdogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ulVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const toggleMenuHotDog = () => {
    setIsMenuHotdogOpen(!isMenuHotdogOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContainerHeader className={scrolled ? "scrolled" : ""}>
      <div className="logo-header">
        <a href="/">
          <img src={LogoNexaPng} alt="LogoNexa" />
        </a>
      </div>

      <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/quemsomos">Quem Somos</Link>
    </li>
    <li>
      <Link to="/cases">Cases</Link>
    </li>
    <li>
      <Link to="/servicos">Serviços</Link>
    </li>
    <li>
      <Link to="/contato">Contato</Link>
    </li>
    <li>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=%2B5531994752630&text&type=phone_number&app_absent=0"
      >
        Converse com a Nexa
      </a>
    </li>
  </ul>
</nav>


      <div className="menu-dog">
        <AnimatePresence>
          {isMenuHotdogOpen ? (
            <FaTimes
              className="icon-dog"
              size={"40px"}
              onClick={toggleMenuHotDog}
            />
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 180, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <FaBars
                className="icon-dog"
                size={"40px"}
                onClick={toggleMenuHotDog}
              />
            </motion.div>
          )}

          {isMenuHotdogOpen && (
            <motion.ul
              className="dropdown"
              variants={ulVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/quemsomos">Quem Somos</Link>
              </li>
              <li>
              <Link to="/cases">Cases</Link>
              </li>
              <li>
              <Link to="/servicos">Serviços</Link>

              </li>
              <li>
              <Link to="/contato">Contato</Link>
              </li>
              <li>
              <Link to="https://api.whatsapp.com/send/?phone=%2B5531994752630&text&type=phone_number&app_absent=0">
                Converse com a Nexa</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </ContainerHeader>
  );
};

export default Header;
