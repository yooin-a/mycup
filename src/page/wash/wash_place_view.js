import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'
import PlaceListDetail from '../../component/wash/place_list_detail'
import RadioLabel from '../../component/input/radio_label'
import ButtonCommon from '../../component/button/button_common'

const WashMain = styled.div`
    .detailForm {
        border-top: 1px solid #cfd4e0;
        padding:24px 0 25px;
        h2 {
            font-weight: bold;
            margin-bottom: 12px;
        }
    }
    .cleanserChk {
        margin-top: 24px;
        >div {
            display: flex;
            padding-bottom: 25px;
            input {
                margin-bottom: auto;
            }
            p {
                span {
                    display: block;
                    margin-top:4px;
                    font-size: .8125rem;
                    line-height: 1.0625rem;
                    color:var(--sys-secondary);
                }
                mark {
                    margin-left: 8px;
                    &.blue {
                        color: var(--sys-sub);
                    }
                    &.red {
                        color: var(--sys-error);
                    }
                    &.gray {
                        color:var(--sys-secondary)
                    }
                }
            }
            &:last-child{
                padding-bottom: 0;
            }
        }
    }
    .detailInfo {
        p {
            font-size: .8125rem;
        }
        ul li {
            display: flex;
            justify-content: space-between;
            color:var(--sys-secondary);
            font-size: .8125rem;
            line-height: 1.0625rem;
            margin-top: 4px;
        }
        mark.red {
            color: var(--sys-error);
            font-size: .8125rem;
            line-height: 1.0625rem;
        }
    }
`

const Wash = () => {
    return (
        <WashMain>

            <Subheader subTitle='장소 상세 정보' />

            <section className="wrap">
                <PlaceListDetail
                    title='투썸플레이스대구삼성크리에이티브캠퍼스점'
                    address='부산광역시 강서구 녹산산단 382로 14번가길 10~29번지(송정동)'
                    distance='1.5 km'
                />

                <div className="cleanserChk detailForm">
                    <h2>세척기 선택 (총 NN 대 운영중)</h2>
                    <div>
                        <RadioLabel checked='checked'/>
                        <p>
                            1번 세척기<mark className='blue'>대기 0명</mark>
                            <span> 계산대 우측벽면</span>
                        </p>
                    </div>
                    <div>
                        <RadioLabel disabled=":disabled"/>
                        <p>
                            2번 세척기<mark className='red'>이용불가</mark>
                            <span> 계산대 우측벽면</span>
                        </p>
                    </div>
                    <div>
                        <RadioLabel/>
                        <p>
                            3번 세척기<mark className='gray'>대기 9+</mark>
                            <span> 계산대 우측벽면</span>
                        </p>
                    </div>
                </div>

                <div className="detailInfo detailForm">
                    <h2>이용가능시간</h2>
                    <p>매주 월요일 휴무</p>
                    <ul>
                        <li>평일<span>09:00 ~ 22:00</span></li>
                        <li>주말·공휴일<span>운영안함</span></li>
                    </ul>                    
                </div>

                <div className="detailInfo detailForm">
                    <h2>공지사항</h2>
                    <p>예: 크리스마스에는 정상운영합니다.</p>
                    <mark className="red">세척기를 선택해주세요.</mark>
                </div>
            </section>

            <div className="fixedButton">
                <ButtonCommon>여기서 세척하기</ButtonCommon>
            </div>

        </WashMain>
    )
}

export default Wash;