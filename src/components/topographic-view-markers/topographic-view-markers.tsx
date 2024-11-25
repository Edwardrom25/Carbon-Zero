import { AnimatePresence } from "framer-motion";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { landingSitesData } from "@/data";

const TopographicViewMarkers = () => {
  const viewTopographic = useTypedSelector((state) => state.data.topographicView);

  return (
    <AnimatePresence>
      {viewTopographic &&
        landingSitesData.map((landingSite) => (
          <PointOfInterest key={landingSite.name} {...landingSite} waypoint />
        ))}
    </AnimatePresence>
  );
};

export default TopographicViewMarkers;


