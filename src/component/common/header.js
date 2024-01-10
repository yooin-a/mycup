import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const HeaderWrap = styled.header`
  width: 100%;
  min-height:47px;
  padding: 0 4px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background: no-repeat top/100% url(/image/home/background_home.png);
  }
  h1 {
    padding: 12px 0;
    img {
      width: 87px;
      height: 20px;
      display:block;
    }
  }
  .btn-alarm {
    position:relative;
    padding: 15px 16px;
    box-sizing: border-box;
    height: 48px;
    img {
      width: 16px;
    }
    &.active{
      &:after{
        content: '';
        width:6px;
        height:6px;
        border-radius:50%;
        background-color:var(--sys-sub);
        position:absolute;
        top:12px;
        right:12px
      }
    }
  }
`

const Header = (props) => {
    return (
        <HeaderWrap className={props.fixed ? 'fixed':null}>
          <h1><img src="/image/logo/logo.svg" alt="my cup" /></h1>
          <Link to="/notification" className="btn-alarm active" aria-label="새로운 내용 있음, 알림 페이지.">
            <img src="/image/icon/icon_bell_stroke_black.png" alt="" />
          </Link>
        </HeaderWrap>
    )
}

export default Header;