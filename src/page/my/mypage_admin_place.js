import styled from '@emotion/styled'
import SubheaderMain from '../../component/common/subHeader'
import SelectBox from '../../component/input/select_common'
import InputTextLabel from '../../component/input/inputText_common'
import ButtonCommon from '../../component/button/button_common'
import { ReactComponent as ArrowWhite } from "../../assets/icons/chevronRight.svg";
import Checkbox from '../../component/input/checkbox'
import Tooltip from '../../component/common/tooltip'

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
            margin-bottom: 12px;
            li {                
                >p {
                    display: flex;
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
                .tooltip {
                    margin-left: auto;
                    input {
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 8px;
                        position: relative;
                        top:-1px;                        
                    }
                }
                .thumbImg {
                    display: block;
                    margin:0 auto 13px;
                    width: auto;
                    max-width: 100%;
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
                }
                .timeTable {
                    font-size: .9375rem;
                    color: var(--sys-secondary);
                    p {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                }
            }
        }
        .symptomList {
            border:0;
        }
        .symptomList > li {
            padding-bottom:12px;

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
    return (
        <>
        <MyPageAdminRVWrapper>
            <SubheaderMain subTitle="장소 관리"></SubheaderMain>

            <div className="wrap">

                <SelectBox>
                    <option value="" disabled selected>기기를 선택하세요</option>
                    <option value="">스타벅스 ABCDE지점_1번 세척기</option>
                    <option value="">스타벅스 ABCDE지점_2번 세척기</option>
                    <option value="">스타벅스 ABCDE지점_3번 세척기</option>
                    <option value="">스타벅스 ABCDE지점_4번 세척기</option>
                </SelectBox>


                <div className="reservationForm">
                    <ul aria-roledescription='text'>
                        <li>
                            <p aria-roledescription='text'>장소 이미지</p>
                            <img src="/image/thumb/mypage_admin_thumb.png" alt="" className='thumbImg'/>
                        </li>
                        <li>
                            <p>설치 장소
                                <div className="tooltip">
                                    <Checkbox checked={true}/>
                                    검색 허용
                                    <Tooltip 
                                        content="검색 허용을 체크하면 일반사용자들이 내 세척기 설치장소를 확인할 수 있습니다."
                                        align="right"
                                        >
                                    </Tooltip>
                                </div>
                            </p>
                            <InputTextLabel placeholder='{장소 이름표기}'/>
                        </li>
                        <li>
                            <p>주소</p>
                            <InputTextLabel placeholder='{도로명주소}'/>                            
                            <div style={{marginTop:'10px'}}><InputTextLabel placeholder='{매장 내 위치}'/></div>
                        </li>
                    </ul>

                    <ul className='symptomList'>
                        <li className='agreeListBox'>
                            <p>이용가능시간</p>
                            <ButtonCommon size="small" color="white">수정하기 <ArrowWhite width="6.5"/></ButtonCommon>
                            <div className='timeTable'>
                                <p>휴무일 <span>매주 월요일</span></p>
                                <p>평일 <span>08:00 ~ 20:00</span></p>
                                <p>주말·공휴일 <span>08:00 ~ 20:00</span></p>
                            </div>
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