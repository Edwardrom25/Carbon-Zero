import { motion, AnimatePresence } from "framer-motion";
import {
  useTypedSelector,
  useTypedDispatch,
} from "@/lib/hooks/typed-redux-hooks";
import { dataActions } from "@/lib/store/slices/data-slice";

const variants = {
  hidden: { opacity: 0, x: 40, pointerEvents: "none" as const },
  visible: { opacity: 1, x: 0, pointerEvents: "auto" as const },
};

const transition = { type: "tween", duration: 0.4 };

const TimeSeriesCheckboxes = () => {
  const viewTimeSeriesData = useTypedSelector(
    (state) => state.data.timeSeriesData,
  );

  const dispatch = useTypedDispatch();
  const { setTimeSeriesData } = dataActions;

  const chinaChangeHandler = () => {
    dispatch(
      setTimeSeriesData({
        chinaEmissions: !viewTimeSeriesData.chinaEmissions,
      }),
    );
  };

  const usChangeHandler = () => {
    dispatch(
      setTimeSeriesData({
        usEmissions: !viewTimeSeriesData.usEmissions,
      }),
    );
  };

  const indiaChangeHandler = () => {
    dispatch(
      setTimeSeriesData({
        indiaEmissions: !viewTimeSeriesData.indiaEmissions,
      }),
    );
  };

  const russiaChangeHandler = () => {
    dispatch(
      setTimeSeriesData({
        russiaEmissions: !viewTimeSeriesData.russiaEmissions,
      }),
    );
  };

  return (
    <AnimatePresence>
      {viewTimeSeriesData.on && (
        <motion.div
        variants={variants}
        transition={transition}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="pointer-events-auto z-30 grid grid-cols-2 items-center justify-center gap-8 self-center md:absolute md:bottom-[-40px] md:right-[120px] md:flex md:flex-row md:gap-5"
      >   
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-between gap-2 max-2xl:w-min">
              <input
                name="china-emissions"
                id="china-emissions"
                type="checkbox"
                disabled={!viewTimeSeriesData.on}
                checked={viewTimeSeriesData.chinaEmissions}
                onChange={chinaChangeHandler}
                className="rounded-none accent-muted"
              />
              <label
                htmlFor="china-emissions"
                className="font-futura text-base font-light leading-none text-white"
              >
                China
              </label>
            </div>
            <div className="size-4 rounded-full border border-white bg-yellow" />
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-between gap-2 max-2xl:w-min">
              <input
                type="checkbox"
                name="us-emissions"
                id="us-emissions"
                disabled={!viewTimeSeriesData.on}
                checked={viewTimeSeriesData.usEmissions}
                onChange={usChangeHandler}
                className="rounded-none accent-muted"
              />
              <label
                htmlFor="us-emissions"
                className="font-futura text-base font-light leading-none text-white"
              >
                USA
              </label>
            </div>
            <div className="size-4 rounded-full border border-white bg-purple" />
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-between gap-2 max-2xl:w-min">
              <input
                type="checkbox"
                name="india-emissions"
                id="india-emissions"
                disabled={!viewTimeSeriesData.on}
                checked={viewTimeSeriesData.indiaEmissions}
                onChange={indiaChangeHandler}
                className="rounded-none accent-muted"
              />
              <label
                htmlFor="india-emissions"
                className="font-futura text-base font-light leading-none text-white"
              >
                India
              </label>
            </div>
            <div className="size-4 rounded-full border border-white bg-green" />
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-between gap-2 max-2xl:w-min">
              <input
                type="checkbox"
                name="russia-emissions"
                id="russia-emissions"
                disabled={!viewTimeSeriesData.on}
                checked={viewTimeSeriesData.russiaEmissions}
                onChange={russiaChangeHandler}
                className="rounded-none accent-muted"
              />
              <label
                htmlFor="russia-emissions"
                className="font-futura text-base font-light leading-none text-white"
              >
                Russia
              </label>
            </div>
            <div className="size-4 rounded-full border border-white bg-cyan" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeSeriesCheckboxes;
