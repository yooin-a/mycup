import React,{useEffect} from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowWhite } from "../../assets/icons/chevronRight.svg";
import setAriaLabel from '../../component/accessibility/set_aria_label';

const ScrollContentLi = styled.li`
  width: 320px;
  max-width: 320px;
  position:relative;
  background:#cfcfcf;
  border-radius: 10px;
  overflow: hidden;
  margin-right:20px;
  flex: 1 0 auto;
  min-height: 180px;
  &:nth-of-type(1){
    margin-left: 20px;
  }
  a{
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 14px 20px;
    background-size: auto 100%;
    >div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 29px;
      line-height: 1.33;
      mark {
        font-size: 12px;
        font-weight: bold;
        border-radius: 20px;
        color:var(--sys-on-primary);
        padding: 3px 12px;
        display:inline-block;
        background: color-mix(in srgb, var(--sys-primary) 60%, transparent);
      }
      span {
        font-size: 12px;
        font-weight: bold;
        color: var(--sys-on-primary);
        display: inline-block;
        text-shadow: 0 1px 3px rgba(17, 17, 17, 0.5);
      }
    }
    p {
      margin-top: -2px;
      font-size: 1.25rem;
      line-height: 1.4;
      font-weight: bold;
      color: var(--sys-on-primary);
      text-shadow: 0 1px 20px rgba(17, 17, 17, 0.5);
    }
    .playbtn {
      display: block;
      width: 48px;
      height:48px;
      margin: 0 auto;
    }
    .btn-arrow {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: 2px;
        text-align: center;
        svg {
            filter: drop-shadow( 0 1px 3px rgba(17, 17, 17, .5));
        }
    }
  }

`

const ScrollContent = (props) => {
    useEffect(()=>{
      setAriaLabel();
    },[])
    return (
        <ScrollContentLi>
          <Link to="#"
            style={
              {
                backgroundImage: `url(${props.urlThumbnail})`
              }
            }
            sal="true"
          >
            <div>
              <mark>
                {props.keyword}
              </mark>
              <span>
                {props.joinText}
                <div className="btn-arrow">
                  <ArrowWhite width="5" height="9" fill="var(--sys-on-primary)"/>
                </div>
              </span>
            </div>
            {
              props.isVideo ?
              <img src="/image/icon/icon_play_white.png" alt="" className="playbtn"/>
              : null
            }
            <p>
              {props.headline}
            </p>
          </Link>
        </ScrollContentLi>
    )
}

export default ScrollContent;