// const clampy: Sprite = Sprite.from("clampy.png");
import { Graphics } from "pixi.js";
import { useContextSelector } from "use-context-selector";
import { PixiContext } from "../contexts/PixiContext";

// clampy.anchor.set(0.5);

// clampy.x = app.screen.width / 2;
// clampy.y = app.screen.height / 2;

// app.stage.addChild(clampy);
let zIndex = 0;
export const AddSprite = () => {
  const pixiApplicationRef = useContextSelector(
    PixiContext,
    (v) => v.pixiApplicationRef
  );

  const handleClickAddSprite = () => {
    if (!pixiApplicationRef.current) {
      return;
    }
    const { width, height } = pixiApplicationRef.current.screen;
    const newGraphics = new Graphics();
    const randomColor = Math.floor(Math.random() * 16777215);

    newGraphics.lineStyle(10, randomColor, 1);
    newGraphics.beginFill(randomColor, 0.5);
    newGraphics.drawRect(
      Math.random() * width,
      Math.random() * height,
      100,
      100
    );
    newGraphics.zIndex = zIndex;
    zIndex = zIndex - 1;
    newGraphics.endFill();

    pixiApplicationRef.current.stage.addChild(newGraphics);
    pixiApplicationRef.current.stage.sortChildren();
  };

  return (
    <div>
      <button onClick={handleClickAddSprite}>Add sprite</button>
    </div>
  );
};
