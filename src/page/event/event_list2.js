import styled from '@emotion/styled'
import EventTabMenu from '../../component/event/event_tab_menu'
import SubheaderMain from '../../component/common/subHeader'
import SubTabMenu from '../../component/common/subTabmenu'
import EventBox from '../../component/event/event_box'
import BottomNavigator from '../../component/common/bottom_navigator'

const EventPageWrapper = styled.main`
`


const EventListPage2 = ()=>{
    return(
        <EventPageWrapper>
            <SubheaderMain subTitle="이벤트"/>

            <EventTabMenu
                listMenu={
                    [
                        {
                            menuName: "이벤트",
                            menuActive: "active",
                            url:"/event-list"
                        },
                        {
                            menuName: "챌린지",
                            url:"/challenge-no-list"
                        }
                    ]
                }
            />

            <SubTabMenu listMenu={
                [
                    {
                        menuName: "참여가능",
                        url:"/event-list"
                    },
                    {
                        menuName: "참여중",
                        menuActive: "active",
                        url:"/event-list2"
                    },
                    {
                        menuName: "종료",
                        url:"/event-list3"
                    }
                ]
            }/>


            <ul className="subConWrapper">
                <EventBox
                    color="blue"
                    link="/event-view"
                    keyword="캡슐"
                    title={
                        <>
                            10월 출석체크<br/>하고 캡슐 받기!
                            <span>한 달 출석 시 보너스 2배</span>
                        </>
                    }
                    dateStatus="당첨자발표중"
                    imgSrc="/image/thumb/event-img1.png"
                />

                <EventBox
                    color="white"
                    link="/event-view"
                    keyword="캡슐"
                    title={
                        <>
                            빨대 사용 줄이기<br/>참여하면 캡슐 2배
                            <span>인증 완료 시 자동 지급돼요.</span>
                        </>
                    }
                    dateStatus="당첨자발표중"
                    imgSrc="/image/thumb/event-img2.png"
                />
                <EventBox
                    color="green"
                    link="/event-view"
                    keyword="캡슐"
                    title={
                        <>
                            내 화분 인증하면<br/>특별한 선물 증정!
                            <span>이용 완료 시 자동 지급돼요.</span>
                        </>
                    }
                    dateStatus="당첨자발표중"
                    imgSrc="/image/thumb/event-img3.png"
                />
            </ul>
            <BottomNavigator location="event" />

        </EventPageWrapper>
    )
}

export default EventListPage2;