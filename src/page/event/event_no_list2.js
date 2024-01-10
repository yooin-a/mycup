import styled from '@emotion/styled'
import EventTabMenu from '../../component/event/event_tab_menu'
import SubheaderMain from '../../component/common/subHeader'
import SubTabMenu from '../../component/common/subTabmenu'
import BottomNavigator from '../../component/common/bottom_navigator'


const EventPageWrapper = styled.main`
    .eventBox {
        margin-bottom:16px;
        border-radius:20px;
        padding:20px;
        display:flex;
        align-items: center;
        &.blue {
            background-color:#e4edff
        }
        &.green {
            background-color:#f1feec
        }
        &.white {
            background-color:#fff;
        }
        .eventText {
            mark {
                display:inline-block;
                color:var(--sys-on-primary);
                background-color:color-mix(in srgb, var(--sys-primary) 60%, transparent);
                margin-bottom:10px;
                padding:3px 12px 1px;
                border-radius:12px;
                font-size: .8125rem;
            }
            p.eventTitle {
                font-weight:bold;
                margin-bottom:26px;
                span {
                    margin-top:6px;
                    display:block;
                    color:var(--sys-secondary);
                    font-size: .8125rem;
                    line-height: 1.0625rem;
                    font-weight: normal;
                }
            }
            p.eventDate {
                font-size: .8125rem;
                line-height: 1.0625rem;
                color:var(--sys-secondary);
            }
        }
        img {
            margin-left:auto
        }
    }


`

const EventListPage = ()=>{
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
                        url:"/event-no-list"
                    },
                    {
                        menuName: "참여중",
                        menuActive: "active",
                        url:"/event-no-list2"
                    },
                    {
                        menuName: "종료"
                    }
                ]
            }/>

            <div className="subConWrapper">

                <div className="no_Content">
                    <img src="/image/event/event_no_img2.png" alt="" />
                    <dl>
                        <dt>지금은 당첨자 발표 기간이 아니에요.</dt>
                    </dl>
                </div>

            </div>
            <BottomNavigator location="event" />

        </EventPageWrapper>
    )
}

export default EventListPage;