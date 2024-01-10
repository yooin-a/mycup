import React,{useEffect} from 'react';
import styled from '@emotion/styled'
import Header from '../../component/common/header'
import Tabmenu from '../../component/common/tabmenu'
import ScrollContentWrapper from '../../component/scroll_content/scroll_content_wrapper'
import BottomNavigator from '../../component/common/bottom_navigator'
import SlideSwipe from '../../component/slide/slide_swipe'
import setAriaLabel from '../../component/accessibility/set_aria_label';

const HomeMain = styled.main`
  min-height: 100vh;
  background:no-repeat top/100% url(/image/home/background_home.png);
  .main-visual {
    padding-top:90px;
    margin-bottom: 20px;
    .title {
      font-size: 1.75rem;
      font-weight: 700;
      line-height:1.34;
      margin-bottom:28px;
      padding: 0 28px;
    }
    .slide-swipe {
      margin-top: -76px;
      >.slide-swipe-wrapper-content{
        padding-top:76px;
        >div{
          > div {
            padding: 0 20px;
            > button {
              width: 100%;
              box-shadow:2px 2px 2px 2px rgba(255,255,255,0.58) inset, 0 0 0 0 rgba(62, 198, 210, 0.13);
              background-color:color-mix(in srgb, var(--sys-on-primary) 50%, transparent);
              border-radius: 10px;
              padding: 13px 16px 16px;
              margin-bottom:20px;
              backdrop-filter: blur(24px);
              >div {
                display:flex;
                justify-content: space-between;
                position:relative;
                align-items: flex-end;
                > p {
                  display: flex;
                  flex-flow: column;
                  justify-content: center;
                  min-height: 100%;
                  min-height: 69px;
                  text-align: left;
                  white-space: normal;
                  word-break: break-all;
                  line-height: 1.25;
                  span {
                    color: var(--sys-secondary);
                    margin-top: 12px;
                    font-size: 13px;
                    line-height: 1.3;
                    font-weight: 500;
                  }
                }

                > div {
                  position: relative;
                  display: flex;
                  flex-flow: column;
                  align-items: flex-end;
                  max-width: 132px;
                  margin-left:10px;
                  margin-top: -97px;
                  > img {
                    display:block;
                    width: 100%;
                    min-width: 132px;
                    height: auto;
                  }
                  > .fake-button {
                    width: 100%;
                    border-radius:50rem;
                    
                    background-color: var(--sys-primary);
                    color: var(--sys-on-primary);
                    font-size: 14px;
                    line-height: 1.29;
                    font-weight:600;
                    padding: 6.5px 19.5px;
                  }
                }
              }
            }
          }
        }
      }
      .slide-swipe-nav {
        > button {
          width: 4px;
          height: 4px;
        }
      }
    }
  }

  /* challenge */
  .challenge {
    padding: 0 20px;
    .subtitle {
      margin-bottom: 8px;
    }
  } 
  .challenge-list {
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: flex-start;
    padding: 10px 10px 10px 20px;
    border-radius: 20px;
    background-color: var(--sys-on-primary);
    margin-bottom: 11px;
    backdrop-filter: blur(50px);
    border: solid 2px rgba(255, 255, 255, 0.4);
    > div {
      display:flex;
      flex-direction: column;
      mark {
        font-size: 12px;
        line-height: 17px;
        font-weight: bold;
        margin-bottom: 19px;
        &.blue {color:#4f97f5}
        &.green {color:#19dbba}
      }
      .dday {color:var(--sys-secondary);}
      b {
        color:var(--sys-primary);
        font-size: 28px;
        margin-left: 8px;
        span {
          font-size: 20px;
          margin-left: 4px;
        }
      }
    }
  }
`

const Home = () => {
    useEffect(()=>{
      setAriaLabel();
    },[])
    return (
      <HomeMain>
        <Header fixed={true}/>

        {/* main-visual */}
        <div className="main-visual">
          <div sal="true" tabIndex={0}>
            <p className="title">반가워요, <br/>DUOBO님!</p>
          </div>
          
          <SlideSwipe changeAuto={2000}>
            <div>
              <button onClick={()=>{
                alert("오시기만을 기다렸어요 우리 오늘부터 1일!❤️")
              }}>
                <div>
                  <p>오시기만을 기다렸어요<br />우리 오늘부터 1일</p>
                  <div>
                    <img src="/image/home/slide_home_banner_1.png" alt="" />
                    <div className="fake-button">첫 방문 선물 받기</div>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button onClick={()=>{
                alert("배너 타이틀 입력 2줄로 출력됩니다.")
              }}>
                <div>
                  <p>
                    배너 타이틀 입력<br />2줄로 출력됩니다.
                    <span aria-label="2023년 10월 31일부터 2023년 11월 30일까지">
                      23.10.31 ~ 23.11.30
                    </span>
                  </p>

                  <div>
                    <img src="/image/home/slide_home_banner_2.png" alt="" />
                  </div>
                </div>
              </button>
            </div>
          </SlideSwipe>
        </div>
        {/* //main-visual */}

        {/* tabmenu */}
        <div className="tab">
          <Tabmenu menu={
            {
              name:"keyword",
              list: [
                {
                  value: "all",
                  id: "keyword-all",
                  label: "전체",
                  checked: true
                },
                {
                  value: "trend",
                  id: "keyword-trend",
                  label: "#트랜드"
                },
                {
                  value: "game",
                  id: "keyword-game",
                label: "#게임"
                },
                {
                  value: "environmental",
                  id: "keyword-environmental",
                  label: "#함께하는 환경보호"
                },
                {
                  value: "eco",
                  id: "keyword-eco",
                  label: "#친환경"
                }
              ]
            }
          } />
          <ScrollContentWrapper />
        </div>{/* //tabmenu */}

        {/* challenge */}
        <div className="challenge">
          <h2 className="subtitle">함께해요, 마이커비</h2>

          <a href="#!" className="challenge-list" sal="true">
            <div>
              <mark className='blue'>도전 가능</mark>
              <p>한달 걷기 챌린지</p>
              <p className='dday'>종료까지<b>NN<span>일</span></b></p>
            </div>
            <img src="/image/home/thumb_challenge_img1.png" alt="" />
          </a>
          <a href="#!" className="challenge-list" sal="true">
            <div>
              <mark className='green'>도전 중</mark>
              <p>텀블러 세척왕은 누구?</p>
              <p className='dday'>종료까지<b>NN<span>일</span></b></p>
            </div>
            <img src="/image/home/thumb_challenge_img2.png" alt="" />
          </a>

        </div>
        {/* //challenge */}

        <BottomNavigator location="home" />
      </HomeMain>
    );
}

export default Home;