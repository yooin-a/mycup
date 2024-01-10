import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'
import SubTabmenu from '../../component/common/subTabmenu'

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
                subTitle="1:1 문의"
            />
            
            <SubTabmenu listMenu={
                [
                    {
                        menuName: "문의 작성",
                        url: "/mypage_qna",
                    },
                    {
                        menuName: "문의 내역",
                        url: "/mypage_qna_list",                     
                        menuActive: "active"
                    }
                ]
            }/>

            <div className="wrap">
                <div className='qnaListCon'>
                    <a href="#!" className='qnaList'>
                        <div>
                            <p>타이틀타이틀타이틀타이틀타이틀(2줄까지, 최대 50자)</p>
                            <span>2023-08-31 15:59</span>
                        </div>
                        <mark className='waiting'>답변대기중</mark>
                    </a>
                    <a href="#!" className='qnaList'>
                        <div>
                            <p>타이틀타이틀타이틀타이틀타이틀(2줄까지, 최대 50자)</p>
                            <span>2023-08-31 15:59</span>
                        </div>
                        <mark>답변완료</mark>
                    </a>
                    <a href="#!" className='qnaList'>
                        <div>
                            <p>타이틀타이틀타이틀타이틀타이틀(2줄까지, 최대 50자)</p>
                            <span>2023-08-31 15:59</span>
                        </div>
                        <mark>답변완료</mark>
                    </a>
                </div>
            </div>

        </NotificationListMain>
    );
}

export default NotificationList;