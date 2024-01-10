import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'

const ButtonShowRefWrapper = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--sys-secondary);
    font-size: 13px;
    line-height: 1.2307;
`

const ButtonShowRef = ({targetRef, defaultShow, children})=>{
    const [statusShow, setStatusShow] = useState(defaultShow)
    
    useEffect(
        ()=>{
            if( statusShow === true ) {
                targetRef.current.classList.add("show")
            } else if (statusShow === false) {
                targetRef.current.classList.remove("show")
            }
    },)
    
    return(
        <ButtonShowRefWrapper onClick={
                ()=>{
                    setStatusShow(!statusShow)
                }
            }
            className="button-show-ref"
        >
            {children}
            <img src={`/image/icon/icon_arrow_${statusShow?"up":"down"}_gray.svg`} alt={statusShow?"추가 내용 숨기기":"추가 내용 표시"} />
        </ButtonShowRefWrapper>
    )
}

export default ButtonShowRef;