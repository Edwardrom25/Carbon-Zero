import { AnimatePresence } from "framer-motion";
import Moonquake from "@/components/moonquake";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { lognonne2003MoonquakeData, countryCoordinates } from "@/data";

const TimeSeriesMoonquakeMarkers = () => {
  const viewTimeSeriesData = useTypedSelector(
    (state) => state.data.timeSeriesData.on
  );

  return (
    <AnimatePresence>
      {viewTimeSeriesData &&
        lognonne2003MoonquakeData.map((moonquake, index) => {
          const { year, China, USA, India, Russia } = moonquake;

          // Show markers for each country with available data
          const countries = [
            { name: "China", value: China },
            { name: "USA", value: USA },
            { name: "India", value: India },
            { name: "Russia", value: Russia },
          ];

          return countries.map((country) => {
            // Ensure the coordinates exist for the country
            const coordinates = countryCoordinates[
              country.name as "China" | "USA" | "India" | "Russia"
            ];

            if (!coordinates) {
              console.warn(`No coordinates found for ${country.name}`); // Debugging if coordinates are missing
              return null; // Skip rendering if no coordinates
            }

            return (
              <Moonquake
                key={`time-series-${country.name}-${year}-${index}`}
                latitude={coordinates.latitude}
                longitude={coordinates.longitude}
                type={country.name as "China" | "USA" | "India" | "Russia"} // Use country name as type
              />
            );
          });
        })}
    </AnimatePresence>
  );
};

export default TimeSeriesMoonquakeMarkers;
