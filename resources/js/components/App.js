import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Layout } from "antd";
import SiderComponent from "./layout/SiderComponent";
import HeaderComponent from "./layout/HeaderComponent";
import ContentComponent from "./layout/ContentComponent";

const { Footer } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout>
            <SiderComponent collapsed={collapsed} />
            <Layout className="site-layout">
                <HeaderComponent collapsed={collapsed} toggle={toggle} />
                <ContentComponent />
                <Footer style={{ textAlign: "center" }}>
                    Multi app @{new Date().getFullYear()}, all rights reserved
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
