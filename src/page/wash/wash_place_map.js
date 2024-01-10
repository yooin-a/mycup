import styled from '@emotion/styled'
import SearchBox from '../../component/input/search_common'
import ToggleSwitch from '../../component/button/toggleSwitch_common'
import Subheader from '../../component/common/subHeader'
import QuickBtnFixed from '../../component/button/quickbutton_common'
import PlaceListDetail from '../../component/wash/place_list_detail'
import BottomNavigator from '../../component/common/bottom_navigator'
import { useState } from "react"

const WashMain = styled.div`
    position: relative;
    .keyword-wrapper {
        display: flex;
        gap: 5px;
        margin-top:16px;
        padding:16px 20px 8px;
        align-items: center;
        border-top:1px solid #cfd4e0;
        li {
            height: 32px;

        }
            input[type=checkbox]{
                display: none;
            }
            input[type=checkbox]+label{
                display: inline-block;
                cursor: pointer;
                height: 32px;
                width:80px;
                padding-top:3px;
                overflow: hidden;
                text-align: center;
                font-weight:bold;
                background-color: var(--sys-on-primary);
                color: var(--sys-primary);
                border-radius: 16px;
            }
            input[type=checkbox]:checked+label{
                background-color: var(--sys-primary);
                color: var(--sys-on-primary);
            }
    }
    .place_favorit_Chk {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:14px 0;
        li {
            display: flex;
            gap: 10px;
            align-items: center;
        }
    }
    .placeMap {
        position: relative;
        .mapBox {
            display: block;
            width: 100%;
            height: calc(100vh - 265px);
            background: #e5e5e5;
        }
        .myLocation {
            width: 16px;
            height:16px;
            background:#19dbba;
            border-radius: 50px;
            position: absolute;
            top:60px;
            left:45%;
            outline:16px solid rgba(0,0,0,0.3)
        }
        .searchMap {            
            position: absolute;
            img {
                margin:0 auto 6px;
                display: block;
            }
            mark {
                display: inline-block;
                background: var(--sys-primary);
                color:var(--sys-on-primary);
                border-radius: 32px;
                overflow: hidden;
                padding: 4px 8px 2px;
                font-size: .75rem;
                font-weight: 500;
            }
        }
    }

    .bottomsheetWrap {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height:100vh;
        z-index: 2;
    }

    .bottomsheetBox {
        position:fixed;
        bottom: 69px;
        left: 0;
        z-index: 3;
        width: 100%;
        background:#fff;
        border-radius: 20px 20px 0 0;
        padding: 20px;
    }
`

const Wash = () => {
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleButtonClick = () => {
        setBottomSheetOpen(!isBottomSheetOpen);
    };

    return (
        <WashMain>

            <Subheader subTitle='이용 장소 선택' btnType="washList"/>

            <SearchBox placeholder="장소 또는 주소를 입력하세요"/>

            <ul className="keyword-wrapper">
                <li>
                    <input type="checkbox" name="keyword1" id="all"/>
                    <label htmlFor="all" aria-checked="false" aria-label='선택안함, 전체, 버튼'>전체</label>
                </li>
                <li>
                    <input type="checkbox" name="keyword2" id="starbucks" checked/>
                    <label htmlFor="starbucks" aria-checked="true" aria-label='선택함, 스타벅스, 버튼'>스타벅스</label>
                </li>
                <li>
                    <input type="checkbox" name="keyword3" id="office" checked/>
                    <label htmlFor="office" aria-checked="true" aria-label='선택함, 오피스, 버튼'>오피스</label>
                </li>
                <li>
                    <input type="checkbox" name="keyword4" id="campus" />
                    <label htmlFor="campus" aria-checked="false" aria-label='선택안함, 캠퍼스, 버튼'>캠퍼스</label>
                </li>
            </ul>

            <section className="wrap">

                <ul className='place_favorit_Chk'>
                    <li>
                        <img src="/image/wash/ic_star_gray.svg" alt="" />
                        <p>즐겨찾기</p>
                    </li>
                    <li>
                        <p>바로 이용 가능한 장소</p>
                        <label htmlFor=""><ToggleSwitch/></label>
                    </li>
                </ul>
            </section>

            <div className="placeMap">
                <div className="mapBox"></div>
                <div className="myLocation" aria-label='내 위치, 서울특별시 강남구 삼성동 1-3' role='button' tabIndex={0}></div>
                <button className="searchMap" style={{top:'150px', left:'30px'}} onClick={handleButtonClick}>
                    <img src="/image/wash/ic_map_pin.png" alt="" />
                    <mark>스타벅스 명동점</mark>
                </button>
                <button className="searchMap" style={{top:'280px', right:'60px'}} onClick={handleButtonClick}>
                    <img src="/image/wash/ic_map_pin.png" alt="" />
                    <mark>스타벅스<br/>서울웨이브아트센터점</mark>
                </button>                
            </div>

            {isBottomSheetOpen && (
                <>
                    <div className="bottomsheetWrap" onClick={handleButtonClick}></div>
                    <div className="bottomsheetBox">
                        <PlaceListDetail
                            title='투썸플레이스대구삼성크리에이티브캠퍼스점'
                            address='부산광역시 강서구 녹산산단 382로 14번가길 10~29번지(송정동)'
                            distance='1.5 km'
                        />
                    </div>
                </>
            )}

            <QuickBtnFixed 
                style={{bottom:'89px'}}
                btnTitle='현재위치'
                Children={<img src="/image/wash/ic_my_location.svg" alt="" />}
            >
            </QuickBtnFixed>

            <BottomNavigator location="wash"/>

        </WashMain>
    )
}

export default Wash;