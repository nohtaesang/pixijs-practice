import { Application } from "pixi.js";
import { useRef, useMemo, RefObject, MutableRefObject, ReactNode } from "react";
import { createContext } from "use-context-selector";

const pixiApplication = new Application({
  antialias: true,
  autoDensity: true,
  resolution: window.devicePixelRatio,
  backgroundColor: 0x000000,
  backgroundAlpha: 0.5,
  width: 640,
  height: 640,
});

type PixiContextType = {
  pixiApplicationRef: MutableRefObject<Application>;
  containerRef: RefObject<HTMLDivElement>;
};

export const PixiContext = createContext<PixiContextType>(
  {} as PixiContextType
);

export const PixiProvider = ({ children }: { children: ReactNode }) => {
  const pixiApplicationRef = useRef(pixiApplication);
  pixiApplicationRef.current = pixiApplication;
  const containerRef = useRef<HTMLDivElement>(null);

  const value = useMemo(() => {
    return {
      pixiApplicationRef,
      containerRef,
    };
  }, []);

  return <PixiContext.Provider value={value}>{children}</PixiContext.Provider>;
};
