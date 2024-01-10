import React, {useEffect} from 'react';
import styled from '@emotion/styled'
import ButtonLike from "../button/button_like"

const ContentNavBottomWrapper = styled.section`
    nav {
        position:fixed;
        display: flex;
        justify-content: space-between;
        bottom: 0;
        left:0;
        width: 100%;
        box-sizing: border-box;
        font-weight: 700;
        white-space: normal;
        padding: 4px 20px;
        background-color: var(--sys-on-primary);
        &.static {
            position: static;
        }
        .button-share {
            display: flex;
            padding: 12px;
        }
    }

`

const ContentNavBottom = ({padding, positionStatic})=>{
    useEffect(() => {
        if(padding){
            document.querySelectorAll("img").forEach((element)=>{
                element.addEventListener("load",()=>{
                    document.querySelector(".content-nav-bottom-wrapper").style.height = document.querySelector(".content-nav-bottom").offsetHeight+"px"
                })
            })
        }
    }, [padding]);
    return(
        <ContentNavBottomWrapper className="content-nav-bottom-wrapper">
            <nav className={`content-nav-bottom ${positionStatic?"static":""}`}>
                <ButtonLike status={{liked:false, numLike:36}}/>
                <button className="button-share" onClick={()=>{
                    alert("OS 공유 패널 제공")
                }}>
                    <img src="/image/icon/icon_share_fill_black.svg" alt="공유하기" />
                </button>
            </nav>
        </ContentNavBottomWrapper>
    )
}

export default ContentNavBottom;