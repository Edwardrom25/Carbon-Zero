import { motion } from "framer-motion";
import Container from "@/components/container";
import ContentPadding from "@/components/content-padding";
import SectionHeader from "@/components/section-header";
import { LinkArrow } from "@/assets/icons";

const contentVariants = {
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
  delay: 0.4,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="mb-10 bg-blue py-12 md:mb-20 lg:mb-28 xl:mb-32 2xl:mb-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12">
          <SectionHeader titleText="About Carbon Zero" textTheme="light" />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={viewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-white"
              >
                <em>"Look again at that dot. That's here. That's home. That's us."</em> — Carl Sagan, <em>Pale Blue Dot</em>
                <br />
                <br />
                In 1990, NASA’s Voyager 1 captured Earth from 3.7 billion miles away, showing it as a tiny speck in a vast cosmic arena—a <em>Pale Blue Dot</em>. Carl Sagan’s reflections remind us of our planet’s fragility and our shared responsibility to protect it. On that dot, all of human history has unfolded, and now, our actions are shaping its future like never before.
                <br />
                <br />
                For decades, scientists have warned about accelerating climate change. As carbon emissions rise, global temperatures increase, ice melts, and weather becomes more extreme. Human activities like fossil fuel use and deforestation have driven profound atmospheric changes.
                <br />
                <br />
                The data is clear: we’re at a crucial moment. While the world has made strides in understanding climate change, the need for action is greater than ever. That’s why we created <strong>Carbon Zero</strong>—to empower individuals to understand and reduce their carbon footprint.
                <br />
                <br />
                Carl Sagan’s "pale blue dot" is a humbling reminder of our shared duty to act—because our impact starts here.
              </motion.p>

              <hr className="h-px w-full border-none bg-muted" /> {/* Horizontal line */}

              <motion.div
                variants={contentVariants}
                transition={transition}
                viewport={viewport}
                initial="initial"
                whileInView="animate"
                className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-2"
              >
                <a
                  target="_blank"
                  href="https://www.spaceappschallenge.org/"
                  className="flex items-center justify-between gap-1 text-start font-futura text-base font-light text-white underline lg:justify-center lg:text-center"
                >
                  NASA Space Apps Challenge
                  <LinkArrow className="size-4 min-w-4 fill-white" />
                </a>
                <a
                  target="_blank"
                  href="https://www.nasa.gov/topics/earth/index.html"
                  className="flex items-center justify-between gap-1 text-start font-futura text-base font-light text-white underline lg:justify-center lg:text-center"
                >
                  Learn more about climate change
                  <LinkArrow className="size-4 min-w-4 fill-white" />
                </a>
                <a
                  target="_blank"
                  href="https://climate.nasa.gov/evidence/"
                  className="flex items-center justify-between gap-1 text-start font-futura text-base font-light text-white underline lg:justify-center lg:text-center"
                >
                  NASA's Climate Change Evidence
                  <LinkArrow className="size-4 min-w-4 fill-white" />
                </a>
              </motion.div>
            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
