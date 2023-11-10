import {
  OrbitControls,
  ScrollControls,
  Stars,
  SpotLight,
} from "@react-three/drei";
import { Overlay } from "./Overlay";
import { Postpro } from "./Postpro";
import { CroppedCity } from "./CroppedCity";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      {/* <OrbitControls enableZoom={false} /> */}
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        {/* <Office /> */}
        <CroppedCity />
      </ScrollControls>
      <Stars radius={1} depth={600} count={1000000} />
      <spotLight
        intensity={5}
        position={[0, 0, 2000]}
        penumbra={1}
        color="#bc13fe"
      />
      <Postpro />
    </>
  );
};
