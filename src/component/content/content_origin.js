import React from 'react';
import styled from '@emotion/styled'
import ButtonCommon from '../../component/button/button_common'
import { Link } from 'react-router-dom'

const ContentOriginWrapper = styled.article`
    padding: 24px 20px 36px;
    .link-origin {
        display: block;
        width: 100%;
        padding: 16px 20px 13px;
        background-color: var(--sys-on-primary);
        margin-bottom: 12px;
        border-radius: 10px;
        font-weight: 600;
        line-height: 1.1875;
        background-image: url("/image/icon/icon_arrow_right_black.svg");
        background-size: 24px 24px;
        background-repeat: no-repeat;
        background-position: right 8px center;
    }
    .list-hashtag {
        display: flex;
        font-size: 15px;
        line-height: 1.2666;
        color: var(--sys-secondary);
        gap: 24px;
        margin-top: 24px;
    }
`

const ContentOrigin = ()=>{
    return(
        <ContentOriginWrapper>
            <Link to="/content/origin-notice" className="link-origin">
                출처 및 고지사항
            </Link>
            <ButtonCommon 
                color="black" 
            >
                Command Button
            </ButtonCommon>
            <ul className="list-hashtag">
                <li># 해시태그</li>
                <li># 해시태그</li>
                <li># 해시태그</li>
            </ul>
        </ContentOriginWrapper>
    )
}

export default ContentOrigin;