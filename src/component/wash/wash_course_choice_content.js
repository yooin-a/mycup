import styled from '@emotion/styled'
import ToggleSwitch from '../../component/button/toggleSwitch_common'
import Subheader from '../../component/common/subHeader'
import CourseChoice from '../../component/wash/wash_course_button'
// import setAriaLabel from '../../component/accessibility/set_aria_label';
// import { useEffect } from 'react';

const WashCourseWrapper = styled.main`
    h2 {
        font-size: 1.0625rem;
        margin-bottom: 14px;
        font-weight: bold;
        span {
            display: block;
            color:var(--sys-secondary);
            font-size: .8125rem;
        }
    }
    .courseChkBox {
        display: flex;
        gap:11px;
        margin-bottom: 20px;
        align-items: stretch;
    }
    .washLock {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px auto;
        font-size: 16px;
        padding:14px 0;
    }
    .courseNoti {
        margin-bottom: 20px;
        background: rgba(255,255,255,0.5);
        border-radius: 10px;
        padding: 16px 20px 20px;
            b {
                display: block;
                margin-bottom:10px;
            }
            li {
                color:var(--sys-secondary);
                font-size: .9375rem;
                line-height: 1.3125rem;
                position: relative;
                padding-left: 10px;
                &::before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 2px;
                    height: 2px;
                    border-radius: 50%;
                    background-color: var(--sys-secondary);
                    left: 0;
                    top:10px;
                }
            }
    }
    .courseChoiceNoti {
        font-size: .8125rem;
        color:var(--sys-secondary);
        display: block;
    }
    .errorMessage {
        font-size: .8125rem;
        margin-bottom: 10px;
        display: block;
    }
    .fixedButton {
        bottom:69px;
    }
`

const WashCourseChoice = ({button, errorMessage, courseChoiceNoti}) => {
    // useEffect(()=>{
    //     setAriaLabel();
    //   },[])
    return (
        <WashCourseWrapper>

            <Subheader subTitle='세척 코스 선택' />

                <section className="wrap">
                    <h2>스타벅스 별다방점
                        <span>2번 세척기</span>
                    </h2>

                    <div className='courseChkBox'>
                        <CourseChoice
                            speedChk='speedWasher'
                            courseImgSrc='/image/wash/ic_speed_washer_sel.png'
                            courseTitle='쾌속 세척'
                            courseText={<>#물로만 #30초</>}
                        />

                        <CourseChoice
                            speedChk='standardWasher'
                            courseImgSrc='/image/wash/ic_standard_washer_nor.png'
                            courseTitle='꼼꼼 세척'
                            courseText={<>#세제사용 #4분 <br/> #건조까지</>}
                        />
                    </div>

                    {courseChoiceNoti}

                    <div className='washLock'>
                        <p>세척 완료 후 30초간 세척기 잠금</p>
                        <label htmlFor=''><ToggleSwitch isActive={true}/></label>
                    </div>

                    <div className="courseNoti">
                        <b>세척기 이용시 유의사항</b>
                        <ul>
                            <li>유리, 도자기 재질의 컵은 사용할 수 없어요.</li>
                            <li>텀블러 외 물건을 넣지마세요.</li>
                            <li>리유저블 컵은 급속 세척만 가능해요.</li>
                            <li>세척 전, 컵의 내용물을 모두 버려주세요.</li>
                        </ul>
                    </div>

                    <div className="fixedButton">
                        {errorMessage}
                        {button}
                    </div>

                </section>

        </WashCourseWrapper>
    )
}

export default WashCourseChoice;