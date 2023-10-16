import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import logo from "../../assets/brand.png";
import type { MenuProps } from "antd";
import Link from "next/link";

import { Layout, Button, Avatar, Select, Dropdown, Menu } from "antd";
import Image from "next/image";
import { useGetProfileQuery } from "@/redux/api/features/user/userApi";

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
  const { data } = useGetProfileQuery({});
  const profile = data?.data;

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
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="1">
                  <Link href={"/"}>Landing Page</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href={`/${profile?.role}/profile`}>Profile</Link>
                </Menu.Item>
                <Menu.Item key="3">Log Out</Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <a
              className="ant-dropdown-link cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <Avatar size={48} src={profile?.image} />
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default TopBar;
