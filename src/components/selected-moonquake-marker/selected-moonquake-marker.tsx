import { AnimatePresence } from "framer-motion";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { landingSitesData } from "@/data";

const SelectedMoonquakeMarker = () => {
  const selectedMoonquake = useTypedSelector(
    (state) => state.data.selectedMoonquake,
  );

  return (
    <AnimatePresence>
      {selectedMoonquake &&
        landingSitesData.map((landingSite) => (
          <PointOfInterest key={landingSite.name} {...landingSite} waypoint />
        ))}
    </AnimatePresence>
  );
};

export default SelectedMoonquakeMarker;
