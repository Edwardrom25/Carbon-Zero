import { AnimatePresence } from "framer-motion";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { landingSitesData } from "@/data";

const SeasAndOceansMarkers = () => {
  const viewSeasAndOceans = useTypedSelector(
    (state) => state.data.seasAndOceans,
  );

  return (
    <AnimatePresence>
      {viewSeasAndOceans &&
        landingSitesData.map((landingSite) => (
          <PointOfInterest key={landingSite.name} {...landingSite} waypoint />
        ))}
    </AnimatePresence>
  );
};

export default SeasAndOceansMarkers;
