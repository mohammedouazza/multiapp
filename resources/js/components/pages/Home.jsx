import React from "react";
import { Carousel, Image } from "antd";
import SunFlower from "../../../images/sunflower.jpg";
import JustLive from "../../../images/justlive.jpg";
import Share from "../../../images/share.jpg";
import DoSomethingGreat from "../../../images/do-something-great.jpg";

const contentStyle = {
    height: "500px",
    width: window.innerWidth,
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79",
};
function Home() {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <Image src={SunFlower} style={contentStyle} />
                </div>
                <div>
                    <Image src={JustLive} style={contentStyle} />
                </div>
                <div>
                    <Image src={DoSomethingGreat} style={contentStyle} />
                </div>
                <div>
                    <Image src={Share} style={contentStyle} />
                </div>
            </Carousel>
        </div>
    );
}

export default Home;
