import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

const StyledFrame = styled.div`
    display:flex;

    .arrow-container{
        width:7.5vw;
        min-width:96px;

        height:calc(31vw * 1.5);
        min-height:calc(396px * 1.5);

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

            transition: background-color .15s cubic-bezier(0.37, 0, 0.63, 1);

            &.arrow-right{
                transform-origin:center;
                transform:rotate(180deg);
            }
        }
        &:disabled .arrow {
            background:#ddd;
        }
    }

    .frame-container{
        width:31vw;
        min-width:396px;
        aspect-ratio:1 / 1.5;
        
        overflow:hidden;
        
        .frames-wrapper{
            display:flex;
            height:100%;
            
            transition:transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);

            .frame-wrapper{
                width:100%;
                height:100%;
    
                flex:1 0 auto;
    
                figure{
                    width:100%;
                    height:100%;
    
                    background-size:100%;
                    background-repeat:no-repeat;
                }
            }
        }
    }
`

const Frame = () => {
    const [frameIndex, setFrameIndex] = useState<number>(0);
    const framesWrapperRef = useRef<HTMLDivElement>(null);

    const setFrameWrapperPos = () => {
        const wrapper = framesWrapperRef.current

        if(wrapper){
            const moveTo = document.body.clientWidth <= 1280 ? `${-396 * frameIndex}px` : `${-31 * frameIndex}vw`
            wrapper.style.transform = `translate(${moveTo}, 0)`;
        }
    }

    useEffect(() => {
        window.addEventListener('resize', setFrameWrapperPos);

        return () => {
            window.removeEventListener('resize', setFrameWrapperPos);
        }
    }, [])

    useEffect(() => {
        setFrameWrapperPos();
    }, [frameIndex])

    const handleFrameIndex = (dir: number) => {
        let newFrameIndex = frameIndex + dir;
        if(newFrameIndex === -1){
            newFrameIndex = 0;
        }

        if(newFrameIndex === 3){
            newFrameIndex = 2;
        }

        setFrameIndex(newFrameIndex);
    }

    return <StyledFrame>
        <button className="arrow-container" disabled={frameIndex === 0} onClick={() => handleFrameIndex(-1)}>
            <i className="arrow arrow-left"></i>
        </button>
        <div className="frame-container">
            <div className="frames-wrapper" ref={framesWrapperRef}>
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
        </div>
        <button className="arrow-container" disabled={frameIndex === 2} onClick={() => handleFrameIndex(1)}>
            <i className="arrow arrow-right"></i>
        </button>
    </StyledFrame>
};

export default Frame;