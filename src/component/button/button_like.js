import React, { useState } from 'react';
import styled from '@emotion/styled'

const ButtonLikeWrapper = styled.button`
    font-weight: 700;
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 1.2307;
    color: var(--sys-primary);
    img {
        display: block;
        width: 24px;
        height: 24px;
        margin-right: 6px;
    }
    &.small {
        img {
            width: 14px;
            height: 14px;
            margin-right: 4px;
        }
    }
`

const ContentNavBottom = ({status, type})=>{
    const [liked, setLiked] = useState(status.liked);
    return(
        <ButtonLikeWrapper aria-label={`사용자 ${status.numLike} 명이 좋아함`}
            className={`
                button-like
                ${
                    type
                }
            `}
            aria-selected={liked}
            onClick={()=>{
                setLiked(!liked)
            }}
        >
            <img src={`/image/icon/icon_like_${liked?"fill_red":"stroke_black"}.svg`} alt="" />
            {status.numLike}
        </ButtonLikeWrapper>
    )
}

export default ContentNavBottom;