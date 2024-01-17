import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
import { mousePointer } from "../mousePointer";
import { useSelector } from "react-redux";
function BgEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const theme = useSelector((state) => state.theme);
  const x = useSelector((state) => state.x);
  const y = useSelector((state) => state.y);

  const themeBool = useMemo(() => {
    return theme === "light";
  }, [theme]);
  // console.log("theme", themeBool);
  // console.log("in", theme);
  //   const { x, y } = mousePointer();
  useEffect(() => {
    // console.log("useEffect triggered with x:", x, "and y:", y);
    setPos({ x, y });
  }, [x, y]);

  const containerRef = useRef(null),
    [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);
  // console.log("inside bg", pos);

  useEffect(() => {
    const updatedOpt = { ...options };
    if (themeBool) {
      updatedOpt.themes[1].options.background.color = "orange";
      updatedOpt.themes[1].options.particles.color.value = "#000000";
      updatedOpt.themes[1].options.particles.links.color = "#ffffff";
    } else {
      updatedOpt.themes[1].options.background.color = "#000000";
      updatedOpt.themes[1].options.particles.color.value = "#ffffff";
      updatedOpt.themes[1].options.particles.links.color = "#FFA500";
    }
    setOpt(updatedOpt);
  }, [themeBool]);

  const particlesLoaded = useCallback(
      (container) => {
        containerRef.current = container;

        window.particlesContainer = container;
      },
      [containerRef]
    ),
    options = useMemo(
      () => ({
        fullScreen: {
          zIndex: -1,
        },
        particles: {
          number: {
            value: 100,
          },
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
        },
        themes: [
          {
            name: "light",
            default: {
              value: true,
              auto: true,
              mode: "light",
            },
            options: {
              background: {
                color: "#ffffff",
              },
              particles: {
                color: {
                  value: "#000000",
                },
                links: {
                  color: "#000000",
                },
              },
            },
          },
          {
            name: "dark",
            default: {
              value: true,
              auto: true,
              mode: "dark",
            },
            options: {
              background: {
                color: "#000000",
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                },
              },
            },
          },
        ],
      }),
      []
    ),
    lightTheme = () => {
      containerRef.current?.loadTheme("light");
    },
    darkTheme = () => {
      containerRef.current?.loadTheme("dark");
    };
  const [opt, setOpt] = useState(options);
  console.log("opt", opt);
  return (
    <div className={`App ${theme === "dark" && "bg-black"}`}>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={opt}
        />
      )}
    </div>
  );
}

export default BgEffect;
