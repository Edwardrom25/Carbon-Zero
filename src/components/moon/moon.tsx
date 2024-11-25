import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { useMemo } from "react";
import * as THREE from "three"; // Import THREE for materials

// Utility to dynamically load tiles with explicit TypeScript types
const getTileUrl = (type: string, z: number, x: number, y: number): string => {
  const urls: Record<string, string> = {
    topographicView: `https://earth.gov/ghgcenter/api/raster/searches/822d8911ace54263c201fffc56d8e752/tiles/WebMercatorQuad/${z}/${x}/${y}?assets=population-density&colormap_name=ylorrd&rescale=0,1000`,
    fossilFuelCO2Emissions: `https://earth.gov/ghgcenter/api/raster/searches/c5aeaef15499f4f521b198f8a48841c8/tiles/WebMercatorQuad/${z}/${x}/${y}?assets=co2-emissions&colormap_name=jet&rescale=-10,60`,
    dryAirColumnCO2Concentrations: `https://earth.gov/ghgcenter/api/raster/searches/08f476b6d4343d87fce86fc20989abcb/tiles/WebMercatorQuad/${z}/${x}/${y}?assets=xco2&colormap_name=magma&rescale=412,422`,
    airSeaCO2Flux: `https://earth.gov/ghgcenter/api/raster/searches/e38c1b6e8f3e8f32154dab2e8bbd4e86/tiles/WebMercatorQuad/${z}/${x}/${y}?assets=co2&colormap_name=bwr&rescale=-0.0007,0.0002`,
    wetlandMethaneEmissions: `https://earth.gov/ghgcenter/api/raster/searches/ac178c9e3d4f069d1334475c7febad34/tiles/WebMercatorQuad/${z}/${x}/${y}?assets=ensemble-mean-ch4-wetlands-emissions&colormap_name=magma&rescale=0,3e-9`,
  };

  return urls[type];
};

const Earth = () => {
  const topographicView = useTypedSelector(
    (state) => state.data.topographicView,
  );
  const seasAndOceans = useTypedSelector(
    (state) => state.data.seasAndOceans,
  );
  const parallelsAndMeridians = useTypedSelector(
    (state) => state.data.parallelsAndMeridians,
  );
  const cratersAndMountains = useTypedSelector(
    (state) => state.data.cratersAndMountains,
  );
  const landingSites = useTypedSelector(
    (state) => state.data.landingSites,
  );

  // Load earth daymap texture
  const earthTexture = useLoader(
    TextureLoader,
    import.meta.env.BASE_URL + "assets/images/8k_earth_daymap.jpg",
  );

  // Load appropriate texture based on the selected view
  const selectedTexture = useMemo(() => {
    const loader = new TextureLoader();

    if (topographicView) {
      return loader.load(getTileUrl("topographicView", 0, 0, 0));
    } else if (seasAndOceans) {
      return loader.load(getTileUrl("fossilFuelCO2Emissions", 0, 0, 0));
    } else if (parallelsAndMeridians) {
      return loader.load(getTileUrl("dryAirColumnCO2Concentrations", 0, 0, 0));
    } else if (cratersAndMountains) {
      return loader.load(getTileUrl("airSeaCO2Flux", 0, 0, 0));
    } else if (landingSites) {
      return loader.load(getTileUrl("wetlandMethaneEmissions", 0, 0, 0));
    } else {
      return earthTexture;
    }
  }, [topographicView, seasAndOceans, parallelsAndMeridians, cratersAndMountains, landingSites]);

  return (
    <>
      {/* Main Earth sphere */}
      <mesh>
        <sphereGeometry attach="geometry" args={[2, 64, 64, -Math.PI / 2]} />
        <meshStandardMaterial map={selectedTexture} />
      </mesh>

      {/* White glow effect */}
      <mesh>
        <sphereGeometry attach="geometry" args={[2.02, 64, 64]} /> {/* Slightly larger sphere */}
        <meshBasicMaterial
          color={new THREE.Color(0xffffff)} // White glow color
          transparent={true}
          opacity={0.2} // Control intensity of the glow
          side={THREE.BackSide} // Render only the outside of the sphere
        />
      </mesh>
    </>
  );
};

export default Earth;
