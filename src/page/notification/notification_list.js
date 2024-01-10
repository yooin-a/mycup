import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import ButtonCommon from '../../component/button/button_common'
import Subheader from '../../component/common/subHeader'
import SubTabmenu from '../../component/common/subTabmenu'
import NotiContent from '../../component/notification/noti_content'
import MessageBox from '../../component/popup/message_box'
import setAriaLabel from '../../component/accessibility/set_aria_label';


const NotificationListMain = styled.main`
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
    .checkbox {
        flex-basis:32px;
    }

`

const NotificationList = (props) => {
    
    const [displayUiDelete, setDisplayUiDelete] = useState(false);
    const [buttonDeleteDisabled, setButtonDeleteDisabled] = useState(true);
    const [displayMessageboxConfirm, setDisplayMessageboxConfirm] = useState(false);
    const [displayMessageboxConfirmAll, setDisplayMessageboxConfirmAll] = useState(false);
    const [displayMessageboxFail, setDisplayMessageboxFail] = useState(false);

    const handleButtonDelete = () => {
        if( document.querySelectorAll(".checkbox:checked").length > 0 ){
            setButtonDeleteDisabled(false);
        } else if ( document.querySelectorAll(".checkbox:checked").length === 0 ) {
            setButtonDeleteDisabled(true);
        }
    }

    useEffect(() => {

        document.querySelector(".notification-list-main").style.paddingBottom = document.querySelector(".FloatingActionButton").offsetHeight+"px"

    }, [displayUiDelete]);

    useEffect(()=>{
        setAriaLabel();
    })
    

    return (
        <NotificationListMain className="notification-list-main">

            <Subheader
                subTitle="알림"
                btnOnClick={
                    ()=>{
                        document.querySelectorAll(".checkbox").forEach((element) => {
                            element.checked = false
                        });
                        setButtonDeleteDisabled(true);
                        if( displayUiDelete === false ) {
                            setDisplayUiDelete(true)
                        } else if ( displayUiDelete === true ) {
                            setDisplayUiDelete(false)
                        }
                        
                    }
                }
                displayNotiContent={
                    props.displayNotiContent
                }
                btnType="notiDelete"
            
            />
            
            <SubTabmenu listMenu={
                [
                    {
                        menuName: "세척 알림",
                        menuActive: "active",
                        url: "/notification"
                    },
                    {
                        menuName: "이벤트 알림",
                        url: "/notification-event"
                    }
                ]
            }/>

            <div className="tabmenuCon">

                {
                    props.displayNotiContent?
                    <>
                        <NotiContent 
                            checkboxOnChange={handleButtonDelete}
                            displayCheckbox={displayUiDelete}
                        />
                        <NotiContent 
                            checkboxOnChange={handleButtonDelete}
                            displayCheckbox={displayUiDelete}
                        />
                        <NotiContent 
                            checkboxOnChange={handleButtonDelete}
                            displayCheckbox={displayUiDelete}
                        />
                        <NotiContent 
                            checkboxOnChange={handleButtonDelete}
                            displayCheckbox={displayUiDelete}
                        />
                        <NotiContent 
                            checkboxOnChange={handleButtonDelete}
                            displayCheckbox={displayUiDelete}
                        />
                        <NotiContent 
                            checkboxOnChange={handleButtonDelete}
                            displayCheckbox={displayUiDelete}
                        />
                        <NotiContent 
                            checkboxOnChange={handleButtonDelete}
                            displayCheckbox={displayUiDelete}
                        />
                    </>
                    :
                    <div className="no_Content">
                        <img src="/image/notification/noNotification_img.svg" alt="" />
                        <dl>
                            <dt>표시할 알림이 없어요</dt>
                            <dd tabIndex={0} sal="true">
                                <div>
                                    푸시 알림을 켜면<br/>마이컵이 제공하는 다양한 정보를<br/>
                                    더욱 빠르게 확인할 수 있어요.
                                </div>
                            </dd>
                        </dl>
                        <ButtonCommon 
                            color="white" 
                            size="small"
                            onClick={()=>{
                                alert("알림 설정")
                            }}
                        >
                            알림 설정
                        </ButtonCommon>
                    </div>
                }

            </div>
            <nav className={`FloatingActionButton ${displayUiDelete ? "on":null}`}>
                <ButtonCommon
                    color="gray"
                    disabled={
                        buttonDeleteDisabled
                    }
                    onClick={
                        ()=>{
                            setDisplayMessageboxConfirm(true)
                        }
                    }
                >
                    선택 삭제
                </ButtonCommon>
                <ButtonCommon 
                    color="gray"
                    onClick={
                        ()=>{
                            document.querySelectorAll(".checkbox").forEach((element) => {
                                element.checked = true
                            });
                            handleButtonDelete();
                            setDisplayMessageboxConfirmAll(true)
                        }
                    }
                >
                    전체 삭제
                </ButtonCommon>
            </nav>
            <MessageBox
                content={
                    <>
                        선택된 알림을 삭제하시겠어요?
                    </>
                }
                button={
                    <>
                        <ButtonCommon 
                            size="large" 
                            color="gray"
                            onClick={
                                ()=>{
                                    setDisplayMessageboxConfirm(false)
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
                                    setDisplayMessageboxConfirm(false)
                                    //오류가 발생했을 경우
                                    setDisplayMessageboxFail(true)
                                }
                            }
                        >
                            삭제하기
                        </ButtonCommon>
                    </>

                }
                display={
                    displayMessageboxConfirm
                }
            />
            <MessageBox
                content={
                    <>
                        전체 알림을 삭제하시겠어요?
                    </>
                }
                button={
                    <>
                        <ButtonCommon 
                            size="large" 
                            color="gray"
                            onClick={
                                ()=>{
                                    setDisplayMessageboxConfirmAll(false)
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
                                    setDisplayMessageboxConfirmAll(false)
                                    //오류가 발생했을 경우
                                    setDisplayMessageboxFail(true)
                                }
                            }
                        >
                            삭제하기
                        </ButtonCommon>
                    </>

                }
                display={
                    displayMessageboxConfirmAll
                }
            />
            <MessageBox
                content={
                    <>
                        알림 삭제에 실패했어요.<br/>다시 시도해주세요.
                    </>
                }
                button={
                    <ButtonCommon 
                        size="large" 
                        color="black"
                        onClick={
                            ()=>{
                                setDisplayMessageboxFail(false)
                            }
                        }
                    >
                        확인
                    </ButtonCommon>
                }
                display={
                    displayMessageboxFail
                }
            />
            

        </NotificationListMain>
    );
}

export default NotificationList;