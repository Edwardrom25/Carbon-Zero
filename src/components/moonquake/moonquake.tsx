import { motion } from "framer-motion";
import Marker from "@/components/marker";

interface SelectedMoonQuakeProps {
  latitude: number;
  longitude: number;
  type?: never;
  selected: true;
}

interface TimeSeriesMoonQuakeProps {
  latitude: number;
  longitude: number;
  type: "China" | "USA" | "India" | "Russia";
  selected?: false;
}

type Props = SelectedMoonQuakeProps | TimeSeriesMoonQuakeProps;

// Keep animation consistent for all markers
const animation = {
  transform: ["scale(0)", "scale(0.1)", "scale(0.8)", "scale(1)"],
  opacity: [0, 1, 1, 0],
};

const Moonquake = (props: Props) => {
  const { latitude, longitude, type, selected = false } = props;

  let moonquakeClasses = "absolute rounded-full border bg-transparent";
  const markerSize = "size-6"; // Keep the size consistent for all markers

  // Default to white for the selected marker
  let borderColor = "border-white";
  let duration = 1;

  // Map the line colors from the chart for each country
  switch (type) {
    case "China":
      borderColor = "border-yellow"; // Same color as chart for China
      duration = 0.4;
      break;
    case "USA":
      borderColor = "border-purple"; // Same color as chart for US
      duration = 0.92;
      break;
    case "India":
      borderColor = "border-green"; // Same color as chart for India
      duration = 1.53;
      break;
    case "Russia":
      borderColor = "border-cyan"; // Same color as chart for Russia
      duration = 2.64;
      break;
  }

  // Build the final CSS classes for the marker
  moonquakeClasses += ` -left-3 -top-3 ${markerSize} ${borderColor}`;

  // Adjust transition to include the dynamic duration
  const transition = {
    type: "tween",
    duration: duration,
    times: [0, 0.1, 0.8, 1],
    repeat: Infinity,
  };

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      type="scaling"
      showFarSide={selected}
    >
      <motion.div
        transition={transition}
        animate={animation}
        className={moonquakeClasses}
      />
    </Marker>
  );
};

export default Moonquake;
