import { Routes } from "@/lib/router";
import { motion } from "framer-motion";
import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import ContentPadding from "@/components/content-padding";
import Button from "@/components/button";

const contentVariants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const linksParentVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const linksChildrenVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const contentTransition = {
  type: "tween",
  duration: 0.4,
};

const linksTransition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "all" as const,
};

const ExploreSection = () => {
  return (
    <section
      id="explore"
      className="mb-10 overflow-x-hidden bg-white py-12 md:mb-20 lg:mb-28 xl:mb-32 2xl:mb-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12">
          <SectionHeader
            titleText="Explore Your Impact"
            textTheme="dark"
          />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <motion.p
                variants={contentVariants}
                transition={contentTransition}
                viewport={viewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-blue"
              >
                Interact with a 3D Earth displaying data from the U.S. Greenhouse Gas Center, such as population density, fossil fuel CO<sub>2</sub> emissions, and wetland methane emissions. Explore time-series analyses of emissions by country, sector, and greenhouse gases provided by Climate Watch, a platform managed by the World Resources Institute. Discover which nations are making meaningful strides toward net-zero emissions and gain a deeper understanding of the key factors driving climate change.
              </motion.p>
              <hr className="h-px w-full border-none bg-muted" />
              <motion.div
                variants={linksParentVariants}
                transition={linksTransition}
                viewport={viewport}
                initial="initial"
                whileInView="animate"
                className="mx-auto flex w-full flex-col gap-2 md:gap-4 lg:w-1/2 lg:py-4"
              >
                <motion.div
                  variants={linksChildrenVariants}
                  transition={linksTransition}
                  className="w-full"
                >
                  <Button
                    text="Navigate Your Carbon Footprint in 3D"
                    link={Routes.GLOBE_EXPLORATION}
                    strongText
                  />
                </motion.div>

                {/* New button added below */}
                <motion.div
                  variants={linksChildrenVariants}
                  transition={linksTransition}
                  className="w-full"
                >
                  <Button
                    text="Break Down the Numbers"
                    link={Routes.UNREAL_ENGINE_EXPLORATION}
                    strongText
                  />
                </motion.div>
              </motion.div>
            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default ExploreSection;
