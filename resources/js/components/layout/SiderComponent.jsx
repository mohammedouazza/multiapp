import React from "react";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function SiderComponent({ collapsed }) {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div
                className="logo"
                style={{
                    height: 60,
                    color: "white",
                    padding: 12,
                    fontSize: 25,
                }}
            >
                {collapsed ? "MApp" : "Multi App"}
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[window.location.pathname]}
            >
                <Menu.Item key="/" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="/profile" icon={<UserOutlined />}>
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="/video-camera" icon={<VideoCameraOutlined />}>
                    <Link to="/video-camera">Video camera</Link>
                </Menu.Item>
                <Menu.Item key="/upload-file" icon={<UploadOutlined />}>
                    <Link to="/upload-file">Upload file</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default SiderComponent;
