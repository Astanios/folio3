import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

const Section2 = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">{props.children}</div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section2 opacity={opacityFirstSection}>
          <div className="neonBox text-center">
            <h3 className="neonText text-6xl">Hello, I'm</h3>
            <h1 className="neonText text-8xl customFontText ">Luis Castillo</h1>
            <p className="neonText text-2xl">I do cool stuff with JavaScript</p>
          </div>
        </Section2>
        <Section right opacity={opacitySecondSection}>
          <p className=" text-gray-900 text-lg">
            I'm a web developer with a passion for delivering exceptional visual
            experiences. I studied Computer Science and did a Master in Data
            Science.
          </p>
          <p className="text-gray-500">
            I've worked with the following technologies:
          </p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <p className="text-base text-gray-500">
            React, React Native, Vue, Angular, ThreeJS, PixiJS, D3, Tailwind,
            MUI, Redux
          </p>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <p className="text-base text-gray-500">
            Node, Django, RoR, Express, GraphQL
          </p>
          <p className="mt-3">
            <b>DataBases 🗃️</b>
          </p>
          <p className="text-base text-gray-500">
            MySQL, Redis, Postgre, Mongo
          </p>
          {/* <p className="text-gray-500">PS: I test in production</p> */}
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">🤙 Contact me:</h1>
          <p className="text-gray-500"></p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            <a href="mailto:ldcastillocisnero@gmail.com">
              ldcastillocisnero@gmail.com
            </a>
            <br />
            <a href="https://www.linkedin.com/in/luis-d-castillo-c/">
              linkedin.com/in/luis-d-castillo-c/
            </a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
