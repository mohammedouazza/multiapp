import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function ContentComponent() {
    return (
        <Content
            className="site-layout-background"
            style={{
                margin: "24px 16px",
                padding: 24,
                height: window.innerHeight,
            }}
        >
            Content
        </Content>
    );
}

export default ContentComponent;
