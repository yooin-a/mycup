import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import SubHeaderRightButton from '../../component/common/subHeader_right_Button'

const SubTopHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content:space-between; 
    width:100%;
    height:56px;
    position:relative;
    margin-bottom: 12px;
    h1{
        font-size: 20px;
        font-weight:bold;
        margin:0 auto;
        position: absolute;
        text-align: center;
        width: calc(100% - 96px);
        line-height:56px;
        left:48px;
        top:0;
    }
    a, button {
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
const Subheader = ({subTitle, btnType, btnOnClick, displayNotiContent}) => {
    return (
        <SubTopHeader>
            <Link to="/home" className='arrowPrev' aria-label='뒤로' role='button'>
                <img src="/image/icon/ic_chevron_left.svg" alt="" />
            </Link>
            <h1>{subTitle}</h1>

            <SubHeaderRightButton btnType={btnType} btnDisabled={displayNotiContent} btnOnClick={btnOnClick? btnOnClick : null}/>

        </SubTopHeader>
    );
}

export default Subheader;