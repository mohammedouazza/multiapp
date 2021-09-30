import React, { useRef, useState } from "react";
import { Button, Image, Switch } from "antd";
import Webcam from "react-webcam";
import { CameraOutlined } from "@ant-design/icons";
import "./exemple.css";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
    borderRadius: 20,
};

function VideoCameraComponent() {
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState([]);
    const [audio, setAudio] = useState(false);

    const capture = () => {
        setImageSrc([...imageSrc, webcamRef.current.getScreenshot()]);
    };
    //console.log(imageSrc);
    const toggleAudio = () => {
        setAudio(!audio);
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Video Camera</h1>
            <br />
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={"100%"}
                videoConstraints={videoConstraints}
            />
            <div style={{ textAlign: "center" }}>
                <Button
                    type="primary"
                    onClick={capture}
                    icon={<CameraOutlined />}
                    size={"large"}
                    shape="round"
                    style={{ marginRight: 10 }}
                >
                    Capturer
                </Button>
                <Switch
                    checkedChildren="Audio activé"
                    unCheckedChildren="Audio désactivé"
                    checked={audio}
                    onClick={toggleAudio}
                />
            </div>
            <br />
            {imageSrc.length != 0 && (
                <h3 style={{ textAlign: "center" }}>Images</h3>
            )}
            <div style={{ maxWidth: 1000, overflow: "auto" }}>
                <div className="carImage">
                    {imageSrc.map((imgSrc, idx) => (
                        <Image
                            key={idx}
                            src={imgSrc}
                            style={{
                                maxWidth: 400,
                                padding: 12,
                                borderRadius: 20,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VideoCameraComponent;
