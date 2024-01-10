import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'
import ToggleSwitch from '../../component/button/toggleSwitch_common'

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
            >div {
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
            >div.toggleSwith {
                padding:0
            }
            mark {
                font-size: .75rem;
                font-weight:500;
                margin-left:auto;
                flex-shrink: 0;
                color: var(--sys-secondary);
                &.waiting {
                    color: var(--sys-sub);
                }
            }
        }
    }
`

const NotificationList = () => {
    return (
        <NotificationListMain>

            <Subheader
                subTitle="알림 설정"
            />

            <div className="wrap">
                <div className='qnaListCon'>
                    <div className='qnaList'>
                        <div>
                            <p>서비스 알림</p>
                            <span>세척 줄서기 등 알림</span>
                        </div>
                        <div className="toggleSwith">
                            <label htmlFor=""><ToggleSwitch/></label>
                        </div>
                    </div>
                    <div className='qnaList'>
                        <div>
                            <p>마케팅 알림</p>
                            <span role='text' aria-label='마케팅 정보 수신 동의 2023년 09월 30일'>마케팅 정보 수신 동의 2023-09-30</span>
                        </div>
                        <div className="toggleSwith">
                            <label htmlFor=""><ToggleSwitch/></label>
                        </div>
                    </div>
                </div>
            </div>

        </NotificationListMain>
    );
}

export default NotificationList;