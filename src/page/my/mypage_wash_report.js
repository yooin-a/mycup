import React,{useRef, useState} from 'react';
import styled from '@emotion/styled'
import HeaderButtonBack from '../../component/common/header_button_back'
import ButtonCommon from '../../component/button/button_common'
import ButtonShowRef from '../../component/button/button_show_ref'
import MessageBox from '../../component/popup/message_box'
import Calendar from '../../component/common/calendar'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';

const MyPageWashReportWrapper = styled.main`
    h2 {
        font-size: 16px;
        line-height: calc(19/16);
        font-weight: 700;
    }
    .carbon-wrapper {
        padding-top: 12px;
        padding-bottom: 24px;
        border-bottom: 1px solid var(--sys-divider);
        h2 {
            margin-left: 20px;
        }
        .reduction-box {
            margin: 12px 20px 18px;
            border-radius: 10px;
            background-color: var(--sys-on-primary);
            padding: 20px 0 27px;
            > nav {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2px;
                margin-bottom: 22px;
                button {
                    display: flex;
                }
            }
            > article {
                display: flex;
                align-items: center;
                justify-content: center;
                > div {
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    width: 50%;
                    gap: 8px;
                    font-size: 20px;
                    line-height: calc(24/20);
                    border-right: 1px solid var(--sys-divider);
                    &:last-of-type {
                        border: none;
                    }
                    > span {
                        font-size: 16px;
                        line-height: calc(19/16);
                    }
                }
            }
        }
        > p {
            text-align: center;
            color: var(--sys-secondary);
            font-size: 13px;
            line-height: calc(17/13);
        }

    }
    .history-wrapper {
        padding: 24px 20px;
        >div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        > nav {
            display: none;
            padding-top: 4px;
            padding-bottom: 8px;
            &.show{
                display: block;
            }
            > article {
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                gap: 13px;
                font-weight: 600;
                margin-bottom: 12px;
                span {
                    font-size: 17px;
                    line-height: calc(21/17);
                }
                button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 15px;
                    line-height: calc(21/15);
                    padding: 12px;
                }
            }
        }
        > .list-history {
            > li {
                    font-size: 15px;
                    line-height: calc(21/15);
                    font-weight:  500;
                    padding: 24px 0;
                    border-bottom: 1px solid var(--sys-divider);
                    &:last-of-type {
                        border: none;
                    }
                > div {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 16px;
                    color: var(--sys-secondary);
                    p {
                        display: flex;
                        gap: 8px;
                        font-size: 13px;
                        line-height: calc(17/13);
                        font-weight: 400;
                    }
                }
                > h3 {
                    margin-bottom: 4px;
                }
            }
        }
    }
    .announce {
        text-align: center;
        color: var(--sys-secondary);
        font-size: 15px;
        line-height: calc(25/15);
        margin-top: 13.5px;
    }
`
const MyPageWashReport = () => {
    const [displayMessageBoxCalendar, setDisplayMessageBoxCalendar] = useState(false);
    const targetShowRef = useRef(null)

    useEffect(()=>{
        setAriaLabel();
      },[])

    return(
        <MyPageWashReportWrapper>
            <HeaderButtonBack headline="세척 리포트" link="/mypage_user"/>
            <section>
                <article className="carbon-wrapper">
                    <h2>
                        나의 탄소 저감량
                    </h2>
                    <section className="reduction-box">
                        <nav>
                            <button>
                                <img src="/image/icon/icon_arrow_left_gray.svg" alt="이전달" />
                            </button>
                            <time>
                                2023년 9월
                            </time>
                            <button>
                                <img src="/image/icon/icon_arrow_right_gray.svg" alt="다음달" />
                            </button>
                        </nav>
                        <article>
                            <div sal="true" tabIndex={0}>
                                <img src="/image/icon/icon_cup_wash.svg" alt="세척 횟수" />
                                <p>
                                    NN
                                </p>
                                
                            </div>
                            <div sal="true" tabIndex={0}>
                                <img src="/image/icon/icon_co2.svg" alt="탄소 저감량" />
                                <p>
                                    N.NN <span>g</span>
                                </p>
                                
                            </div>
                        </article>
                    </section>
                    <p>
                        해수면 상승을 늦추는 데 도움을 주었어요.
                    </p>
                </article>
                <article className="history-wrapper">
                    <div>
                        <h2>
                            나의 탄소 저감량
                        </h2>
                        <ButtonShowRef 
                            targetRef={targetShowRef}
                            defaultShow={false}
                        >
                            최근 30일, 최신순
                        </ButtonShowRef>
                    </div>
                    <nav ref={targetShowRef}>
                        <article>
                            <ButtonCommon
                                color="white" 
                                size="large"
                                onClick={()=>{
                                    setDisplayMessageBoxCalendar(true)
                                }}
                            >
                                <p aria-label="2023년 05월 08일">2023-05-08</p>
                                <img src="/image/icon/icon_calendar_stroke_black.svg" alt="" />
                            </ButtonCommon>
                            <span>
                                ~
                            </span>
                            <ButtonCommon aria-label="2023년 05월 08일"
                                color="white" 
                                size="large"
                                onClick={()=>{
                                    setDisplayMessageBoxCalendar(true)
                                }}
                            >
                                <p aria-label="2023년 05월 08일">2023-05-08</p>
                                <img src="/image/icon/icon_calendar_stroke_black.svg" alt="" />
                            </ButtonCommon>
                        </article>
                        <ButtonCommon
                            color="black" 
                            size="large"
                            onClick={()=>{
                                alert("button.button-show-ref에 설정 기간 표시, 설정 기간에 해당하는 히스토리를 하단에 list up")
                            }}
                        >
                            조회
                        </ButtonCommon>
                    </nav>
                    <ul className="list-history">
                        <li>
                            <div>
                                <div aria-label='2023년 08월 31일 15시50분02초'tabIndex={0}>
                                    <p aria-hidden="true">
                                        2023-08-31
                                        <span>
                                            15:59:02
                                        </span>
                                    </p>
                                </div>

                                <p>
                                    &#123;상태값&#125;
                                </p>
                            </div>
                            <h3>
                                세척코스명
                            </h3>
                            <p>
                                장소이름이름이름이름이름이름 (최대 20자)
                            </p>
                        </li>
                        <li>
                            <div>
                                <div aria-label='2023년 08월 31일 15시50분02초' tabIndex={0}>
                                    <p aria-hidden="true">
                                        2023-08-31
                                        <span>
                                            15:59:02
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    세척 완료
                                </p>
                            </div>
                            <h3>
                                꼼꼼세척
                            </h3>
                            <p>
                                스타벅스 서울대전대구부산광주제주전주점
                            </p>
                        </li>
                        <li>
                            <div>
                                <div aria-label='2023년 08월 31일 15시50분02초' tabIndex={0}>
                                    <p aria-hidden="true">
                                        2023-08-31
                                        <span>
                                            15:59:02
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    세척 중단
                                </p>
                            </div>
                            <h3>
                                세척코스명
                            </h3>
                            <p>
                                장소이름이름이름이름이름이름 (최대 20자)
                            </p>
                        </li>
                        <li>
                            <div>
                                <div aria-label='2023년 08월 31일 15시50분02초' tabIndex={0}>
                                    <p aria-hidden="true">
                                        2023-08-31
                                        <span>
                                            15:59:02
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    줄서기 취소
                                </p>
                            </div>
                            <h3>
                                세척코스명
                            </h3>
                            <p>
                                장소이름이름이름이름이름이름 (최대 20자)
                            </p>
                        </li>
                        <li>
                            <div>
                                <div aria-label='2023년 08월 31일 15시50분02초' tabIndex={0}>
                                    <p aria-hidden="true">
                                        2023-08-31
                                        <span>
                                            15:59:02
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    세척 취소됨
                                </p>
                            </div>
                            <h3>
                                세척코스명
                            </h3>
                            <p>
                                장소이름이름이름이름이름이름 (최대 20자)
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
            <MessageBox
                content={
                    <>
                        <Calendar/>
                        <p className="announce">
                            최대 180일 전까지 조회 가능합니다.
                        </p>
                    </>
                    
                }
                button={
                    <>
                        <ButtonCommon 
                            size="large" 
                            color="gray"
                            onClick={
                                ()=>{
                                    setDisplayMessageBoxCalendar(false)
                                }
                            }
                        >
                            취소
                        </ButtonCommon>
                        <ButtonCommon 
                            size="large"
                            color="black"
                            onClick={
                                ()=>{
                                    alert("적용하기")
                                    setDisplayMessageBoxCalendar(false)
                                }
                            }
                        >
                            적용하기
                        </ButtonCommon>
                    </>

                }
                display={displayMessageBoxCalendar}
            />
        </MyPageWashReportWrapper>
    )
}

export default MyPageWashReport;