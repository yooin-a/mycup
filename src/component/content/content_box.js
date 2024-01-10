import React from 'react';
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import ButtonLike from "../../component/button/button_like"

const ContentBoxWrapper = styled.div`
    font-weight: 700;
    white-space: normal;
    > a{
        > .img-thumb{
        display: block;
        width: 100%;
        border-radius: 10px;
        margin-bottom: 12px;
        }
        > p {
            font-size: 16px;
            line-height: 1.2941;
            margin-bottom: 10px;
        }
    }

`

const ContentBox = ({content})=>{
    return(
        <ContentBoxWrapper>
            <Link to={content.link}>
                <img src={content.imgSrc} alt="" className="img-thumb"/>
                <p>
                    {content.headline}
                </p>
            </Link>
            <ButtonLike status={{liked:content.liked, numLike:content.numLike}} type="small"/>
        </ContentBoxWrapper>
    )
}

export default ContentBox;