import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import logo from "../../assets/brand.png";
import type { MenuProps } from "antd";

import { Layout, Button, Avatar, Select, Dropdown } from "antd";
import Image from "next/image";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const { Header } = Layout;

const TopBar = ({ colorBgContainer, collapsed, setCollapsed }: any) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="flex justify-between items-center px-8">
        <div className="flex justify-between items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Image src={logo} alt="brand" height={40} width={100} />
        </div>
        <div className="flex justify-between items-center gap-6">
          <Select
            defaultValue="lucy"
            style={{ width: 220 }}
            onChange={handleChange}
            autoClearSearchValue={true}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Button>
              <NotificationOutlined />
            </Button>
          </Dropdown>
          <Avatar size={40} icon={<UserOutlined />} />
        </div>
      </div>
    </Header>
  );
};

export default TopBar;
