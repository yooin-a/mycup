import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'
import SubTabmenu from '../../component/common/subTabmenu'

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
            &:last-child {
                border-bottom: 0;
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
                    <div className='qnaList'>
                        <div>
                            <p>타이틀타이틀타이틀타이틀타이틀(2줄까지, 최대 50자)</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                            <div className='qnaView'>
                            문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용문의 내용내용내용내용 문의 내용내용내용내용.txt
                            </div>
                        </div>                        
                    </div>

                    <div className='qnaList'>
                        <div>
                            <p>답변드립니다.</p>
                            <span aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</span>
                            <div className='qnaView'>답변 내용내용내용내용  답변 내용내용내용내용  답변 내용내용내용내용 답변 내용내용내용내용 답변 내용내용내용내용 답변 내용내용내용내용 답변 내용내용내용내용 답변 내용내용내용내용</div>
                        </div>
                    </div>

                </div>
            </div>

        </NotificationListMain>
    );
}

export default NotificationList;