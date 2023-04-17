import React, { Suspense, useState, useEffect, useRef } from "react";
import Application, { SplineEvent } from "@splinetool/react-spline";

import AboutMe from "../components/AboutMe";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Home = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    if (showAboutMe) {
      setTimeout(() => {
        // Show the "About Me" component after a 1-second delay
        setShowAboutMe(true);
      }, 1000);
    }
  }, [showAboutMe]);

  const handleMouseDown = (e: { target: { name: string } }) => {
    if (e.target.name === "mystory") {
      // Set the state to trigger the useEffect hook
      setShowAboutMe(true);
    }
  };

  function onLoad(spline: any) {
    const obj = spline.findObjectByName("Camera");
    // save the object in a ref for later use
    cameraRef.current = obj;
  }

  function triggerAnimation() {
    cameraRef.current.emitEvent("mouseDown");
    setShowAboutMe(false);
  }

  return (
    <div className="h-screen w-screen relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene="https://prod.spline.design/AaQ5hKQz80KFqBBA/scene.splinecode"
          onMouseDown={handleMouseDown}
          onLoad={onLoad}
        />
      </Suspense>
      {showAboutMe && <AboutMe triggerAnimation={triggerAnimation} />}
    </div>
  );
};

export default Home;
