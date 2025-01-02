import useMagicColor from "../../hooks/useMagicColor";
import "./MagicBox.scss";

const MagicBox = () => {
  const color = useMagicColor();
  return (
    <div
      className="magicBox"
      style={{ backgroundColor: color }}
      data-testid="magicBox"
    />

  );
};

export default MagicBox;
