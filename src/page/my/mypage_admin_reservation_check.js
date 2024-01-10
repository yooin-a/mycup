import styled from '@emotion/styled'
import SubheaderMain from '../../component/common/subHeader'
import SelectBox from '../../component/input/select_common'
import ButtonCommon from '../../component/button/button_common'
import Checkbox from '../../component/input/checkbox'
import RadioLabel from '../../component/input/radio_label'
import InputTextLabel from '../../component/input/inputText_common'

const MyPageAdminRVWrapper = styled.div`
    .button-show-ui-delete {
        display: none;
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
                }
                
                >textarea {
                    border:0;
                    padding: 16px 20px;
                    border-radius: 10px;
                    background-color:#fff;
                    min-height: 100px;
                    overflow-y: auto;
                    &::placeholder {
                        color: color-mix(in srgb, var(--sys-primary) 30%, transparent);
                        font-size: .9375rem;
                        line-height: 1.3125rem
                    }
                }    
            }
        }
        .bottomBtn {
            display: flex;
            gap: 10px;
            padding-bottom: 48px;
        }
    }
    .scheduleForm {
        padding-bottom: 12px;
        >li{
            display:flex;
            align-items: center;
            margin-bottom: 12px;
            >div {
                display:flex;
                align-items: center;
                justify-content: space-between;
                gap :10px;                
                >div {
                    gap:0
                }
                &.fir {
                    flex-shrink:0;
                    width: 70px;
                    justify-content:flex-start;
                }
                &.last {
                    width: 100%;
                    justify-content: flex-start;;
                }
                &:last-child {
                    margin-left: auto;
                }
                &.input100{
                    width: 100%;
                    div {
                        width:100%;
                    }
                }
            }
            
            &.dateList {
                justify-content: space-evenly;
                >div {
                    display:block;
                    margin:0 auto;
                    width: 100%;
                }
                >span {
                    width: 50px;
                    text-align: center;
                }
            }
        

        }
    }
`
const MyPageAdminReservation = () => {

    return (
        <>
        <MyPageAdminRVWrapper>
            <SubheaderMain subTitle="이용 가능 시간"></SubheaderMain>

            <div className="wrap">
                <div className="reservationForm">
                    <ul aria-roledescription='text'>
                        <li>
                            <p>휴무일</p>
                            <ul className="scheduleForm">
                                <li>
                                    <div className='fir'>
                                        <RadioLabel shape='circle'/>매 주
                                    </div>
                                    <div>
                                        <SelectBox>
                                            <option value="" disabled>휴무일을 선택하세요</option>
                                            <option value="" selected>매주 월요일</option>
                                        </SelectBox>
                                    </div>
                                </li>
                                <li>
                                    <div className='fir'>
                                        <RadioLabel shape='circle'/>격주                                        
                                    </div>
                                    <div>
                                        <SelectBox>
                                            <option value="" disabled>격주를 선택하세요</option>
                                            <option value="" selected>매주 둘째 주</option>
                                        </SelectBox>
                                        <SelectBox>
                                            <option value="" disabled>요일을 선택하세요</option>
                                            <option value="" selected>월요일</option>
                                        </SelectBox>
                                    </div>
                                </li>
                                <li>
                                    <div className='fir'>
                                        <RadioLabel shape='circle'/>기타
                                    </div>
                                    <div className='input100'>
                                        <InputTextLabel placeholder='직접입력(최대 10글자)'/>
                                    </div>
                                </li>
                                <li>
                                    <div className='last'>
                                        <RadioLabel shape='circle'/>
                                        <p>휴일없음</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <p>운영일</p>
                            <ul className="scheduleForm">
                                <li>
                                    <div>
                                        평일
                                    </div>
                                    <div>
                                        <Checkbox inputId="weekday24"/><label htmlFor="weekday24" aria-roledescription='text'>24시간 운영</label>
                                    </div>
                                </li>
                                <li className='dateList'>
                                    <SelectBox>
                                        <option value="" disabled selected>시간선택</option>
                                    </SelectBox>
                                    <span>~</span>
                                    <SelectBox>
                                        <option value="" disabled selected>시간선택</option>
                                    </SelectBox>
                                </li>
                                <li>
                                    <div>
                                        주말·공휴일
                                    </div>
                                    <div>
                                        <Checkbox inputId="weekend" /><label htmlFor="weekend" aria-roledescription='text'>24시간 운영</label>
                                    </div>
                                </li>
                                <li className='dateList'>
                                    <SelectBox>
                                        <option value="" disabled selected>시간선택</option>
                                    </SelectBox>
                                    <span>~</span>
                                    <SelectBox>
                                        <option value="" disabled selected>시간선택</option>
                                    </SelectBox>
                                </li>
                            </ul>                            
                        </li>
                    </ul>
                    <ul style={{borderBottom:'0', marginBottom:'24px'}}>
                        <li>
                            <p>운영시간 공지</p>
                            <textarea name="" id="" placeholder='운영시간 공지사항을 입력해주세요.'></textarea>
                        </li>
                    </ul>
                    <div className='bottomBtn'>
                        <ButtonCommon color='white'>취소</ButtonCommon>    
                        <ButtonCommon>임시저장</ButtonCommon>    
                    </div>
                </div>

            </div>

        </MyPageAdminRVWrapper>
        </>
    );
}

export default MyPageAdminReservation;