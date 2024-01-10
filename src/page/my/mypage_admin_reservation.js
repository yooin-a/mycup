import styled from '@emotion/styled'
import SubheaderMain from '../../component/common/subHeader'
import SelectBox from '../../component/input/select_common'
import InputTextLabel from '../../component/input/inputText_common'
import ButtonCommon from '../../component/button/button_common'
import Checkbox from '../../component/input/checkbox'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { ReactComponent as ArrowWhite } from "../../assets/icons/chevronRight.svg";
import { useState } from 'react'
import { useEffect } from 'react';

const MyPageAdminRVWrapper = styled.div`
    .button-show-ui-delete {
        display: none;
    }
    h2 {
        text-align: center;
        padding:12px 0 24px;
        border-bottom: 1px solid var(--sys-divider);
        margin-bottom: 24px;
        line-height: 1.3125rem;
    }
    .reservationForm {
        >ul{
            border-bottom: 1px solid var(--sys-divider);
            margin-bottom: 12px;
            li {
                >p {
                    padding:12px 0;
                    &.subTitle {
                        padding-top:24px
                    }
                    mark {
                        font-size: .9375rem;
                        color:var(--sys-error);
                        padding-left: 4px;
                    }
                }
                .infoText {
                    font-size: .8125rem;
                    color:var(--sys-secondary);
                    padding: 12px 0 25px;
                }
                .textAreaWrap {
                    position:relative;
                    
                    textarea {
                        border:0;
                        padding: 16px 20px;
                        border-radius: 10px;
                        background-color:#fff;
                        min-height: 240px;
                        overflow-y: auto;
                        &::placeholder {
                            color: color-mix(in srgb, var(--sys-primary) 30%, transparent);
                            font-size: .9375rem;
                            line-height: 1.3125rem
                        }
                    }
                    .bytes {
                        position: absolute;
                        bottom: 20px;
                        right: 20px;
                        font-size: .75rem;
                        color: color-mix(in srgb, var(--sys-primary) 30%, transparent);
                    }
                }
                .calendarWrap {
                    display: flex;
                    gap: 10px;
                    width: 100%;
                    >div {
                        width: 30%;
                        &:last-child {
                            width: 40%;
                        }
                    }
                }
                &.agreeListBox {
                    position: relative;
                    button {
                        position:absolute;
                        top:12px;
                        right: 0;
                        svg {
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                    >ul {
                        margin: 12px auto 0;
                        li {
                            color: #5a6979;
                            font-size: .9375rem;
                            line-height: 1.3125rem
                        }
                    }
                }
            }
        }
        .symptomList {
            border:0;
        }
        .symptomList > li {
            padding-bottom:12px;
            
            dl {
                background: rgba(255,255,255,.5);
                padding: 16px 20px;
                border-radius: 10px;
                margin-bottom: 24px;
                dt {
                    font-weight: 500;
                    margin-bottom: 10px;
                }
                dd {
                    font-size: .9375rem;
                    line-height: 1.3125rem;
                    color:var(--sys-secondary)
                }
            }
            .agreeChk {
                display: flex;
                margin-bottom: 24px;
                input{
                    margin-right: 10px;
                }
            }
        }
        .bottomBtn {
            display: flex;
            gap: 10px;
            padding-bottom: 48px;
        }
    }
`
const MyPageAdminReservation = () => {

    const [text, setText] = useState('');
    const [byteCount, setByteCount] = useState(0);
  
    const updateByteCounter = (event) => {
      const newText = event.target.value;
      const newByteCount = new Blob([newText]).size;
      
      setText(newText);
      setByteCount(newByteCount);
    };
    
    useEffect(() => {
        setAriaLabel();    
    }, []);

    return (
        <>
        <MyPageAdminRVWrapper>
            <SubheaderMain subTitle="LG 서비스 예약"></SubheaderMain>

            <div className="wrap">
                <h2>세척기에 운영에 불편함이 있으신가요?<br/>전문 서비스매니저가 찾아가서<br/>필요로 하시는 서비스를 제공해드립니다.</h2>
                <div className="reservationForm">
                    <ul aria-roledescription='text'>
                        <li>
                            <p>기기 선택<mark>*</mark></p>
                            <SelectBox>
                                <option value="" disabled selected>점검이 필요한 기기를 선택하세요</option>
                                <option value="">스타벅스 ABCDE지점_1번 세척기</option>
                                <option value="">스타벅스 ABCDE지점_2번 세척기</option>
                                <option value="">스타벅스 ABCDE지점_3번 세척기</option>
                                <option value="">스타벅스 ABCDE지점_4번 세척기</option>
                            </SelectBox>
                        </li>
                        <li>
                            <p className='subTitle'>예약자 정보</p>
                        </li>
                        <li>
                            <p>이름</p>
                            <InputTextLabel placeholder='{실명표기}'/>
                        </li>
                        <li>
                            <p>전화번호</p>
                            <InputTextLabel placeholder='{000-0000-0000}'/>
                        </li>
                        <li>
                            <p>주소</p>
                            <InputTextLabel placeholder='{세척기 설치 주소(도로명주소)}'/>
                            <div className='infoText'>내 정보와 다를 경우, <span style={{textDecoration:'underline'}}>고객센터</span>로 문의해주세요.</div>
                        </li>
                    </ul>

                    <ul className='symptomList'>
                        <li>
                            <p>기기증상 선택<mark>*</mark></p>
                            <SelectBox>
                                <option value="" disabled selected>점검이 필요한 기기를 선택하세요</option>
                                <option value="">스타벅스 ABCDE지점_1번 세척기</option>
                                <option value="">스타벅스 ABCDE지점_2번 세척기</option>
                                <option value="">스타벅스 ABCDE지점_3번 세척기</option>
                                <option value="">스타벅스 ABCDE지점_4번 세척기</option>
                            </SelectBox>
                        </li>
                        <li>
                            <p>증상 상세</p>
                            <div className='textAreaWrap'>
                                <textarea
                                    value={text}
                                    onChange={updateByteCounter}
                                    placeholder='기기의 이상 증상에 대해 알려주세요.&#10;(최대 500글자)'
                                />
                                <div className='bytes'>{byteCount}/1000 bytes</div>
                            </div>
                        </li>
                        <li>
                            <p>방문 희망일시 선택<mark>*</mark></p>
                            <div className='calendarWrap'>
                                <SelectBox>
                                    <option value="" disabled selected>월</option>
                                </SelectBox>                                
                                <SelectBox>
                                    <option value="" disabled selected>일</option>
                                </SelectBox>                                
                                <SelectBox>
                                    <option value="" disabled selected>시</option>
                                </SelectBox>                                
                            </div>
                        </li>
                        <li className='agreeListBox'>
                            <p>약관 동의<mark>*</mark></p>
                            <ButtonCommon size="small" color="white">전문보기 <ArrowWhite width="6.5"/></ButtonCommon>

                            <dl>
                                <dt>출장 서비스 예약 개인정보 수집 이용 동의</dt>
                                <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos illum harum impedit sint dolore reiciendis minima repellat? Consectetur sunt reiciendis vero accusamus sapiente et deleniti est. Animi culpa libero veniam.</dd>
                            </dl>
                            <div className="agreeChk">
                                <Checkbox/><p>동의합니다.</p>
                            </div>
                            <b>유의사항 안내</b>
                            <ul>
                                <li>· 출장점검료안내</li>
                                <li>· 유상/무상서비스 안내 등</li>
                            </ul>
                        </li>
                    </ul>
                    <div className='bottomBtn'>
                        <ButtonCommon color='white'>취소</ButtonCommon>    
                        <ButtonCommon>예약신청</ButtonCommon>    
                    </div>
                </div>

            </div>

        </MyPageAdminRVWrapper>
        </>
    );
}

export default MyPageAdminReservation;