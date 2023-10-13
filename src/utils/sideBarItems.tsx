import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const sideBarItems = (role: string) => {
  const adminItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link href={"/admin/profile"}>Profile</Link>,
    },
  ];

  const superAdminItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link href={"/super-admin/profile"}>Profile</Link>,
    },
  ];

  const touristItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link href={"/tourist/profile"}>Profile</Link>,
    },
  ];

  if (role === "admin") {
    return adminItems;
  }
  if (role === "super_admin") return superAdminItems;
  if (role === "tourist") return touristItems;
};

export default sideBarItems;
