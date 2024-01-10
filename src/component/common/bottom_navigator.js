import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom'
import setAriaLabel from '../../component/accessibility/set_aria_label';

const BtmNaviWrap = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    backdrop-filter: blur(24px);
    background-color: rgba(255, 255, 255, 0.5);
    .bottomNavigationBar-wrap {
        width: 100%;
        max-width: 375px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        > li {
            width: 100%;
            max-width:75px;
            height: 100%;
            color: var(--sys-secondary);
            &.active{color:#111}
            a{
                display: block;
                width: 100%;
                height: 100%;
                padding-top:17px;
                padding-bottom: 13px;
                box-sizing: border-box;
                font-size: 12px;
                line-height: 1.25;
                
                &.qrCode {
                    margin:0 auto auto
                } 
                img {
                    display:block;
                    width: 24px;
                    height: 24px;
                    margin: 0 auto;
                }
            }
            .qr {
                display: inline-flex;
                line-height: 1;
                background-color: #11dbb8;
                padding: 12px;
                border-radius: 50px;
                margin:0 auto;
                box-sizing: border-box;
                box-shadow: 0 18px 18px 0 rgba(11, 212, 177, 0.4);
                width: auto;
                height: auto;
            }
        }
    }
`

const BottomNavigator = (props) => {
    useEffect(() => {

        document.querySelector(".space-bottom-nav").style.paddingBottom = document.querySelector(".bottomNavigationBar").offsetHeight+"px"
        setAriaLabel();    
    }, []);
    return (
        <>
            <BtmNaviWrap className="bottomNavigationBar">
                <ul className="bottomNavigationBar-wrap">
                    <li className={props.location === "home" ? "active" : null} >
                        <Link to="/home" aria-label={`${props.location ==="home"?"선택됨, ":""}홈`}>
                            <img src={`/image/icon/icon_home_${props.location === "home" ? "fill_black" : "stroke_gray"}.svg`} alt="" />
                            홈
                        </Link>
                    </li>
                    <li className={props.location === "wash" ? "active" : null} >
                        <Link to="/wash" aria-label={`${props.location ==="wash"?"선택됨, ":""}세척`}>
                            <img src={`/image/icon/icon_wash_${props.location === "wash" ? "fill_black" : "stroke_gray"}.svg`} alt="" />
                            세척
                        </Link>
                    </li>
                    <li aria-label='QR'>
                        <Link to="/qrCode_main" className="qr">
                            <img src="/image/icon/icon_qr_white.svg" alt="QR" />
                        </Link>
                    </li>
                    <li className={props.location === "event" ? "active" : null} >
                        <Link to="/event-list" aria-label={`${props.location ==="event"?"선택됨, ":""}이벤트`}>
                            <img src={`/image/icon/icon_event_${props.location === "event" ? "fill_black" : "stroke_gray"}.svg`} alt="" />
                            이벤트
                        </Link>
                    </li>
                    <li className={props.location === "my" ? "active" : null} >
                        <Link to="/mypage_user" aria-label={`${props.location ==="my"?"선택됨, ":""}마이`}>
                            <img src={`/image/icon/icon_my_${props.location === "my" ? "fill_black" : "stroke_gray"}.svg`} alt="" />
                            마이
                        </Link>
                    </li>
                </ul>
            </BtmNaviWrap>
            <div className="space-bottom-nav">

            </div>
        </>
    )
}

export default BottomNavigator;