import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const sideBarItems = (role: string) => {
  const commonItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link href={`/${role}/profile`}>Profile</Link>,
    },
  ];

  const adminItems = [...commonItems];

  const superAdminItems = [...commonItems];

  const touristItems = [...commonItems];

  if (role === "admin") {
    return adminItems;
  }
  if (role === "super_admin") return superAdminItems;
  if (role === "tourist") return touristItems;
};

export default sideBarItems;
