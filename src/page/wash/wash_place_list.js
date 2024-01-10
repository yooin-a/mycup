import styled from '@emotion/styled'
import SearchBox from '../../component/input/search_common'
import ToggleSwitch from '../../component/button/toggleSwitch_common'
import Subheader from '../../component/common/subHeader'
import PlaceListDetail from '../../component/wash/place_list_detail'
import BottomNavigator from '../../component/common/bottom_navigator'

const WashMain = styled.main`
    .arrowPrev {
        display: none;
    }
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
    .place_list {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 24px;
        > li {
            width:100%;
            display:flex;
            align-items: center;       
            padding:0 0 24px; 
            border-bottom:1px solid #cfd4e0;            
            @media screen and (min-width: 768px) {
            width: calc(50% - 12px);
            }
        }
    }
`

const Wash = () => {
    return (
        <WashMain>

            <Subheader subTitle='이용 장소 선택' btnType="washMap"/>

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

                <ul className="place_list">
                    <li>
                        <PlaceListDetail
                            title='투썸플레이스대구삼성크리에이티브캠퍼스점'
                            address='부산광역시 강서구 녹산산단 382로 14번가길 10~29번지(송정동)'
                            distance='1.5 km'
                        />
                    </li>
                    <li>
                        <PlaceListDetail
                            title='주식회사 오피스 오피스 오피스 7층'
                            address='서울 중구 퇴계로 100(회연동2가)'
                            distance='560 m'
                        />
                    </li>
                    <li>
                        <PlaceListDetail
                            title='스타벅스 서울웨이브아트센터점 1번세척기'
                            address='서울 중구 퇴계로 100(회연동2가)최대 40자, 2줄 까지 노출'
                            distance='1.5 km'
                        />
                    </li>
                    <li>
                        <PlaceListDetail
                            title='투썸플레이스대구삼성크리에이티브캠퍼스점'
                            address='부산광역시 강서구 녹산산단 382로 14번가길 10~29번지(송정동)'
                            distance='1.5 km'
                        />
                    </li>
                    <li>
                        <PlaceListDetail
                            title='주식회사 오피스 오피스 오피스 7층'
                            address='서울 중구 퇴계로 100(회연동2가)'
                            distance='560 m'
                        />
                    </li>
                    <li>
                        <PlaceListDetail
                            title='스타벅스 서울웨이브아트센터점 1번세척기'
                            address='서울 중구 퇴계로 100(회연동2가)최대 40자, 2줄 까지 노출'
                            distance='1.5 km'
                        />
                    </li>
                </ul>
            </section>
            <BottomNavigator location="wash"/>
        </WashMain>
    )
}

export default Wash;