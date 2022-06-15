import React, { Component } from "react";
import Slider from "react-slick";
import A from "./img/완전좋아.png";
import B from "./img/기분최고.png";
import C from "./img/평온해.png";
import D from "./img/그저그래.png";
import E from "./img/걱정돼.png";
import F from "./img/설레.png";
import G from "./img/피곤해.png";
import H from "./img/짜증나.png";
import I from "./img/우울해.png";
import styled from "styled-components";





function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            speed: 500,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3,
                        arrows: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        slide: 'img'
                    }
                }
            ]
        };
        return (
            <>
                <Slider {...settings}>
                    <label>
                        <MoodImg src={A} />
                        <input type="radio" name/>
                    </label>


                    <MoodImg src={B} />
                    <MoodImg src={C} />
                    <MoodImg src={D} />
                    <MoodImg src={E} />
                    <MoodImg src={F} />
                    <MoodImg src={G} />
                    <MoodImg src={H} />
                    <MoodImg src={I} />
                </Slider>
            </>
        );
    }
}

const MoodImg = styled.img`
max-width: 90px;
`;