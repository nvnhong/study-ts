import { Colors } from "../../styles/colors";

type Props = {
  color: Colors;
};

export const Text = ({ color }: Props) => {
  return <div style={{ backgroundColor: color }}></div>;
};

export default Text;
