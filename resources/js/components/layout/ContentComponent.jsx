import React, { useState } from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import ProfileComponent from "../pages/ProfileComponent";
import VideoCameraComponent from "../pages/VideoCameraComponent";
import Home from "../pages/Home";
import UploadFileComponent from "../pages/UploadFileComponent";
//import HomeCover from "../../../images/covers/home.webp";

const { Content } = Layout;

function ContentComponent() {
    const [contentHeight, setContentHeight] = useState(window.innerHeight);

    window.onresize = () => {
        setContentHeight(window.innerHeight);
    };
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                minHeight: contentHeight,
                /*backgroundImage: `url(${HomeCover})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",*/
                backgroundColor: "#d5d5d5",
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
