import styled from '@emotion/styled'
import SubheaderMain from '../../component/common/subHeader'
import ButtonCommon from '../../component/button/button_common'
import BottomNavigator from '../../component/common/bottom_navigator'

const EventViewPageWrapper = styled.main`
    .button-show-ui-delete {
        display: none;
    }
    .subConWrapper {
        .eventViewDate {
            font-size: .8125rem;
            line-height: 1.0625rem;
            display: block;
            position:Absolute;
            top:12px;
            left:20px;
        }
        .eventViewDetail {
            display:flex;
            flex-direction:column;
            background:#e5e5e5;
            text-align:Center;
            width:100%;
            padding:20px;
            min-height:calc(100vh - 199px);
            position:relative;
            margin-top:20px;
            p {
                color:#5a6979;
                margin:auto 0;
            }
            button {
                margin-top:auto;
            }
        }
    }

`
const EventViewPage = ({display, eventViewText, buttonCommonText})=>{

    return(
        <EventViewPageWrapper>
            <SubheaderMain subTitle="{이벤트 제목}"></SubheaderMain>

            <div className="subConWrapper">
                {
                    display.time ?
                    <div className='eventViewDate' aria-label="기간: yyyy년 mm월 dd일부터 yyyy년 mm월 dd일 까지" tabIndex={0}>
                        <p aria-hidden="true">
                            기간: <time>yyyy.mm.dd</time>~<time>yyyy.mm.dd</time>
                        </p>
                    </div>
                    : null
                }
                

                <div className='eventViewDetail'>

                    <p>{eventViewText}</p>
                    {
                        buttonCommonText ?
                        <ButtonCommon color="black">{buttonCommonText}</ButtonCommon>
                        : null
                    }
                    

                </div>
            </div>
            <BottomNavigator location="event" />

        </EventViewPageWrapper>
    )
}

export default EventViewPage;