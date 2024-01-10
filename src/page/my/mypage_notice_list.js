import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'
import { ReactComponent as ArrowWhite } from "../../assets/icons/chevronRight.svg";
import React, {useEffect} from "react";
import setAriaLabel from '../../component/accessibility/set_aria_label';

const NotificationListMain = styled.main`
    .button-show-ui-delete {
        display: none;
    }
    .qnaListCon {
        .qnaList {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #cfd4e0;
            padding: 24px 0;
            div {
                padding-right: 35px;
                p {
                    font-weight:500;
                    font-size: .9375rem;
                    line-height: 1.3125rem;
                    margin-bottom: 8px;
                }
                span {
                    display: block;
                    font-size: .8125rem;
                    color:var(--sys-secondary)
                }
            }
            svg {
                margin-left:auto;
                flex-shrink: 0;
            }
        }
    }
`

const NotificationList = () => {
    useEffect(()=>{
        setAriaLabel();
      },[])
    return (
        <NotificationListMain>

            <Subheader
                subTitle="공지사항"
            />
            
            <div className="wrap">
                <div className='qnaListCon'>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                    <a href="#!" className='qnaList' sal="true">
                        <div>
                            <p>LG전자 서비스 이용약관 및 개인정보처리방침 30일 전 개정 안내(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                        </div>
                        <ArrowWhite role="button"/>
                    </a>
                </div>
            </div>

        </NotificationListMain>
    );
}

export default NotificationList;