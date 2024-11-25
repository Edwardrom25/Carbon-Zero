import { AnimatePresence } from "framer-motion";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { landingSitesData } from "@/data";

const CratersAndMountainsMarkers = () => {
  const viewCratersAndMountains = useTypedSelector(
    (state) => state.data.cratersAndMountains,
  );

  return (
    <AnimatePresence>
      {viewCratersAndMountains &&
        landingSitesData.map((landingSite) => (
          <PointOfInterest key={landingSite.name} {...landingSite} waypoint />
        ))}
    </AnimatePresence>
  );
};

export default CratersAndMountainsMarkers;
