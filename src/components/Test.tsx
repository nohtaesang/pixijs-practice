import { Application, Sprite } from "pixi.js";
import { useEffect, useRef } from "react";
import { useContextSelector } from "use-context-selector";
import { PixiContext } from "../contexts/PixiContext";

export const Test = () => {
  const containerRef = useContextSelector(PixiContext, (v) => v.containerRef);
  const pixiApplicationRef = useContextSelector(
    PixiContext,
    (v) => v.pixiApplicationRef
  );

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current?.appendChild(pixiApplicationRef.current.view);
  }, [containerRef]);

  return <div ref={containerRef}></div>;
};
