import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'

const SlideFadeDiv = styled.div`
    width: 100%;
    height: 100%;
    > .slide-fade-wrapper-content {
        width: 100%;
        > div {
            min-width: 100%;
            max-width: 100%;
                > div {
                    position: absolute;
                    box-sizing: border-box;
                    opacity: 0;
                    transition: .5s;
                    &.on {
                        opacity: 1;
                    }
            }
        }
    }

    .slide-fade-nav {
        display: flex;
        width: 100%;
        padding: 0 6px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        .page {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            >button {
                background-color:rgba(0,0,0,.3);
                width: 6px;
                height: 6px;
                border-radius: 50%;
                transition: .3s;
                &.on {
                    background-color: rgba(0,0,0);
                    transform: scale(calc(8/6));
                }
            }
        }
        .close, .arrow{
            button{
                padding: 14px;
                img {
                    width: 20px;
                }
            }
            
        }
    }
`

let positionTouchStart = 0;
let positionTouchMove = 0;

const SlideSwipe = (props) =>{

    const [activatedSlide, setActivatedSlide] = useState(0);


    const slideNext = () => {
        if ( props.children.length - 1 > activatedSlide ) {
            setActivatedSlide( activatedSlide + 1 );
        } else if ( props.onOverPage ) {
            props.onOverPage();
        }
        
    }

    const slidePrev = () => {
        if ( 0 < activatedSlide ) {
            setActivatedSlide( activatedSlide - 1 );
        }
    }

    useEffect(()=>{
        console.log(activatedSlide)
        document.querySelectorAll(".slide-fade-children-wrapper > div").forEach(
            (element)=>{
                element.setAttribute("aria-hidden", "true")
                element.setAttribute("tabindex", "")
            }
        )
        
        document.querySelectorAll(".slide-fade-children-wrapper > div")[activatedSlide].setAttribute("tabindex", "-1")
        document.querySelectorAll(".slide-fade-children-wrapper > div")[activatedSlide].setAttribute("aria-hidden", "false")
        document.querySelectorAll(".slide-fade-children-wrapper > div")[activatedSlide].focus()
    },[activatedSlide])
    

    if(activatedSlide > props.children.length - 1 ) {
        if( props.onOverPage ){
            props.onOverPage();
        }
    }


    return(
        <SlideFadeDiv className="slide-fade">
            <section 
                className="slide-fade-wrapper-content"
                onTouchStart={
                    (event)=>{
                        positionTouchStart = event.changedTouches[0].clientX
                    }
                    
                }
                onTouchMove={
                    (event)=>{
                        positionTouchMove = event.changedTouches[0].clientX
                    }
                }
                onTouchEnd = {
                    (event)=>{
                        positionTouchMove = event.changedTouches[0].clientX
                        if( positionTouchStart - positionTouchMove > 20) {
                            slideNext();
                        } else if ( positionTouchStart - positionTouchMove < -20 ){
                            slidePrev();
                        }
                        positionTouchMove = 0;
                        positionTouchStart = 0;
                    }
                }
            >
                <div className="slide-fade-children-wrapper">
                    {
                        props.children ?
                        props.children.map((element, index) => {
                            return React.cloneElement(element, {
                                className: activatedSlide === index ? 'on' : '',
                                key: index
                            });
                        })
                        : null
                    }
                </div>
            </section>
            <nav className="slide-fade-nav">
                {
                    props.buttonClose ?
                    <div className="close">
                        <button 
                            aria-label="닫기" 
                            onClick={props.buttonClose}
                        >
                            <img src="/image/icon/icon_close_circle_white.svg" alt="" />
                        </button>
                    </div>
                    : null
                }
                <div className="page">
                    {
                        props.children ?
                        props.children.map(
                            (element, index) => {
                                return(
                                    <button 
                                        onClick={
                                            ()=>{
                                                setActivatedSlide( index )
                                            }
                                        }
                                        key={index}
                                        aria-label={
                                            `${activatedSlide === index?"선택됨,":""} ${index+1}번째 슬라이드로 이동`
                                        }
                                        className={
                                            activatedSlide === index ? 'on' : ''
                                        }
                                    ></button>
                                )
                            }
                        ) 
                        : null
                    }
                </div>
                <div className="arrow" >
                    {
                        props.buttonPrev ?
                        <button aria-label="이전 슬라이드" onClick={slidePrev}>
                            <img src="/image/icon/icon_arrow_circle_left_white.svg" alt="" />
                        </button>
                        : null
                    }
                    {
                        props.buttonNext ?
                        <button aria-label="다음 슬라이드" onClick={slideNext}>
                            <img src="/image/icon/icon_arrow_circle_right_white.svg" alt="" />
                        </button>
                        : null
                    }
                </div>
            </nav>
        </SlideFadeDiv>
    )
}

export default SlideSwipe;