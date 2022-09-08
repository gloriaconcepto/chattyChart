import React, { memo, Suspense } from "react";
import "./layout.scss";
const SideBarPage = React.lazy(() => import("./SideBar/index"));
const Layout = memo((props) => {
  const { children } = props;
  return (
    <div className="layout-wrapper">
      <div className="container">
        <div className="side-bar">
          <Suspense>
            <SideBarPage />
          </Suspense>
        </div>
        <div className="main-container">{children}</div>
      </div>
    </div>
  );
});

export default Layout;
