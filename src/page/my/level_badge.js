import styled from '@emotion/styled'
import HeaderButtonBack from '../../component/common/header_button_back'
import React, {useRef, useEffect} from 'react';
import ButtonShowRef from '../../component/button/button_show_ref'
import Tooltip from '../../component/common/tooltip'
import setAriaLabel from '../../component/accessibility/set_aria_label';

const LevelBadgeWrapper = styled.main`
    h3 {
        font-size: 16px;
        line-height: 1.3125;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .level-description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 34px 20px 40px;
        
        > article {
            color: var(--sys-secondary);
            h2 {
                font-weight: 700;
                font-size: 20px;
                line-height: 1.3;
                color: var(--sys-primary);
            }
            time {
                display: block;
                font-size: 12px;
                line-height: 1.1666;
                margin-bottom: 24px;
            }
            p {
                font-size: 13px;
                line-height: 1.3076;
            }
        }
        > img {
            display: block;
            width: 121px;
            height: auto;
        }
    }
    .level-activity {
        padding: 0 20px 40px;
        ul.activity {
            display: flex;
            flex-flow: column;
            gap: 10px;
            margin-bottom: 24px;
            li {
                display: flex;
                justify-content: space-between;
                background-color: var(--sys-on-primary);
                padding: 14.5px 20px;
                border-radius: 8px;
                line-height: 1.1875;
            }
        }
        .button-show-ref {
            justify-content: center;
            margin: 0 auto;
        }
        .list-qna {
            display: none;
            margin-top: 24px;
            color: var(--sys-secondary);
            font-size: 15px;
            &.show {
                display: block;
            }
            li {
                margin-bottom: 15px;
                h4, p {
                    display: flex;
                    span{
                        padding: 0 13px 0 10px;
                        min-width: 33px;
                        box-sizing: border-box;
                        font-size: 14px;
                        font-weight: 700;
                    }
                }
                h4 {
                    margin-bottom: 4px;
                }
            }
        }
    }
    .level-history {
        padding: 0 20px 65px;
        .headline-tooltip-wrapper {
            display: flex;
            align-items: center;
            gap: 4px;
            margin-bottom: 24px;
            h3 {
                margin-bottom: 0;
            }
        }
        ul {
            display: flex;
            flex-flow: column;
            gap: 24px;
            li {
                display: flex;
                align-items: center;
                gap: 20px;
                img {
                    display: block;
                    width: 100px;
                }
                h4 {
                    font-size: 16px;
                    line-height: calc(19/16);
                    font-weight: 700;
                    margin-bottom: 4px;
                }
                time {
                    display: block;
                    font-size: 12px;
                    line-height: calc(15/12);
                    color: var(--sys-secondary);
                }
            }
        }
        .history-blank {
            text-align: center;
            font-size: 17px;

            img {
                display: block;
                width: 100px;
                margin: 60px auto 48px;
            }
            
            h4 {
                font-weight: 600;
                margin-bottom: 16px;
                line-height: calc(20/17);
            }
            p {
                font-weight: 500;
                line-height: calc(22/17);
                color: var(--sys-secondary);
            }
        }
    }
`
const LevelBadge = ({ecoHistoryLength}) => {
    const targetShowRef = useRef(null)
    useEffect(()=>{
        setAriaLabel();
    },[])
    return(
        <LevelBadgeWrapper>
            <HeaderButtonBack headline="나의 에코레벨" link="/mypage_user"/>
            <section className="level-description">
                <article>
                    <h2>
                        Lv. 00
                    </h2>
                    <time role='text' aria-label='yyyy년 mm월 dd일 00시00분 기준'>yyyy-mm-dd 00:00 기준</time>
                    <p role='text'>
                        해당 레벨의 디스크립션<br/>최대 30자, 2줄
                    </p>
                </article>
                <img src="/image/my/myprofile_img.png" alt="" />
            </section>
            <section className="level-activity">
                <article>
                    <h3>
                        다음 레벨까지 필요한 활동
                    </h3>
                    <ul className="activity">
                        <li sal="true" tabIndex={0}>
                            <h4>세척 또는 콘텐츠 보기</h4>
                            <p>NN회</p>
                        </li>
                    </ul>
                    <ButtonShowRef
                        targetRef={targetShowRef}
                        defaultShow={false}
                    >
                        자세히 보기
                    </ButtonShowRef>
                    <ul className="list-qna" ref={targetShowRef}>
                        <li>
                            <h4 sal="true">
                                <span>Q</span> 레벨이란?
                            </h4>
                            <p sal="true">
                                <span>A</span>
                                세척하기, 이벤트 참여, 챌린지 참여/성공 등
                                마이컵에서의 활동에 따라 부여되는 등급입니다.
                            </p>
                        </li>
                        <li>
                            <h4 sal="true">
                                <span>Q</span> 레벨이 높으면 뭐가 좋은가요?
                            </h4>
                            <p sal="true">
                                <span>A</span>
                                레벨이 높아질수록 받을 수 있는 부가적인
                                혜택이 많아집니다. 다양한 콘텐츠가 계속 추가될 예정이니 기대해주세요.
                            </p>
                        </li>
                        <li>
                            <h4 sal="true">
                                <span>Q</span>레벨을 높이려면 어떻게 하나요?
                            </h4>
                            <p sal="true">
                                <span>A</span>
                                세척, 이벤트참여 등 다양한 활동을 통해 레벨을
                                올릴 수 있어요. 현재 레벨에서 다음 레벨로 올라가기 위한 활동을 안내해드리고 있으니 확인해보세요.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
            <section className="level-history">
                <article>
                    <div className="headline-tooltip-wrapper">
                        <h3>나의 에코 히스토리</h3>
                        <Tooltip 
                            content="검색 허용을 체크하면 일반사용자들이 내 세척기 설치장소를 확인할 수 있습니다."
                            align="left"
                        >
                        </Tooltip>
                    </div>
                    {
                        ecoHistoryLength?
                        <ul>
                        {
                            Array.from({ length: ecoHistoryLength }, (element, index) => (
                                <li key={index} sal="true" tabIndex={0}>
                                    <img src="/image/my/my_level.png" alt="" />
                                    <div>
                                        <h4>Lv. 00</h4>
                                        <time role='text' aria-label='yyyy년 mm월 dd일'>yyyy-mm-dd</time>
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                        :<div className="history-blank">
                            <img src="/image/my/blank_eco_history.png" alt="" />
                            <h4>
                                에코라이프를 시작하셨군요!
                            </h4>
                            <p role='text'>
                                다양한 활동을 통해 레벨을 올리고<br/>
                                나의 히스토리를 기록해보세요
                            </p>
                        </div>
                    }
                    
                </article>
            </section>
        </LevelBadgeWrapper>
    )
}

export default LevelBadge;