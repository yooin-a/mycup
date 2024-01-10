import styled from '@emotion/styled'
import ButtonCommon from '../../component/button/button_common'
import Subheader from '../../component/common/subHeader'
import SubTabmenu from '../../component/common/subTabmenu'
import SelectBox from '../../component/input/select_common'
import InputTextLabel from '../../component/input/inputText_common'
import { useState } from 'react'

const NotificationListMain = styled.main`
    .button-show-ui-delete {
        display: none;
    }
    .tabmenuCon {
        width: 100%;
        padding:0 20px;
    }
    .FloatingActionButton {
        position:fixed;
        left:0;
        bottom: 0;
        width:100%;
        display: none;
        background-color: var(--sys-on-primary);
        padding: 26px 20px 29px;
        gap:10px;
        &.on {
            display: flex;
        }
    }
    .reservationForm {
        >ul{
            padding-top:24px;
            li {
                margin-bottom: 12px;
                select {
                    margin-bottom:12px;
                    option {
                        background:#fff;
                    }
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
                >p.errorText {
                    margin-top: 12px;
                    font-size: .8125rem;
                    line-height: 1.0625rem;
                    color: var(--sys-error);
                }
            }
        }
    }

    .bottomBtn {
        display: flex;
        gap: 10px;
    }    
`

const NotificationList = () => {

    const [text, setText] = useState('');
    const [byteCount, setByteCount] = useState(0);
  
    const updateByteCounter = (event) => {
      const newText = event.target.value;
      const newByteCount = new Blob([newText]).size;
      
      setText(newText);
      setByteCount(newByteCount);
    };

    return (
        <NotificationListMain>

            <Subheader
                subTitle="1:1 문의"
            />
            
            <SubTabmenu listMenu={
                [
                    {
                        menuName: "문의 작성",
                        url: "/mypage_qna",
                        menuActive: "active",
                    },
                    {
                        menuName: "문의 내역",
                        url: "/mypage_qna_list"                        
                    }
                ]
            }/>

            <div className="tabmenuCon">
                <div className="reservationForm">
                    <ul>
                        <li>
                            <SelectBox>
                                <option value="" selected>문의유형을 선택하세요</option>
                                <option value="">세척문의</option>
                                <option value="">이벤트 문의</option>
                                <option value="">챌린지 문의</option>
                                <option value="">계정 문의</option>
                                <option value="">건의사항</option>
                                <option value="">기타</option>
                            </SelectBox>
                        </li>
                        <li>
                            <InputTextLabel placeholder='제목을 작성해주세요'/>
                        </li>
                        <li>
                            <div className='textAreaWrap'>
                                <textarea
                                    value={text}
                                    onChange={updateByteCounter}
                                    placeholder='기기의 이상 증상에 대해 알려주세요.&#10;(최대 500글자)'
                                />
                                <div className='bytes'>{byteCount}/1000 bytes</div>
                            </div>
                            <p className="errorText">2,000 bytes 이상 입력할 수 없어요.</p>
                        </li>
                    </ul>
                </div>


                <div className="fixedButton">
                    <div className='bottomBtn'>
                        <ButtonCommon
                            color='white'
                        >
                            취소
                        </ButtonCommon>
                        <ButtonCommon 
                        >
                            작성완료
                        </ButtonCommon>
                    </div>
                </div>


            </div>

        </NotificationListMain>
    );
}

export default NotificationList;