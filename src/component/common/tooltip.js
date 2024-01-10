import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled'

const TooltipWrapper = styled.div`
display: inline-flex;
    .tooltipBtn {
        position:relative;
        width:14px;
        height:14px;
        top: 1px;
        margin-left: 4px;
        background: url(/image/icon/ic_tooltip_black.svg) center no-repeat;
        background-size: 100%;
    }
    .tooltipText {
        display:none;
        position:absolute;
        right:20px;
        background:#fff;
        padding:10px 15px;
        border-radius:10px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
        text-align:left;
        z-index: 99;
        font-size: .8125rem;
        line-height: 1.25rem;
        margin-top: 20px;
        margin-left: 20px;
        &.on {
            display: block;
        }
        &::after{
            content: '';
            display: block;
            position: absolute;
            top:-2px;
            right:7px;
            width:7px;
            height: 7px; 
            background: #fff;
            transform:rotate(-45deg);
        }
        &.left {
            left: auto;
            right: auto;
            margin-left: 0;
            margin-right: 20px;
            &::after{
                right: auto;
                left: 7px;
            }
        }
    }
`
const Tooltip = ({content,children, align})=>{
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const tooltipBtn = useRef(null)
    const tooltipMessageBox = useRef(null)
    useEffect(()=>{
        window.addEventListener("click", (event)=>{

            if(isTooltipVisible) {
                tooltipBtn.current.setAttribute("tabindex","-1");
                tooltipBtn.current.focus();
            }

            setTooltipVisible(false)

            if( event.target === tooltipBtn.current ){
                if(isTooltipVisible){
                    setTooltipVisible(false)
                } else {
                    setTooltipVisible(true)
                    tooltipMessageBox.current.setAttribute("tabindex","-1");
                    tooltipMessageBox.current.focus();
                }
                
            }
        })
    })
    

    return(
        <TooltipWrapper>
            <button 
                ref={tooltipBtn} 
                className='tooltipBtn'
                aria-label="툴팁"
            >
                {children}
            </button>
            <div ref={tooltipMessageBox} className={`${align} tooltipText ${isTooltipVisible?"on":""}`}>{content}</div>

        </TooltipWrapper>
    )
}

export default Tooltip;