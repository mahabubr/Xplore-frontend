import { Spin } from "antd";

const loading = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Spin size="large" />
    </div>
  );
};

export default loading;
