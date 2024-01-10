import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const SearchPageWrapper = styled.div`
    .searchBox {
        width: 100%;
        display: flex;
        padding:0 21px 0 16px;
        height:56px;
        border-bottom: 1px solid #cfd4e0;
        align-items: center;
        margin-bottom: 24px;
        .arrowPrev {
            margin-right: auto;
            display: block;
            font-size: 0;
        }
        label{
            width: 100%;
            margin-left: 12px;
            input {
                border:0;
                width: 100%;
                height:45px;
                background-color: transparent;
                font-size: .9375rem;
                &:focus {
                    outline: none;
                }
            }
        }
    }
    .searchList {
        >div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            font-size: .9375rem;
            >button {
                color:var(--sys-secondary);
            }
        }
        ul li {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`

const SearchPage = () => {
    return (
        <SearchPageWrapper>
            <div className="searchBox">
                <Link to="/home" className='arrowPrev'>
                    <img src="/image/icon/ic_chevron_left.svg" alt="" />
                </Link>
                <label htmlFor="">
                    <input type="text" placeholder='장소 또는 주소를 입력하세요'/>
                </label>
                <button aria-label='검색'><img src="/image/icon/ic_search_black.svg" alt="" /></button>
            </div>

            <div className="wrap">
                <div className="searchList">
                    <div>
                        <b>최근 검색어</b>
                        <button>전체삭제</button>
                    </div>
                    <ul>
                        <li>
                            마곡 스타벅스
                            <button aria-label='삭제'><img src="/image/icon/ic_close_black.svg" alt="" /></button>
                        </li>
                        <li>
                            여의도 스타벅스
                            <button aria-label='삭제'><img src="/image/icon/ic_close_black.svg" alt="" /></button>
                        </li>
                        <li>
                            스타벅스
                            <button aria-label='삭제'><img src="/image/icon/ic_close_black.svg" alt="" /></button>
                        </li>
                        <li>
                            서울대학교
                            <button aria-label='삭제'><img src="/image/icon/ic_close_black.svg" alt="" /></button>
                        </li>
                        <li>
                            용산역
                            <button aria-label='삭제'><img src="/image/icon/ic_close_black.svg" alt="" /></button>
                        </li>
                    </ul>
                </div>
            </div>

        </SearchPageWrapper>
    )
}

export default SearchPage;