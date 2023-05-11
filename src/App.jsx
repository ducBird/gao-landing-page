import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Features from "./components/Features";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Slogan from "./components/Slogan";
import "animate.css";
import Abouts from "./components/Features/Abouts";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // console.log(windowSize);
  }, [windowSize]);

  return (
    <div className="overflow-y-auto overflow-x-auto bg-gradient-to-b dark:from-dark-800 dark:via-dark-600 dark:to-dark-400 font-sora from-white to-dark-400 dark:text-white text-dark-800 px-4 py-8">
      <NavBar isMobile={isMobile} />
      <Slogan />
      {/* <Abouts /> */}
      <Content />
      <Introduction />
      <Features />
    </div>
  );
}

export default App;
