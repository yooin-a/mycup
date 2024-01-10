import styled from '@emotion/styled'
import EventTabMenu from '../../component/event/event_tab_menu'
import SubheaderMain from '../../component/common/subHeader'
import SubTabMenu from '../../component/common/subTabmenu'
import BottomNavigator from '../../component/common/bottom_navigator'

const EventPageWrapper = styled.main`

`


const EventListPage = ()=>{
    return(
        <EventPageWrapper>
            <SubheaderMain subTitle="챌린지"/>
            <EventTabMenu
                listMenu={
                    [
                        {
                            menuName: "이벤트",
                            url:"/event-list"
                        },
                        {
                            menuName: "챌린지",
                            menuActive: "active",
                            url:"/challenge-no-list"
                        }
                    ]
                }
            />

            <SubTabMenu listMenu={
                [
                    {
                        menuName: "참여가능",
                        url:"/challenge-no-list"
                    },
                    {
                        menuName: "참여중",
                        menuActive: "active",
                        url:"/challenge-no-list2"
                    },
                    {
                        menuName: "종료"
                    }
                ]
            }/>

            <div className="subConWrapper">

                <div className="no_Content">
                    <img src="/image/event/challenge_no_img2.png" alt="" />
                    <dl>
                        <dt>참여중인 챌린지가 없어요.</dt>
                        <dd>다양한 이벤트나 챌린지에 참여하고<br/>보상을 받아보세요!</dd>
                    </dl>
                </div>

            </div>
            <BottomNavigator location="event" />


        </EventPageWrapper>
    )
}

export default EventListPage;