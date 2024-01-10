import React,{useEffect} from 'react';
import setAriaLabel from '../../component/accessibility/set_aria_label';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const EventBoxWrapper = styled.li`
    a {
        margin-bottom:16px;
        border-radius:20px;
        padding:20px;
        display:flex;
        align-items: center;
        &.blue {
            background-color:#e4edff
        }
        &.green {
            background-color:#f1feec
        }
        &.white {
            background-color:#fff;
        }
        .eventText {
            mark {
                display:inline-block;
                color:var(--sys-on-primary);
                background-color:color-mix(in srgb, var(--sys-primary) 60%, transparent);
                margin-bottom:10px;
                padding:2px 12px;
                border-radius:12px;
                font-size: .8125rem;
            }
            p.eventTitle {
                font-weight:bold;
                margin-bottom:26px;
                span {
                    margin-top:6px;
                    display:block;
                    color:var(--sys-secondary);
                    font-size: .8125rem;
                    line-height: 1.0625rem;
                    font-weight: normal;
                }
            }
            
            p.eventDate {
                font-size: .8125rem;
                line-height: 1.0625rem;
                color:var(--sys-secondary);
                &.eventWin {
                    color:#1d76e8;
                    font-weight: 500;
                }
                &.eventEnd {
                    color:#5a6979
                }
            }
        }
        img {
            margin-left:auto
        }
        &.eventEndBox {
            opacity:30%;
        }
    }
`


const EventBox = ({color, link, keyword, title, dateStatus, dateAriaLabel, imgSrc})=>{
    useEffect(()=>{
        setAriaLabel();
      },[])
    return(

        <EventBoxWrapper>
            <Link to={link} className={`${color} ${dateStatus==="종료"?"eventEndBox":""}`} sal="true">
                <div className='eventText'>
                    <mark>{keyword}</mark>
                    <p className='eventTitle'>
                        {title}
                    </p>
                    {
                        dateStatus === "종료" || dateStatus === "당첨자발표중"?
                            dateStatus === "종료"?
                            <p className="eventDate eventEnd">종료</p>
                            :<p className='eventDate eventWin'>당첨자발표중</p>
                            :<p className='eventDate' aria-label={dateAriaLabel}>{dateStatus}</p>
                    }
                    
                </div>
                <img src={imgSrc} alt="" />
            </Link>
        </EventBoxWrapper>
    )
}

export default EventBox;