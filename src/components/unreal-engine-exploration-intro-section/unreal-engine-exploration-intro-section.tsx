import { motion } from "framer-motion";
import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import ContentPadding from "@/components/content-padding";

const contentVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const imageVariants = {
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
};

const contentViewport = {
  once: true,
  amount: "all" as const,
};

const imageViewport = {
  once: true,
  amount: "some" as const,
};

const ClimateStorySection = () => {
  return (
    <section
      id="climate-story"
      className="mb-10 mt-28 overflow-x-hidden bg-blue py-12 md:mb-20 md:mt-56 lg:my-28 xl:my-32 2xl:my-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 pb-4">
          <SectionHeader textTheme="light" titleText="Global Emissions, Local Actions" />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              {/* Access Paragraph */}
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-white"
              >
                Global challenges demand local solutions. Combating climate change isn't just about understanding emissions data—it’s about transforming that knowledge into tangible actions. Whether it’s installing solar panels at home, switching to electric vehicles, or choosing sustainably sourced products, our decisions collectively shape the future.
              </motion.p>
              {/* Global Emissions Plot */}
              <hr className="h-px w-full border-none bg-muted" /> {/* Line above plot */}
              <motion.div
                variants={imageVariants}
                transition={transition}
                viewport={imageViewport}
                initial="initial"
                whileInView="animate"
                className="w-full"
              >
                <img
                  src={import.meta.env.BASE_URL + "assets/images/ghg-global.png"}
                  alt="Global GHG emissions"
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-white"
              >
               Over the last three decades, global greenhouse gas emissions have surged by 51%, from 32.74 gigatonnes (Gt) in 1990 to 49.6 Gt in 2021. The combined effect of carbon dioxide, methane, and nitrous oxide is destabilizing ecosystems, leading to more extreme weather events, rising sea levels, and biodiversity loss.
              </motion.p>
              <hr className="h-px w-full border-none bg-muted" /> {/* Line below explanation */}
              
              {/* Emissions by Country Plot */}
             
              <motion.div
                variants={imageVariants}
                transition={transition}
                viewport={imageViewport}
                initial="initial"
                whileInView="animate"
                className="w-full"
              >
                <img
                  src={import.meta.env.BASE_URL + "assets/images/ghg-countries.png"}
                  alt="GHG emissions by country"
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-white"
              >
                In 2021, China, the U.S., and India were the top emitters, contributing 25.8%, 11.5%, and 6.5% of global emissions, respectively. China's emissions are largely driven by coal, while the U.S. sees significant output from consumption and transportation. India's industrial growth and large population are factors, though its per capita emissions remain lower than other top emitters.
              </motion.p>
              <hr className="h-px w-full border-none bg-muted" /> {/* Line below explanation */}
              
              {/* Emissions by Sector Plot */}
      
              <motion.div
                variants={imageVariants}
                transition={transition}
                viewport={imageViewport}
                initial="initial"
                whileInView="animate"
                className="w-full"
              >
                <img
                  src={import.meta.env.BASE_URL + "assets/images/ghg-sectors.png"}
                  alt="GHG emissions by sector"
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-white"
              >
               The energy sector accounted for 75.4% of global emissions in 2021, with fossil fuels powering much of the world’s electricity and transportation. However, progress is being made through clean energy solutions, electric vehicles, and efficiency improvements. For example, Norway has transitioned over 80% of new vehicle sales to electric, supported by widespread charging infrastructure and incentives like tax exemptions. In agriculture, which significantly contributes to methane and nitrous oxide emissions, practices such as regenerative farming and reducing reliance on synthetic fertilizers are gaining traction to lower emissions.
               </motion.p>
              <hr className="h-px w-full border-none bg-muted" /> {/* Line below explanation */}
              
              {/* Emissions by Greenhouse Gas Plot */}
        
              <motion.div
                variants={imageVariants}
                transition={transition}
                viewport={imageViewport}
                initial="initial"
                whileInView="animate"
                className="w-full"
              >
                <img
                  src={import.meta.env.BASE_URL + "assets/images/ghg-gasses.png"}
                  alt="GHG emissions by gas"
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-white"
              >
                Carbon dioxide made up 74% of global emissions in 2021, primarily from fossil fuel use and deforestation. Methane, while less prevalent, is far more potent and originates from livestock and fossil fuel extraction. Nitrous oxide from fertilizers and fluorinated gases from refrigeration also contribute significantly. Systemic changes in industry, agriculture, and energy sectors are crucial to reducing these emissions.
              </motion.p>
      
            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default ClimateStorySection;
