import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface LoaderProps {
  size: number;
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;
  return <Spin indicator={antIcon} />;
};
export default Loader;
