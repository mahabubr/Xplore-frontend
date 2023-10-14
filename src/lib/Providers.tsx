"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import { ConfigProvider } from "antd";
import theme from "@/app/theme/themeConfig";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;
