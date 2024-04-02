import { ConfigProvider, App } from "antd";
import { PropsWithChildren } from "react";
import { StyleProvider } from "@ant-design/cssinjs";

export const AntDesignProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#0685AA",
            borderRadius: 4,
          },
          components: {
            Layout: {
              headerBg: "#60bcc4",
              lightSiderBg: "#f0f9ff",
              lightTriggerBg: "#11acda",
              lightTriggerColor: "#FFF",
            },
            Tree: {
              directoryNodeSelectedBg: "#bae6fd",
              directoryNodeSelectedColor: "#333",
              titleHeight: 32,
            },
            Menu: {
              colorIcon: "#0685AA",
              fontSize: 14,
              itemSelectedBg: "#bae6fd",
              itemBg: "#f0f9ff",
            },
            Button: {
              colorPrimary: "#11acda",
            },
            Steps: {
              descriptionMaxWidth: 1000,
            },
            Checkbox: {
              colorBgContainerDisabled: "#11acda",
              colorTextDisabled: "#FFF",
              
            },
          },
        }}
      >
        <App>{children}</App>
      </ConfigProvider>
    </StyleProvider>
  );
};
