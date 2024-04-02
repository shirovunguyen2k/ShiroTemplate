import { PropsWithChildren } from "react";

import { AntDesignProvider } from "./ant-design";
import { ReactQueryProvider } from "./react-query";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <AntDesignProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </AntDesignProvider>
  );
};
