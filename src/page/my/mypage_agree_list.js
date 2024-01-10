import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'
import ToggleSwitch from '../../component/button/toggleSwitch_common'
import { ReactComponent as ArrowWhite } from "../../assets/icons/chevronRight.svg";

const NotificationListMain = styled.main`
    .button-show-ui-delete {
        display: none;
    }
    .agreeListCon {
        border-bottom:1px solid #cfd4e0;
        padding-bottom:12px;
        margin-bottom: 12px;
        &:last-child{
            border: 0;
        }
        >p {
            padding: 12px 0;
        }
        .agreeList {
            font-weight: 500;
            font-size: .9375rem;
            line-height: 1.3125rem;
            padding:15px 0;           
            display: flex;
            align-items: center;
            justify-content: space-between;
            >div {
                color:var(--sys-secondary);
                mark {
                    color:var(--sys-error);
                    margin-left: 4px;;
                }
            }
        }
    }
`

const NotificationList = () => {
    return (
        <NotificationListMain>

            <Subheader
                subTitle="이용약관 및 이용동의"
            />

            <div className="wrap">
                <div className="agreeListCon">
                    <p>이용약관</p>
                    <a href="#!" className='agreeList'>
                        <div>LG전자 계정 이용약관</div>
                        <ArrowWhite />
                    </a>
                    <a href="#!" className='agreeList'>
                        <div>mycup 서비스 이용약관</div>
                        <ArrowWhite />
                    </a>
                    <a href="#!" className='agreeList'>
                        <div>위치 기반 서비스 이용약관</div>
                        <ArrowWhite />
                    </a>
                    <a href="#!" className='agreeList'>
                        <div>개인정보 처리방침</div>
                        <ArrowWhite />
                    </a>
                    <a href="#!" className='agreeList'>
                        <div>맞춤형 광고 안내</div>
                        <ArrowWhite />
                    </a>
                </div>

                <div className="agreeListCon">
                    <p>이용동의</p>
                    <div className='agreeList'>
                        <div>LG전자 계정 개인정보 수집 및 이용 동의<mark>*</mark></div>
                        <label htmlFor=''><ToggleSwitch /></label>
                    </div>
                    <div className='agreeList'>
                        <div>mycup 서비스 개인정보 수집 및 이용 동의<mark>*</mark></div>
                        <label htmlFor=''><ToggleSwitch /></label>
                    </div>
                    <div className='agreeList'>
                        <div>mycup 마케팅 정보 수신 동의</div>
                        <label htmlFor=''><ToggleSwitch /></label>
                    </div>
                    <div className='agreeList'>
                        <div>mycup 마케팅 정보 활용동의</div>
                        <label htmlFor=''><ToggleSwitch /></label>
                    </div>
                </div>
            </div>

        </NotificationListMain>
    );
}

export default NotificationList;