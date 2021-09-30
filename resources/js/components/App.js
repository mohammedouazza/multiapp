import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ArrowUpOutlined } from "@ant-design/icons";

import { Layout } from "antd";
import { BackTop } from "antd";

import SiderComponent from "./layout/SiderComponent";
import HeaderComponent from "./layout/HeaderComponent";
import ContentComponent from "./layout/ContentComponent";

const { Footer } = Layout;

const styleBackTop = {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#001529",
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
};

function App() {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Router>
            <Layout>
                <SiderComponent collapsed={collapsed} />
                <Layout className="site-layout">
                    <HeaderComponent collapsed={collapsed} toggle={toggle} />
                    <ContentComponent />
                    <Footer style={{ textAlign: "center" }}>
                        Multi app @{new Date().getFullYear()}, all rights
                        reserved
                    </Footer>
                </Layout>
                <BackTop>
                    <div style={styleBackTop}>
                        <ArrowUpOutlined size={25} />
                    </div>
                </BackTop>
            </Layout>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
