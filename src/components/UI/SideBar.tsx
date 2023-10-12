import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideBar = ({ collapsed }: { collapsed: boolean }) => {
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];

  return (
    <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        className="p-2"
      />
    </Sider>
  );
};

export default SideBar;
