import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const HeaderButtonBackWrapper = styled.header`
    display: flex;
    align-items: center;
    gap: 6px;
    width:100%;
    padding: 4px 58px 4px 4px;
    position:relative;
    &.fixed{
        position: fixed;
        top: 0;
        z-index: 256;
        h1 {
            display: none;
        }
        &.background-white-opacity {
            background-color: color-mix(in srgb, var(--sys-background) 80%, transparent);
            h1 {
                display: block;
            }
    }
    }
    
    h1{
        flex: 1 0 auto;
        font-size: 20px;
        font-weight:bold;
        text-align: center;
        width: calc(100% - 96px);
        line-height:1.2;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: var(--sys-primary);
    }
    a, button {
        padding: 12px;
        >img {
            display: block;
            width: 24px;
        }
    } 
`
const HeaderButtonBack = ({headline, link, fixed, color}) => {
    const [userPositionY, setUserPositionY] = useState(window.scrollY);
    const navigate = useNavigate();
    useEffect(()=>{
        if(fixed && fixed.background){
            window.addEventListener("scroll",()=>{
                setUserPositionY(window.scrollY)
            })
        }
    })

    
    return (
        <HeaderButtonBackWrapper className={`${fixed&&fixed.status?"fixed":""} ${color} ${fixed && fixed.background && userPositionY?"background-white-opacity":""}`}>
            <Link 
                to={
                    link === "back" ? 
                    null 
                    : link
                } 
                className="arrowPrev"
                onClick={
                    ()=>{
                        if(link==="back"){
                            navigate(-1)
                        }
                    }
                }
            >
                {
                    color === "white"?
                    <img src="/image/icon/icon_arrow_left_white.svg" alt="뒤로가기" />:
                    <img src="/image/icon/icon_arrow_left_black.svg" alt="뒤로가기" />
                }
                
            </Link>
            {
                headline?
                <h1>{headline}</h1>
                :null
            }
            
        </HeaderButtonBackWrapper>
    );
}

export default HeaderButtonBack;