import { AnimatePresence } from "framer-motion";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { landingSitesData } from "@/data";

const ParallelsAndMeridiansMarkers = () => {
  const viewParallelsAndMeridians = useTypedSelector((state) => state.data.parallelsAndMeridians);

  return (
    <AnimatePresence>
      {viewParallelsAndMeridians &&
        landingSitesData.map((landingSite) => (
          <PointOfInterest key={landingSite.name} {...landingSite} waypoint />
        ))}
    </AnimatePresence>
  );
};

export default ParallelsAndMeridiansMarkers;

