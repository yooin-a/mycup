import React, { useEffect } from 'react';
import styled from '@emotion/styled'

const CheckboxInput = styled.input`
    width: 20px;
    height: 20px;
    appearance: none;
    margin: 0;
    &.off{
        display: none;
    }
    &::after{
        content:'';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 2px;
        background-color: var(--sys-on-primary);
    }
    &:checked {
        &::after{
            background-color: var(--sys-primary);
            background-image: url(/image/icon/icon_check_white.svg);
            background-repeat: no-repeat;
            background-size: 12px 6.8px;
            background-position: center center;
        }
    }
    &.circle::after {
        border-radius: 20px;
    }
`

const Checkbox = ({inputId, display, onChange, checked, shape})=>{
    useEffect(
        ()=>{
            if(checked===true){
                document.querySelector(".checkbox").setAttribute("checked", "true")
            }
            
        }
    )
    
    return(
        <CheckboxInput 
            type="checkbox" 
            id={inputId} 
            className={`checkbox ${display === false ? "off" : null} ${shape}`}
            onChange={
                onChange?
                onChange
                : null
            }
        />
    )
}

export default Checkbox;