import styled from '@emotion/styled'

const SearchBoxWrapper = styled.div`
    background-color:var(--sys-on-primary);
    width:calc(100% - 40px);
    margin:0 auto 12px;
    border-radius:24px;
    padding: 12px 24px;

    .search{        
        display: flex;
        align-items: center;
        justify-content: space-between;
        input[type="text"] {
            border:0;
            &:focus {
                outline:none
            }
        }
        button {
            width:20px;
            height:20px;
            background: url(/image/icon/ic_search_black.svg) center no-repeat;
            background-size:15px;
        }        
    }
`

const SearchBox = ({placeholder}) => {
    return (
        <SearchBoxWrapper>
            <div className="search">
                <input type="text" placeholder={placeholder}/>
                <button aria-label='검색'></button>
            </div>
        </SearchBoxWrapper>
    );
}

export default SearchBox;