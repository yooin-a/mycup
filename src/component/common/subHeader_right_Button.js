import styled from '@emotion/styled'
// import { Link } from 'react-router-dom'

const SubHeaderRightBtn = styled.div`
    margin-left: auto;
    
    button {
        padding: 12px;
        &:disabled,
        &[disabled]{
            opacity:.3;
        }
        >img {
            display: block;
        }
    } 
`
const subHeaderRightButton = ({btnOnClick, btnDisabled, btnType}) => {
    return (
        <SubHeaderRightBtn>
            {/* 알림 삭제 버튼 */}
            {
                btnType === "notiDelete"?
                <button 
                    aria-label="알림 삭제" 
                    onClick={btnOnClick ? btnOnClick : null }
                    className="button-show-ui-delete"
                    disabled={
                        btnDisabled === true ?
                        false
                        :true
                }>
                    <img src="/image/icon/ic_trash.svg" alt="" />
                </button>
                :null
            }

            {/* 세척 지도 버튼 */}
            {
                btnType === "washMap"?
                <button>
                    <img src="/image/icon/icon_map_stroke_black.svg" alt="지도" />
                </button>
                :null
            }

            {/* 세척 지도 버튼 */}
            {
                btnType === "washList"?
                <button>
                    <img src="/image/icon/icon_wash_map_list_black.svg" alt="지도" />
                </button>
                :null
            }
            
        </SubHeaderRightBtn>
    );
}

export default subHeaderRightButton;