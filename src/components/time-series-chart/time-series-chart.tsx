import { Lognonne2003MoonquakeData } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RCTooltip,
  Label,
  ResponsiveContainer,
} from "recharts";
import Tooltip from "@/components/tooltip";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { useWindowDimensions } from "@/lib/hooks/window-dimensions";
import { lognonne2003MoonquakeData} from "@/data";

type MoonquakeData = Lognonne2003MoonquakeData;

interface DataVisibilities {
  China: boolean;
  USA: boolean;
  India: boolean;
  Russia: boolean;
}

interface DataTypeColors {
  China: string;
  USA: string;
  India: string;
  Russia: string;
}

const completeMoonquakeData: MoonquakeData[] = [...lognonne2003MoonquakeData];

const variants = {
  hidden: { opacity: 0, y: -40, pointerEvents: "none" as const },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" as const },
};

const transition = { type: "tween", duration: 0.8 };

const TimeSeriesChart = () => {
  const viewTimeSeriesData = useTypedSelector(
    (state) => state.data.timeSeriesData
  );

  const { width } = useWindowDimensions();

  const dataVisibilities: DataVisibilities = {
    China: viewTimeSeriesData.chinaEmissions, 
    USA: viewTimeSeriesData.usEmissions, 
    India: viewTimeSeriesData.indiaEmissions, 
    Russia: viewTimeSeriesData.russiaEmissions,
  };

  // Assign color values to each country
  const dataTypeColors: DataTypeColors = {
    China: "rgb(239, 255, 92)",
    USA: "rgb(170, 0, 190)",
    India: "rgb(0, 175, 90)",
    Russia: "rgb(0, 205, 255)",
  };

  // Process the data for each year and country
  const countByYearAndType = (data: MoonquakeData[]) => {
    const counts: Record<string, Record<string, number>> = {};
    const allCountries = Object.keys(dataTypeColors);

    data.forEach((item) => {
      const { year, China, USA, India, Russia } = item;

      if (!counts[year]) {
        counts[year] = {};
        allCountries.forEach((country) => (counts[year][country] = 0)); // Initialize all countries to 0
      }

      counts[year]["China"] += China;
      counts[year]["USA"] += USA;
      counts[year]["India"] += India;
      counts[year]["Russia"] += Russia;
    });

    return counts;
  };

  // Generate data points for each year
  const counts = countByYearAndType(completeMoonquakeData);
  const years = Object.keys(counts).map((year) => ({
    year,
    ...counts[year],
  }));

  // Determine which lines to render based on visibility
  const lines = Object.keys(dataTypeColors).filter(
    (country) => dataVisibilities[country as keyof DataVisibilities]
  );

  const size = width < 850 ? 20 : 34;

  return (
    <AnimatePresence>
      {viewTimeSeriesData.on && (
        <motion.div
          variants={variants}
          transition={transition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute right-0 top-0 flex h-[300px] w-2/5 items-center justify-center rounded-none border-2 border-solid border-gray bg-muted p-1.5 text-center text-white outline-none backdrop-blur-sm max-lg:h-[220px] max-lg:w-3/5 max-lg:p-1 max-[500px]:h-[145px] max-[500px]:w-[68.75%] max-[500px]:p-0.5"
        >
<ResponsiveContainer height="100%" width="100%">
  <LineChart width={800} height={800} data={years}>


    <CartesianGrid stroke="#e9e6e6" strokeWidth={0.3} />
    
    <XAxis
      dataKey="year"
      height={size}
      stroke="#e9e6e6"
      strokeWidth={0.3}
      className="fill-white font-futura text-sm font-extralight max-lg:text-[10px] max-[480px]:text-[8px]"
      tick={{ fill: "white" }}
    >
      <Label
        className="fill-white font-futura text-sm font-extralight max-lg:text-[10px] max-[480px]:text-[8px]"
        value="Year"
        offset={-2}
        position="insideBottom"
      />
    </XAxis>

    <YAxis
      width={size + 2}
      className="fill-white font-futura text-sm font-extralight max-lg:text-[10px] max-[480px]:text-[8px]"
      stroke="#e9e6e6"
      strokeWidth={0.3}
      tick={{ fill: "white" }}
    >
      <Label
        className="fill-white font-futura text-sm font-extralight max-lg:text-[10px] max-[480px]:text-[8px]"
        value="CO₂e Emissions (Gt) of Top Emitters"
        angle={-90}
        offset={window.innerWidth < 800 ? 4 : 10}
        position="insideBottomLeft"
      />
    </YAxis>

    <RCTooltip
      content={({ active, payload, label }) => (
        <Tooltip
          active={active}
          payload={payload as { name: string; value: string }[]}
          label={label}
        />
      )}
    />

    {lines.map((country) => (
      <Line
        key={country}
        type="monotone"
        dataKey={country}
        stroke={dataTypeColors[country as keyof DataTypeColors]}
      />
    ))}
  </LineChart>
</ResponsiveContainer>





        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeSeriesChart;