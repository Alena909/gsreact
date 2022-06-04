import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import fire from "./images/animations/74216-animated-flames.json";

const Homepage = () => {
  const container = useRef();

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: fire,
    });
    // Return clean up function here
    return () => instance.destroy();
  }, []);

  return (
    <div>
      <h1>Welcome to Troop #6789</h1>
      <main id="home">
        <div className="animation" ref={container}></div>
        <div className="logs">
          <div className="log log-left"></div>
          <div className="log log-right"></div>
        </div>
      </main>
    </div>
  );
};
export default Homepage;
