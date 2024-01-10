import styled from '@emotion/styled'

const CalendarWrapper = styled.section`
    nav {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
        button {
            display: flex;
        }
    }
    > article {
        > div {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            font-size: 15px;
            line-height: calc(19/15);
            gap: 2.5px;
            button, p {
                color: var(--sys-primary);
                padding: 10.5px 0;
                &:disabled{
                    opacity: 0.3;
                }
            }
            .font-red {
                color: #f51000;
            }
            .circle-blue {
                color: var(--sys-on-primary);
                background-color: var(--sys-sub);
                border-radius: 9999px;
            }
        }
        
    }
`


// 달력 더미 데이터 생성 시작
let arrCalendarNum = [];
for( var indexDayPrevMonth=27; indexDayPrevMonth<32; indexDayPrevMonth++ ){
    arrCalendarNum.push({
        year: 2023,
        month: 8,
        day: indexDayPrevMonth,
        disabled: true,
    })
}
for( var indexDayCurrentMonth = 1; indexDayCurrentMonth<31; indexDayCurrentMonth++ ){
    arrCalendarNum.push({
        year: 2023,
        month: 9,
        day: indexDayCurrentMonth,
        disabled: false
    })
}
for( var indexDayNextMonth = 1; indexDayNextMonth<8; indexDayNextMonth++ ) {
    arrCalendarNum.push({
        year: 2023,
        month: 10,
        day: indexDayNextMonth,
        disabled: true
    })
}

// 달력 더미 데이터 생성 끝

const Calendar = ()=>{
    return(
        <CalendarWrapper>
            <nav>
                <button>
                    <img src="/image/icon/icon_arrow_left_black.svg" alt="저번달 달력 조회" />
                </button>
                <h2>
                    2023.09
                </h2>
                <button>
                    <img src="/image/icon/icon_arrow_right_black.svg" alt="다음달 달력 조회" />
                </button>
            </nav>
            <article>
                <div>                
                    <p className="font-red">일</p>
                    <p>월</p>
                    <p>화</p>
                    <p>수</p>
                    <p>목</p>
                    <p>금</p>
                    <p>토</p>
                </div>
                <div>
                    {
                        arrCalendarNum.map(
                            (element, index)=>{

                                // 더미 선택된 날짜 적용
                                let elementClassName = "";
                                if( 
                                    element.month === 9 
                                    && element.day === 4 
                                    ) {
                                        elementClassName = "circle-blue"
                                    }
                                // 더미 선택된 날짜 적용
                                return(
                                    <button
                                    className={elementClassName}
                                    aria-label={
                                        `${element.year}년 ${element.month}월 ${element.day}일 ${elementClassName==="circle-blue"?"선택됨":""}`
                                    }
                                    disabled={element.disabled}
                                    key={index}
                                    >
                                        {element.day}
                                    </button>
                                )
                            }
                        )
                    }
                    
                </div>
            </article>
        </CalendarWrapper>
    )
}

export default Calendar;