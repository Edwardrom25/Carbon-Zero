import { motion } from "framer-motion";
import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import ContentPadding from "@/components/content-padding";

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

const videoViewport = {
  once: true,
  amount: "some" as const,
};

const NetZeroCommitmentSection = () => {
  return (
    <section
      id="net-zero-commitment"
      className="mb-10 overflow-x-hidden bg-white py-12 md:mb-20 lg:mb-28 xl:mb-32 2xl:mb-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 pb-4">
          <SectionHeader textTheme="dark" titleText="A Global Commitment to Net Zero" />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              
            <hr className="h-px w-full border-none bg-muted" /> {/* Line below explanation */}
              {/* Net Zero Commitment Plot */}
              <motion.div
                variants={imageVariants}
                transition={transition}
                viewport={videoViewport}
                initial="initial"
                whileInView="animate"
                className="w-full"
              >
                <img
                  src={import.meta.env.BASE_URL + "assets/images/LTS.png"}
                  alt="Net Zero Commitment Map"
                  className="h-full w-full object-contain"
                />
              </motion.div>
              
            
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-blue"
              >
                Under the Paris Agreement, nations are encouraged to submit Long-Term Strategies (LTS) that outline their plans for achieving net-zero emissions by 2050. These strategies are essential to the global effort to limit warming to below 2°C, with an aim to stay under 1.5°C.
                <br />
                <br />
                This map shows the progress of countries worldwide. Nations with a net-zero target are marked in yellow, those with submitted strategies but no net-zero goal are in blue, and gray indicates countries without an LTS. Currently, 55 countries have committed to net-zero, 18 have submitted strategies without a target, and 139 have yet to present their LTS.
              </motion.p>

              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-blue"
              >
                While policy development has advanced, the challenge is turning plans into action. Countries must cut emissions in energy, agriculture, manufacturing, and waste by investing in renewables and reducing reliance on fossil fuels.
                <br />
                <br />
                For those without an LTS, the next step is to develop detailed, actionable plans. Nations with net-zero goals need to ensure their short-term Nationally Determined Contributions (NDCs) align with their long-term vision, avoiding high-emission technologies that could derail future progress.
                <br />
                <br />
                Going forward, countries must monitor their progress, track emissions reductions, and adjust as needed. The speed of implementation will shape the future of global climate resilience.
              </motion.p>

            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default NetZeroCommitmentSection;

