import React from "react";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function SiderComponent({ collapsed }) {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Profile
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    Video camera
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    Upload file
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default SiderComponent;
