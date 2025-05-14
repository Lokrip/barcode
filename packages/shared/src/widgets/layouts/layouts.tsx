import { FC, PropsWithChildren } from "react";
import { AppLayout } from "./_ccp/app-layout";
import { Header } from "../header";

export const Layouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppLayout>
        <AppLayout.Header>
            <Header />
        </AppLayout.Header>

        <AppLayout.Content>
            {children}
        </AppLayout.Content>

        <AppLayout.Footer>
            footer
        </AppLayout.Footer>
    </AppLayout>
  );
};
