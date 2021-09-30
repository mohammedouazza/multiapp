import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import ProfileComponent from "../pages/ProfileComponent";
import VideoCameraComponent from "../pages/VideoCameraComponent";
import Home from "../pages/Home";
import UploadFileComponent from "../pages/UploadFileComponent";

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
            <Switch>
                <Route path="/profile">
                    <ProfileComponent />
                </Route>
                <Route path="/video-camera">
                    <VideoCameraComponent />
                </Route>
                <Route path="/upload-file">
                    <UploadFileComponent />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Content>
    );
}

export default ContentComponent;
