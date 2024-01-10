import styled from '@emotion/styled'
import SubTabMenu from '../../component/common/subTabmenu'

const EventList = styled.dl`
`

const EventContent = ()=>{

    return(
        <EventList>
            <SubTabMenu listMenu={
                [
                    {
                        menuName: "참여가능",
                        menuActive: "active"
                    },
                    {
                        menuName: "참여중"
                    },
                    {
                        menuName: "종료"
                    }
                ]
            }/>

            <div className="subConWrapper">

                <div className='eventBox blue'>
                    <div className='eventText'>
                        <mark>캡슐</mark>
                        <p className='eventTitle'>10월 출석체크<br/>하고 캡슐 받기!
                            <span>한 달 출석 시 보너스 2배</span>
                        </p>
                        <p className='eventDate'>23.10.31 ~ 23.11.30</p>
                    </div>
                    <img src="/image/thumb/event-img1.png" alt="" />
                </div>

                <div className='eventBox white'>
                    <div className='eventText'>
                        <mark>캡슐</mark>
                        <p className='eventTitle'>빨대 사용 줄이기<br/>참여하면 캡슐 2배
                            <span>인증 완료 시 자동 지급돼요.</span>
                        </p>
                        <p className='eventDate'>23.10.31 ~ 23.11.30</p>
                    </div>
                    <img src="/image/thumb/event-img2.png" alt="" />
                </div>

                <div className='eventBox green'>
                    <div className='eventText'>
                        <mark>선물</mark>
                        <p className='eventTitle'>내 화분 인증하면<br/>특별한 선물 증정!
                            <span>이용 완료 시 자동 지급돼요.</span>
                        </p>
                        <p className='eventDate'>23.10.31 ~ 23.11.30</p>
                    </div>
                    <img src="/image/thumb/event-img3.png" alt="" />
                </div>
            </div>
        </EventList>
    )
}

export default EventContent;