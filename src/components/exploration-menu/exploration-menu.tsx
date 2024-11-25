import { motion } from "framer-motion";
import Button from "@/components/button";
import { useTypedSelector, useTypedDispatch } from "@/lib/hooks/typed-redux-hooks";
import { dataActions } from "@/lib/store/slices/data-slice";

const controlVariants = {
  hidden: { opacity: 0, x: 0, pointerEvents: "none" as const },
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, pointerEvents: "auto" as const },
};

const legendVariants = {
  hidden: { opacity: 0, y: 40, pointerEvents: "none" as const },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" as const },
};

const infoBoxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const controlTransition = {
  type: "tween",
  duration: 0.4,
  delayChildren: 1,
  staggerChildren: 0.2,
};

const presentTransition = { type: "tween", duration: 0.8 };

const MotionButton = motion(Button);

const ExplorationMenu = () => {
  const dispatch = useTypedDispatch();
  const {
    toggleTopographicView,
    toggleParallelsAndMeridians,
    toggleSeasAndOceans,
    toggleCratersAndMountains,
    toggleLandingSites,
  } = dataActions;

  const activeView = useTypedSelector((state) => state.data.activeView);

  const toggleTopographicViewHandler = () => {
    dispatch(toggleTopographicView());
  };

  const toggleParallelsAndMeridiansHandler = () => {
    dispatch(toggleParallelsAndMeridians());
  };

  const toggleSeasAndOceansHandler = () => {
    dispatch(toggleSeasAndOceans());
  };

  const toggleCratersAndMountainsHandler = () => {
    dispatch(toggleCratersAndMountains());
  };

  const toggleLandingSitesHandler = () => {
    dispatch(toggleLandingSites());
  };

  return (
    <div className="pointer-events-auto flex w-[30%] flex-col items-start gap-2 lg:w-[27%] lg:gap-3">
      <motion.div
        transition={controlTransition}
        initial="initial"
        animate="animate"
        className="flex w-full flex-col items-start gap-1.5 lg:gap-2"
      >
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Population Density"
          onClick={toggleTopographicViewHandler}
          active={activeView === "topographicView"}
        />
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Fossil Fuel CO₂ Emissions"
          onClick={toggleSeasAndOceansHandler}
          active={activeView === "seasAndOceans"}
        />
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Dry-Air Column CO₂ Concentrations"
          onClick={toggleParallelsAndMeridiansHandler}
          active={activeView === "parallelsAndMeridians"}
        />
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Air-Sea CO₂ Flux"
          onClick={toggleCratersAndMountainsHandler}
          active={activeView === "cratersAndMountains"}
        />
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Wetland Methane Emissions"
          onClick={toggleLandingSitesHandler}
          active={activeView === "landingSites"}
        />
      </motion.div>

      {/* Population Density Legend */}
      {activeView === "topographicView" && (
        <motion.div
          variants={legendVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-start gap-1"
        >
          <div className="flex w-full flex-col items-start">
            <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
              person/km<sup>2</sup>:
            </p>
            <div className="flex w-full items-center justify-between">
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">0</p>
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">1000</p>
            </div>
          </div>
          <img
            src={import.meta.env.BASE_URL + "assets/images/legend.png"}
            alt="Topographic View Legend"
            className="w-full border border-gray max-lg:h-1.5"
          />
        </motion.div>
      )}

      {/* Fossil Fuel CO₂ Emissions Legend */}
      {activeView === "seasAndOceans" && (
        <motion.div
          variants={legendVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-start gap-1"
        >
          <div className="flex w-full flex-col items-start">
            <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
              tonne C/km<sup>2</sup>/month:
            </p>
            <div className="flex w-full items-center justify-between">
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">-10</p>
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">60</p>
            </div>
          </div>
          <img
            src={import.meta.env.BASE_URL + "assets/images/fossil-legend.png"}
            alt="Fossil Fuel CO₂ Emissions Legend"
            className="w-full border border-gray max-lg:h-1.5"
          />
        </motion.div>
      )}

      {/* Dry-Air Column CO₂ Concentrations Legend */}
      {activeView === "parallelsAndMeridians" && (
        <motion.div
          variants={legendVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-start gap-1"
        >
          <div className="flex w-full flex-col items-start">
            <p className="font-futura font-light text-white max-lg:text-[0.5rem]">ppm:</p>
            <div className="flex w-full items-center justify-between">
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">412</p>
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">422</p>
            </div>
          </div>
          <img
            src={import.meta.env.BASE_URL + "assets/images/column-legend.png"}
            alt="Dry-Air Column CO₂ Concentrations Legend"
            className="w-full border border-gray max-lg:h-1.5"
          />
        </motion.div>
      )}

      {/* Air-Sea CO₂ Flux Legend */}
      {activeView === "cratersAndMountains" && (
        <motion.div
          variants={legendVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-start gap-1"
        >
          <div className="flex w-full flex-col items-start">
            <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
              mmol m<sup>2</sup>/s:
            </p>
            <div className="flex w-full items-center justify-between">
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
                -7x10<sup>-4</sup>
              </p>
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
                7x10<sup>-4</sup>
              </p>
            </div>
          </div>
          <img
            src={import.meta.env.BASE_URL + "assets/images/air-sea-legend.png"}
            alt="Air-Sea CO₂ Flux Legend"
            className="w-full border border-gray max-lg:h-1.5"
          />
        </motion.div>
      )}

      {/* Wetland Methane Emissions Legend */}
      {activeView === "landingSites" && (
        <motion.div
          variants={legendVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-start gap-1"
        >
          <div className="flex w-full flex-col items-start">
            <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
              kg CH<sub>4</sub>/m<sup>2</sup>/s:
            </p>
            <div className="flex w-full items-center justify-between">
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">0</p>
              <p className="font-futura font-light text-white max-lg:text-[0.5rem]">3x10<sup>-9</sup></p>
            </div>
          </div>
          <img
            src={import.meta.env.BASE_URL + "assets/images/wetland-legend.png"}
            alt="Wetland Methane Emissions Legend"
            className="w-full border border-gray max-lg:h-1.5"
          />
        </motion.div>
      )}

      {/* Population Density Information Box */}
      {activeView === "topographicView" && (
        <motion.div
          variants={infoBoxVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="pointer-events-auto absolute right-0 top-0 flex h-fit w-[30%] flex-col border-2 border-gray bg-muted backdrop-blur-sm lg:w-[27%]"
        >
          <div className="flex w-full flex-col items-center px-1 pt-2 lg:gap-3.5 lg:px-4 lg:pb-3.5 lg:pt-6">
            <h2 className="w-full text-start font-futura text-sm font-light text-white lg:text-[1.5rem]">
              Population Density
            </h2>
          </div>
          <hr className="mx-1 h-px border-none bg-gray/25 lg:mx-2" />
          <div className="flex w-full flex-col items-start gap-2 px-1 py-2 lg:gap-3 lg:px-4">
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
            Between 2000 and 2020, NASA and Columbia University researchers mapped global population density at a high resolution of 1 km using census data and population registers. This data helps scientists assess natural disaster risks, plan infrastructure, and study human-environment interactions, providing valuable insights into social, economic, and environmental challenges over time.
            </p>
          </div>
        </motion.div>
      )}

      {/* Fossil Fuel CO₂ Emissions Information Box */}
      {activeView === "seasAndOceans" && (
        <motion.div
          variants={infoBoxVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="pointer-events-auto absolute right-0 top-0 flex h-fit w-[30%] flex-col border-2 border-gray bg-muted backdrop-blur-sm lg:w-[27%]"
        >
          <div className="flex w-full flex-col items-center px-1 pt-2 lg:gap-3.5 lg:px-4 lg:pb-3.5 lg:pt-6">
            <h2 className="w-full text-start font-futura text-sm font-light text-white lg:text-[1.5rem]">
              Fossil Fuel CO₂ Emissions
            </h2>
          </div>
          <hr className="mx-1 h-px border-none bg-gray/25 lg:mx-2" />
          <div className="flex w-full flex-col items-start gap-2 px-1 py-2 lg:gap-3 lg:px-4">
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
            Between 2000 and 2022, NASA and NIES produced monthly estimates of fossil fuel CO₂ emissions at a 1 km resolution, using data from power plants and satellite images of nighttime lights. This allows scientists to identify emission hotspots, particularly in industrial and densely populated areas, and track global emission trends to better understand the impact of fossil fuel use on climate change.
            </p>
          </div>
        </motion.div>
      )}

      {/* Dry-Air Column CO₂ Concentrations Information Box */}
      {activeView === "parallelsAndMeridians" && (
        <motion.div
          variants={infoBoxVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="pointer-events-auto absolute right-0 top-0 flex h-fit w-[30%] flex-col border-2 border-gray bg-muted backdrop-blur-sm lg:w-[27%]"
        >
          <div className="flex w-full flex-col items-center px-1 pt-2 lg:gap-3.5 lg:px-4 lg:pb-3.5 lg:pt-6">
            <h2 className="w-full text-start font-futura text-sm font-light text-white lg:text-[1.5rem]">
              Dry-Air Column CO₂ Concentrations
            </h2>
          </div>
          <hr className="mx-1 h-px border-none bg-gray/25 lg:mx-2" />
          <div className="flex w-full flex-col items-start gap-2 px-1 py-2 lg:gap-3 lg:px-4">
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
            In 2014, NASA launched the Orbiting Carbon Observatory-2 (OCO-2) to monitor atmospheric CO₂. From 2015 to 2022, it collected daily data on CO₂ movement through the atmosphere. Combined with NASA’s GEOS modeling system, this data helps scientists track CO₂ emissions and absorption across the planet, providing a clearer understanding of the carbon cycle and its impact on Earth’s climate.
            </p>
          </div>
        </motion.div>
      )}

      {/* Air-Sea CO₂ Flux Information Box */}
      {activeView === "cratersAndMountains" && (
        <motion.div
          variants={infoBoxVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="pointer-events-auto absolute right-0 top-0 flex h-fit w-[30%] flex-col border-2 border-gray bg-muted backdrop-blur-sm lg:w-[27%]"
        >
          <div className="flex w-full flex-col items-center px-1 pt-2 lg:gap-3.5 lg:px-4 lg:pb-3.5 lg:pt-6">
            <h2 className="w-full text-start font-futura text-sm font-light text-white lg:text-[1.5rem]">
              Air-Sea CO₂ Flux
            </h2>
          </div>
          <hr className="mx-1 h-px border-none bg-gray/25 lg:mx-2" />
          <div className="flex w-full flex-col items-start gap-2 px-1 py-2 lg:gap-3 lg:px-4">
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
            Between 2020 and 2022, NASA scientists tracked monthly CO₂ exchange between the ocean and atmosphere. By combining physical measurements with computer models, they monitored how much carbon the ocean absorbs, providing crucial insights into the ocean's role in slowing climate change.
            </p>
          </div>
        </motion.div>
      )}

      {/* Wetland Methane Emissions Information Box */}
      {activeView === "landingSites" && (
        <motion.div
          variants={infoBoxVariants}
          transition={presentTransition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="pointer-events-auto absolute right-0 top-0 flex h-fit w-[30%] flex-col border-2 border-gray bg-muted backdrop-blur-sm lg:w-[27%]"
        >
          <div className="flex w-full flex-col items-center px-1 pt-2 lg:gap-3.5 lg:px-4 lg:pb-3.5 lg:pt-6">
            <h2 className="w-full text-start font-futura text-sm font-light text-white lg:text-[1.5rem]">
              Wetland Methane Emissions
            </h2>
          </div>
          <hr className="mx-1 h-px border-none bg-gray/25 lg:mx-2" />
          <div className="flex w-full flex-col items-start gap-2 px-1 py-2 lg:gap-3 lg:px-4">
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
            Wetlands are a significant natural source of methane, a potent greenhouse gas. Since 1990, NASA has used the LPJ-EOSIM model to estimate global methane emissions from wetlands on a daily and monthly basis. The model simulates emissions based on wetland soil moisture, temperature, and carbon content, helping scientists better assess the role of wetlands in global greenhouse gas emissions.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ExplorationMenu;


