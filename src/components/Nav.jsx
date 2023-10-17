import { headerLogo } from '../assets/images';
import { hamburger, xIcon } from '../assets/icons';
import { navLinks } from '../constants';

import { motion } from "framer-motion"
import { useState } from 'react';

const Nav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
        {!isCollapsed && (
          <motion.ul
            initial={{
              opacity: 0,
              right: 0,
            }}
            animate={{
              opacity: 1,
              right: 60,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex-1 flex justify-center items-center gap-16 max-lg:absolute max-lg:flex max-lg:flex-col max-lg:top-16 max-lg:bg-white max-lg:shadow-3xl max-lg:right-16 max-lg:min-w-[180px] max-lg:px-2 max-lg:py-6 max-lg:rounded-md max-lg:gap-8"
          >
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
          </motion.ul>
        )}
        <div className="hidden max-lg:block cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? (
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
                duration: 0.5,
              }}
            >
              <img 
                src={hamburger} 
                alt="Hamburger"
                width={25}
                height={25}
              />
            </motion.div>
          ) : (
            <img 
              src={xIcon} 
              alt="x icon"
              width={25}
              height={25}
            />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav