import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled'
import ButtonCommon from '../../component/button/button_common'
import SlideSwipe from '../../component/slide/slide_swipe'
import Checkbox from '../../component/input/checkbox'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import setMinHeightByScreen from '../../component/common/set_minheight_by_screen'


const WalkthroughMain = styled.main`
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: var(--sys-background);
  >section {
    width: 100%;
    height: 100%;
    .slide-swipe {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      min-height: 448px;
      padding-bottom: 61px;
      font-weight: 400;
      .slide-swipe-wrapper-content {
        > div {
            min-height: 366px;
          > div {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            p {
              font-size: 24px;
              line-height: 1.33;
              text-align: center;
            }
            img {
              display: block;
              width: 198px;
              margin: 0 auto;
            }
          }
        }

      }
    }
    >nav {
      button{
        margin-bottom: 32px;
      }
      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 8px;
        label {
          font-size: 15px;
          line-height: 1.33;
          font-weight: 500;
        }
      }
    }
  }



`

const Walkthrough = () => {
  let walkthroughWrapperRef = useRef(null)

  useEffect(()=>{
      setMinHeightByScreen(walkthroughWrapperRef);
  },[])

  const navigate = useNavigate();
  useEffect(()=>{
    setAriaLabel();
  },[])

  const [buttonCommonColor, setButtonCommonColor] = useState("white");
  const [buttonCommonText, setButtonCommonText] = useState("건너뛰기");
    return (
      <WalkthroughMain ref={walkthroughWrapperRef}>
        <section>
          <SlideSwipe 
              onLastSlide={()=>{
                setButtonCommonColor("black")
                setButtonCommonText("시작하기")
              }}
            >
            <div sal="true">
              <p role='text'>
                나와 지구를 위한 건강한 습관<br/>
                플라스틱 프리 라이프를<br/>
                시작해 보세요.
              </p>
              <img aria-hidden="true" src="/image/illust/illust_walkthrough_plant.png" alt="" />
            </div>
            <div sal="true">
              <p role='text'>
                간편하게 실천하는 텀블러 세척!<br/>
                에코 챌린지에 도전해볼까요?
              </p>
              <img aria-hidden="true" src="/image/illust/illust_walkthrough_mountain.png" alt="" />
            </div>
            <div sal="true">
              <p role='text'>
                환경을 위한 한 걸음<br/>
                오늘부터 마이컵과 함께해요.
              </p>
              <img aria-hidden="true" src="/image/illust/illust_walkthrough_earth.png" alt="" />
            </div>
          </SlideSwipe>
          <nav>
            <ButtonCommon 
              size="large"
              color={buttonCommonColor}
              onClick={
                  ()=>{
                    if( document.querySelector("#show-next-time").checked ){
                      alert("다음부터 보지 않기")
                    }
                    navigate("/home")
                  }
              }
            >
              { buttonCommonText }
            </ButtonCommon>
            <div className="checkbox-label">
              <Checkbox contentLabel="다음부터 보지 않기" inputId="show-next-time"/>
              <label htmlFor="show-next-time">
                다음부터 보지 않기
              </label>
            </div>

          </nav>
        </section>
      </WalkthroughMain>
    );
}

export default Walkthrough;