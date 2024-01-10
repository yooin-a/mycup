import React, { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled'

const SlideSwipeDiv = styled.div`
    width: 100%;
    > .slide-swipe-wrapper-content {
        width: 100%;
        overflow-x: hidden;
        > div {
            min-width: 100%;
            max-width: 100%;
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;
                > div {
                    min-width: 100%;
                    max-width: 100%;
            }
        }
    }

    .slide-swipe-nav {
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

let isSlideControlled = false;



const SlideSwipe = (props) =>{

    const [activatedSlide, setActivatedSlide] = useState(0);
    const [slidePosition, setSlidePosition] = useState(0);
    const [userPositionX, setUserPositionX] = useState(0);

    const animateSlide = useCallback(
        async ( pagePrev, pageCurrent ) => {
            const difference = (pageCurrent * 100) - (pagePrev * 100)
            const duration = 300;
            const maxTime = 30
            const latestUserPositionX = userPositionX
            let timeRepeat = 0;
            let timerAnimate = new Promise((resolve, reject)  => {
                let intervalAnimate = setInterval(
                    () => {
                        if( timeRepeat < maxTime ){
                            timeRepeat++;
                            setSlidePosition( slidePosition + ( (difference / maxTime) * timeRepeat ))
                            setUserPositionX( latestUserPositionX - ((latestUserPositionX / maxTime) * timeRepeat));
                        } else if ( timeRepeat >= maxTime ) {
                            setSlidePosition( (pageCurrent * 100) )
                            setUserPositionX(0);
                            clearInterval( intervalAnimate );
                            resolve("animateSlide end")
                        }
                    }, duration/maxTime
                );
            })
            if( props.children.length - 1 === pageCurrent) {
                if(props.onLastSlide){
                    props.onLastSlide();
                }
                
            }
            let result = await timerAnimate;
            return result;
        }, [props, slidePosition, userPositionX]
    )

    const setAttributeActivatedSlide = ( index )=>{
        const arrSlide = document.querySelector(".slide-swipe-wrapper-content > div").childNodes
        arrSlide.forEach((element)=>{
            element.setAttribute("aria-hidden", "true");
            if(element.childNodes){
                element.childNodes.forEach((element)=>{
                    element.setAttribute("aria-hidden", "true")
                })
            }
        })
        arrSlide[index].setAttribute("tabindex", "-1");
        arrSlide[index].setAttribute("aria-hidden", "false");
        if(arrSlide[index].childNodes){
            arrSlide[index].childNodes.forEach((element)=>{
                element.setAttribute("aria-hidden", "false")
            })
        }
      }

    const slideNext = () => {
        if ( props.children.length - 1 > activatedSlide ) {
            animateSlide( activatedSlide, activatedSlide + 1 ).then(
                ()=>{
                    
                    setAttributeActivatedSlide( activatedSlide + 1);
                    document.querySelector(".slide-swipe-wrapper-content > div").childNodes[activatedSlide + 1].focus()
                    setActivatedSlide( activatedSlide + 1 );
                }
            )
            
        } else {
            animateSlide( activatedSlide, activatedSlide )
        }
    }

    const slidePrev = () => {
        if ( 0 < activatedSlide ) {
            animateSlide( activatedSlide, activatedSlide - 1 ).then(
                ()=>{
                    setAttributeActivatedSlide( activatedSlide - 1 );
                    document.querySelector(".slide-swipe-wrapper-content > div").childNodes[activatedSlide -1 ].focus()
                    setActivatedSlide( activatedSlide - 1 );
                }
            )
            
        } else {
            animateSlide( activatedSlide, activatedSlide )
        }
    }

    useEffect(() => {
        if(props.changeAuto) {
            const timerChangeSlide = setInterval(
                ()=>{
                    if ( isSlideControlled === true ) {
                        clearInterval(timerChangeSlide);
                    }
                    if ( props.children.length - 1 > activatedSlide ) {
                        animateSlide( activatedSlide, activatedSlide + 1 )
                        setActivatedSlide( activatedSlide + 1 );
                    } else if ( props.children.length - 1 === activatedSlide ) {
                        animateSlide( activatedSlide, 0 )
                        setActivatedSlide( 0 );
                    }
                }, props.changeAuto
            );
            if ( isSlideControlled === true ) {
                clearInterval(timerChangeSlide);
            }
            return () => {
                clearInterval(timerChangeSlide);
            };
        }



      }, [activatedSlide, props, animateSlide]);

      useEffect(()=>{
        document.querySelector(".slide-swipe-wrapper-content > div").childNodes.forEach((element)=>{
            element.setAttribute("tabindex", "-1")
        })
        setAttributeActivatedSlide(0);
      },[])

    return(
        <SlideSwipeDiv className="slide-swipe">
            <section 
                className="slide-swipe-wrapper-content"
                onTouchStart={
                    (event)=>{
                        isSlideControlled = true;
                        positionTouchStart = event.changedTouches[0].clientX
                    }
                    
                }
                onTouchMove={
                    (event)=>{
                        positionTouchMove = event.changedTouches[0].clientX
                        if ( positionTouchStart - positionTouchMove < 180 && positionTouchStart - positionTouchMove > -180 ) {
                            setUserPositionX( positionTouchStart - positionTouchMove )
                        }
                        
                    }
                }
                onTouchEnd = {
                    (event)=>{
                        positionTouchMove = event.changedTouches[0].clientX
                        if( positionTouchStart - positionTouchMove > 20) {
                            slideNext();
                        } else if ( positionTouchStart - positionTouchMove < -20 ){
                            slidePrev();
                        } else {
                            animateSlide( activatedSlide, activatedSlide )
                            setActivatedSlide( activatedSlide )
                        }
                        positionTouchMove = 0;
                        positionTouchStart = 0;
                    }
                }
            >
                <div 
                    style={
                            {
                                position: "relative",
                                left: `calc( -${slidePosition}% - ${userPositionX}px )`
                            }
                        }
                >
                    {props.children}
                </div>
            </section>
            <nav className="slide-swipe-nav">
                {
                    props.buttonClose ?
                    <div className="close">
                        <button 
                            aria-label="닫기" 
                            onClick={props.buttonClose.onClick}
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
                                                isSlideControlled = true;
                                                animateSlide( activatedSlide, index ).then(
                                                        ()=>{
                                                            setActivatedSlide( index )
                                                            setAttributeActivatedSlide( index );
                                                            document.querySelector(".slide-swipe-wrapper-content > div").childNodes[index].focus()
                                                        }
                                                    )
                                                
                                                
                                            }
                                        }
                                        key={index}
                                        aria-label={
                                            `${index+1}번째 슬라이드로 이동 ${activatedSlide === index?", 현재 활성화된 슬라이드":""}`
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
                {
                    props.buttonNext ?
                    <div className="arrow">
                        <button aria-label="다음 슬라이드">
                            <img src="/image/icon/icon_arrow_circle_right_white.svg" alt="" />
                        </button>
                    </div>
                    : null
                }
            </nav>
        </SlideSwipeDiv>
    )
}

export default SlideSwipe;