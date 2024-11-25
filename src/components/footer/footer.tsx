import { motion } from "framer-motion";
import Container from "@/components/container";
import Icon from "@/components/icon";
import { GitHub } from "@/assets/icons";

const parentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const transition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "all" as const,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-blue py-12">
      <Container>
        <motion.div
          variants={parentVariants}
          transition={transition}
          viewport={viewport}
          initial="initial"
          whileInView="animate"
          className="flex w-full flex-col items-center justify-center gap-4 lg:items-start"
        >
          <motion.div
            variants={childVariants}
            transition={transition}
            className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-end lg:justify-between lg:px-2"
          >
            <div className="flex flex-col items-center gap-1.5 lg:items-start">
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Background image by{" "}
                <a
                  href="https://visibleearth.nasa.gov/images/8108/twin-blue-marbles/77124l"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  Reto Stöckli
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Day texture for 3D Earth from{" "}
                <a
                  href="https://www.solarsystemscope.com/textures/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  Solar System Scope
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Data overlayed on 3D Earth from{" "}
                <a
                  href="https://earth.gov/ghgcenter/data-catalog"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  U.S. Greenhouse Gas Center Data Catalog
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                GHG emissions plots from{" "}
                <a
                  href="https://www.climatewatchdata.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  Climate Watch
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Developed with{" "}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  React.js
                </a>
                .
              </p>
            </div>
            <Icon link="https://github.com/Edwardrom25/Carbon-Zero">
              <GitHub className="size-8 rounded-sm fill-white" />
            </Icon>
          </motion.div>
          <hr className="h-px w-full border-none !bg-muted" />
          <motion.p
            variants={childVariants}
            transition={transition}
            className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:px-2 lg:text-start"
          >
            &copy; {currentYear} Edward Romero & Madison Pionto
          </motion.p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
