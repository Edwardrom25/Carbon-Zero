import { motion, AnimatePresence } from "framer-motion";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const transition = { type: "tween", duration: 0.8 };

const InformationBox = () => {
  const selectedMoonquake = useTypedSelector(
    (state) => state.data.selectedMoonquake
  );

  return (
    <AnimatePresence>
      {selectedMoonquake && (
        <motion.div
          variants={variants}
          transition={transition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="pointer-events-auto absolute right-0 top-0 flex h-fit w-[30%] flex-col border-2 border-gray bg-muted backdrop-blur-sm lg:w-[27%]"
        >
          <div className="flex w-full flex-col items-center px-1 pt-2 lg:gap-3.5 lg:px-4 lg:pb-3.5 lg:pt-6">
            <h2 className="w-full text-start font-futura text-sm font-light text-white lg:text-[2.5rem]">
              Seismic Event:
            </h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InformationBox;
