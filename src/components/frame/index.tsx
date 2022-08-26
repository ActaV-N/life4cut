import styled from "@emotion/styled";
import React from "react";

const StyledFrame = styled.div`
    display:flex;

    .arrow-container{
        width:7.5vw;
        height:calc(31vw * 1.5);

        display:flex;
        align-items:center;

        cursor:pointer;

        background:transparent;
        border:none;
        outline:none;

        .arrow{
            display:inline-block;

            background:#3e3e3e;
            
            width:100%;
            aspect-ratio:1;

            mask: url(/svg/ico_arrow.svg);
            -webkit-mask: url(/svg/ico_arrow.svg);

            mask-size:100%;

            &.arrow-right{
                transform-origin:center;
                transform:rotate(180deg);
            }
        }
    }

    .frame-container{
        width:31vw;
        aspect-ratio:1 / 1.5;

        display:flex;
        overflow:hidden;
        
        .frame-wrapper{
            width:100%;
            height:100%;

            flex:1 0 auto;

            figure{
                width:100%;
                height:100%;

                background-size:100%;
            }
        }
    }
`

const Frame = () => {
    return <StyledFrame>
        <button className="arrow-container">
            <i className="arrow arrow-left"></i>
        </button>
        <div className="frame-container">
            <div className="frame-wrapper">
                <figure style={{
                    backgroundImage:'url(images/frame_black.png)'
                }}>
                </figure>
            </div>
            <div className="frame-wrapper">
                <figure style={{
                    backgroundImage:'url(images/frame_orange.png)'
                }}>
                </figure>
            </div>
            <div className="frame-wrapper">
                <figure style={{
                    backgroundImage:'url(images/frame_white.png)'
                }}>
                </figure>
            </div>
        </div>
        <button className="arrow-container">
            <i className="arrow arrow-right"></i>
        </button>
    </StyledFrame>
};

export default Frame;