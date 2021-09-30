import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

function HeaderComponent({ collapsed, toggle }) {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                    className: "trigger",
                    style: { color: "white", padding: 12, fontSize: 25 },
                    onClick: toggle,
                }
            )}
        </Header>
    );
}

export default HeaderComponent;
