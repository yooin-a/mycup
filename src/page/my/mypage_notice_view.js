import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'
import React, {useEffect} from "react";
import setAriaLabel from '../../component/accessibility/set_aria_label';

const NotificationListMain = styled.main`
    .button-show-ui-delete {
        display: none;
    }
    .qnaListCon {
        .qnaList {
            border-bottom: 1px solid #cfd4e0;
            padding: 24px 0;
            div {
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
                .qnaView {
                    padding-top:24px;
                    font-size: .8125rem;
                    line-height: 1.1875rem;
                }
            }
            &.downloadList p {
                margin-top:4px;
                &:first-of-type {
                    margin-top:0;                   
                }
                &::before {
                    content: '';
                    display: inline-block;
                    background: url(/image/icon/ic_download_file.svg) left center no-repeat;
                    background-size: 14px;
                    width: 20px;
                    height: 14px;
                }
            }
            &:last-child {
                border-bottom: 0;
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
                    <div className='qnaList'>
                        <div>
                            <p>타이틀타이틀타이틀타이틀타이틀(2줄까지, 최대 50자)</p>
                            <span role='text' aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                            <div className='qnaView'>
                            문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용 문의 내용내용내용내용.txt
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>

        </NotificationListMain>
    );
}

export default NotificationList;