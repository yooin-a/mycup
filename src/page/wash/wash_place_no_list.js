import styled from '@emotion/styled'
import SearchBox from '../../component/input/search_common'
import ToggleSwitch from '../../component/button/toggleSwitch_common'
import Subheader from '../../component/common/subHeader'
import BottomNavigator from '../../component/common/bottom_navigator'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';

const WashMain = styled.main`
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
                max-width: auto;
                padding-top:5px;
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
            .disabled {
                opacity:.3;
            }
        }
    }
    .place_no_list {
        text-align: center;
        margin-top:56px;
        font-size: 1.0625rem;
        img {
            display: block;
            margin: 0 auto 48px;
        }
        b {
            margin-bottom:16px;
            display: block;
        }
        span {
            color: var(--sys-secondary);
        }
    }
`

const Wash = () => {
    useEffect(()=>{
        setAriaLabel();
      },[])
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
                        <p className='disabled'>바로 이용 가능한 장소</p>
                        <label htmlFor=""><ToggleSwitch/></label>
                    </li>
                </ul>

                <div className="place_no_list">
                    <img src="/image/wash/wash_search_img.png" alt="" />
                    <b>표시할 장소가 없어요.</b>
                    <span sal="true" role='text'>다른 단어로 검색해보면 어떨까요?<br/>장소명, 주소를 검색할 수 있어요.</span>
                </div>
            </section>

            <BottomNavigator location="wash"/>

        </WashMain>
    )
}

export default Wash;