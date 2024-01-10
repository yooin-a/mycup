import styled from '@emotion/styled'
import ButtonCommon from '../../component/button/button_common'
import ToggleSwitch from '../../component/button/toggleSwitch_common'
import FavoritBtn from '../../component/button/favorit_common'
import CourseChoice from '../../component/wash/wash_course_button'

const GuideBtnWrapper = styled.div`
    background-color:#fff;
    h1 {
        font-size: 26px;
        font-weight:bold;
        padding: 20px 20px 0;
    }
    .sizeWrap >p {
        font-size: 24px;
        padding:0 20px;
    }
    ul {
        margin-bottom: 20px;
        span {
            display: block;
            text-align: center;
            margin-top: 15px;
            line-height: 1.125rem;
        }
    }
    .largeBtn {
        padding:15px 20px 25px;
        b {
            display:block;
            margin-bottom:10px
        }
        ul {
            display:flex;
            gap:40px;
            li {
                width: 100%;
                max-width: 160px;
            }
        }
        &.gray {
            background-color:#f0f1f3;
        }
    }
    .smallBtn {
        padding:15px 20px;
        b {
            display:block;
            margin-bottom:10px
        }
        ul {
            display: flex;
            gap:20px;
            li{
                text-align: center;
            }
        }
        &.gray {
            background-color:#f0f1f3;
        }
    }
`

const GuideBtn = ()=>{

    return(
        <GuideBtnWrapper>
            <h1>Button</h1>

            <div className="sizeWrap">
                <div className='largeBtn'>
                    <b>+ Large - White BG</b>
                    <ul>
                        <li><ButtonCommon color="black">Primary</ButtonCommon></li>
                        <li><ButtonCommon color="gray">Secondary</ButtonCommon></li>
                        <li><ButtonCommon disabled=":disabled">Disable</ButtonCommon></li>
                    </ul>
                </div>
                <div className='largeBtn gray'>
                    <b>+ Large - Gray BG</b>
                    <ul>
                        <li><ButtonCommon color="black">Primary</ButtonCommon></li>
                        <li><ButtonCommon color="gray">Secondary</ButtonCommon></li>
                        <li><ButtonCommon disabled=":disabled">Disable</ButtonCommon></li>
                    </ul>
                </div>

                <div className='smallBtn'>
                    <b>+ Small - White BG</b>
                    <ul>
                        <li><ButtonCommon size="small" color="black">Primary</ButtonCommon></li>
                        <li><ButtonCommon size="small" color="gray">Secondary</ButtonCommon></li>
                        <li><ButtonCommon size="small" disabled=":disabled">Disable</ButtonCommon></li>
                    </ul>
                </div>
                <div className='smallBtn gray'>
                    <b>+ Small - Gray BG</b>
                    <ul>
                        <li><ButtonCommon size="small" color="black">Primary</ButtonCommon></li>
                        <li><ButtonCommon size="small" color="gray">Secondary</ButtonCommon></li>
                        <li><ButtonCommon size="small" disabled=":disabled">Disable</ButtonCommon></li>
                    </ul>
                </div>

                <div className='smallBtn'>
                    <b>+ Toggle</b>
                    <ul>
                        <li>
                            <label htmlFor=""><ToggleSwitch isActive={true}/></label>
                            <span style={{marginTop:'5px'}}>Active</span>
                        </li>
                        <li>
                            <label><ToggleSwitch/></label>
                            <span style={{marginTop:'5px'}}>Inactive</span>
                        </li>
                    </ul>
                </div>

                <div className='smallBtn gray'>
                    <b>+ 즐겨찾기</b>
                    <ul>
                        <li>
                            <FavoritBtn isActive={true}/>
                            <span>Active</span>
                        </li>
                        <li>
                            <FavoritBtn/>
                            <span>Inactive</span>
                        </li>
                    </ul>
                </div>

                <div className='largeBtn gray'>
                    <b>+ 세척코스</b>
                    <ul>
                        <li>
                            <CourseChoice
                                speedChk='speedWasher'
                                courseImgSrc='/image/wash/ic_speed_washer_sel.png'
                                courseTitle='쾌속 세척'
                                courseText='#물로만 #30초'
                            />
                            <span>Selected</span>
                        </li>
                        <li>
                            <CourseChoice
                                speedChk='standardWasher'
                                courseImgSrc='/image/wash/ic_speed_washer_nor.png'
                                courseTitle='쾌속 세척'
                                courseText='#물로만 #30초'
                            />
                            <span>Normal</span>
                        </li>
                        <li>
                            <CourseChoice
                                speedChk='standardWasher disable'
                                courseImgSrc='/image/wash/ic_speed_washer_nor.png'
                                courseTitle='쾌속 세척'
                                courseText='#물로만 #30초'
                            />
                            <span>Disable<br/>(Normal Op 30%)</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <CourseChoice
                                speedChk='speedWasher'
                                courseImgSrc='/image/wash/ic_standard_washer_sel.png'
                                courseTitle='꼼꼼 세척'
                                courseText={["#세제사용 #4분", <br/>, "#건조까지"]}
                            />
                            <span>Selected</span>
                        </li>
                        <li>
                            <CourseChoice
                                speedChk='standardWasher'
                                courseImgSrc='/image/wash/ic_standard_washer_nor.png'
                                courseTitle='꼼꼼 세척'
                                courseText={["#세제사용 #4분", <br/>, "#건조까지"]}
                            />
                            <span>Normal</span>
                        </li>
                        <li>
                            <CourseChoice
                                speedChk='standardWasher disable'
                                courseImgSrc='/image/wash/ic_standard_washer_nor.png'
                                courseTitle='꼼꼼 세척'
                                courseText={["#세제사용 #4분", <br/>, "#건조까지"]}
                            />
                            <span>Disable<br/>(Normal Op 30%)</span>
                        </li>
                    </ul>
                </div>

            </div>

        </GuideBtnWrapper>
    )
}

export default GuideBtn;