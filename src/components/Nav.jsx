import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

import { motion } from "framer-motion"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <img
              src={headerLogo}
              alt="Logo"
              width={130}
              height="29"
            />
          </motion.div>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <motion.div 
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              key={item.label}
            >
              <li>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:font-semibold transition-all">
                  {item.label}
                </a>
              </li>
            </motion.div>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img 
            src={hamburger} 
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav