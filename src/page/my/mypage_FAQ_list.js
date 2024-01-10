import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'
import SubTabmenu from '../../component/common/subTabmenu'
import FAQContentDl from '../../component/my/mypage_FAQ_content'
import SearchBox from '../../component/input/search_common'
import QuickBtnFixed from '../../component/button/quickbutton_common'

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
    .checkbox {
        flex-basis:32px;
    }
    .tabmenu {
        overflow-x: auto;
        width: 100%;
        position:relative;
        &::after {
            position: absolute;
            display: block;
            top: 0;
            right: 0;
            content: '';
            background: linear-gradient(to right, rgba(240, 241, 243, 0), #f0f1f3 96%);
            width: 75px;
            height: 100%;
        }
        ul {
            flex-wrap: nowrap;
            white-space: nowrap;
            li {
                width: auto;
                a {
                    padding:0 10px;

                }
            }
        }
    }

`

const NotificationList = () => {

    return (
        <NotificationListMain className="notification-list-main">

            <Subheader subTitle="자주 묻는 질문" />

            <SearchBox placeholder='궁금하신 점을 검색해보세요.'/>

            <nav className="tabmenu">
                <SubTabmenu
                    listMenu={
                        [
                            {
                                menuName: "자주찾는",
                                menuActive: "active",
                                url: "/mypage_FAQ_list"
                            },
                            {
                                menuName: "세척",
                                url: "/mypage_FAQ_list"
                            },
                            {
                                menuName: "회원/계정",
                                url: "/mypage_FAQ_list"
                            },
                            {
                                menuName: "이벤트",
                                url: "/mypage_FAQ_list"
                            },
                            {
                                menuName: "리워드",
                                url: "/mypage_FAQ_list"
                            }
                        ]
                    }/>
            </nav>


            <div className="tabmenuCon">
                <FAQContentDl></FAQContentDl>
                <FAQContentDl></FAQContentDl>
                <FAQContentDl></FAQContentDl>
                <FAQContentDl></FAQContentDl>
                <FAQContentDl></FAQContentDl>
                <FAQContentDl></FAQContentDl>
                <FAQContentDl></FAQContentDl>
                <FAQContentDl></FAQContentDl>
            </div>

            <QuickBtnFixed btnTitle='1:1 문의하기'/>

        </NotificationListMain>
    );
}

export default NotificationList;