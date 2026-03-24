"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log("particles container loaded", container);
  };

  const options: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          quantity: 2,
        },
        grab: {
          distance: 180,
          links: {
            opacity: 0.3,
            color: "#06b6d4"
          },
        },
      },
    },
    particles: {
      color: {
        value: ["#06b6d4", "#a855f7", "#3b82f6"], // Cyan, Purple, Neon Blue
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
        value: 40, // Reduced for performance
      },
      opacity: {
        value: { min: 0.1, max: 0.6 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2.5 },
      },
      shadow: {
        enable: false,
      }
    },
    detectRetina: true,
  };

  if (!init) {
    return null;
  }

  // pointer-events-none ensures you can still click things under the background
  // z-[-2] pushes it behind the layout elements
  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="fixed inset-0 z-[-2] pointer-events-none"
    />
  );
}
