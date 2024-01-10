import React,{useRef, useEffect} from "react";
import styled from '@emotion/styled'
import MessageBox from '../../component/popup/message_box'
import ButtonCommon from '../../component/button/button_common'
import AboutAppAccess from '../../component/info/about_app_access'
import setMinHeightByScreen from '../../component/common/set_minheight_by_screen'

const SplashMain = styled.main`
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    background-image: url("/image/splash/background_splash.png");
    background-size: cover;

    >img {
        display: block;
        width: auto;
        height: 40px;
    }

`

const Splash = (props) => {
    let splashWrapperRef = useRef(null)

    useEffect(()=>{
        setMinHeightByScreen(splashWrapperRef);
    },[])
    return (
      <>
        <SplashMain ref={splashWrapperRef}>
            <img src="/image/logo/logo.svg" alt="My Cup 로고" />
            <MessageBox
                content={
                    <>
                        데이터 통신이 원활하지 않아<br/>
                        마이컵 서비스를 이용할 수 없어요.<br/>
                        네트워크 상태를 확인해주세요.
                    </>
                }
                button={
                    <ButtonCommon 
                        size="large" 
                        color="black" 
                        onClick={
                            ()=>{
                                alert("앱 종료")
                            }
                        }>
                        앱 종료
                    </ButtonCommon>
                }
                display={
                    props.status.messagebox
                }
            />
            <MessageBox
                content={
                    <AboutAppAccess/>
                }
                button={
                    <ButtonCommon 
                        size="large" 
                        color="black" 
                        onClick={
                            ()=>{
                                alert("확인")
                            }
                        }>
                        확인
                    </ButtonCommon>
                }
                display={
                    props.status.appAccess
                }
            />
        </SplashMain>
      </>
    );
}

export default Splash;