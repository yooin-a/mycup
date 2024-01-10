import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import ScrollContent from './scroll_content'

const ScrollContentWrapperSection = styled.section`
    width: 100%;
    margin-bottom: 32px;
    .scroll-content-list {
        width:100%;
        display:flex;
        flex-wrap:nowrap;
        overflow-x: auto;
        white-space: nowrap;
    }
    .see-more {
        min-width: 159px;
        background-color: var(--sys-on-primary);
        border-radius: 10px;
        margin-right:20px;
        a {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            color: var(--sys-secondary);
            font-size: 14px;
            gap: 14px;
            img {
                width: 8px;
                height: auto;
            }
        }

    }
`

const ScrollContentWrapper = () => {

    return (
        <ScrollContentWrapperSection className="scroll-content-wrapper">
            <ul id="tab_con1" className="scroll-content-list">
                <ScrollContent
                    keyword="트렌드"
                    headline={
                        <>
                            올해 여름을 즐길<br/>
                            추천 여행지 BEST 10
                        </>
                    }
                    joinText="읽어보기"
                    urlThumbnail="/image/thumbnail/scroll_content/thumbnail_scroll_content_1.png"
                    isVideo={true}
                />
                <ScrollContent
                    keyword="환경 이슈"
                    headline={
                        <>
                            이 귀염둥이가<br/>
                            멸종위기 동물?
                        </>
                    }
                    joinText="읽어보기"
                    urlThumbnail="/image/thumbnail/scroll_content/thumbnail_scroll_content_2.png"
                    isVideo={false}
                />
                <ScrollContent
                    keyword="밸런스 게임"
                    headline={
                        <>
                            올 여름 최고의 디저트는?<br />
                            생과일 vs 탕후루
                        </>
                    }
                    joinText="참여하기"
                    urlThumbnail="/image/thumbnail/scroll_content/thumbnail_scroll_content_3.png"
                    isVideo={false}
                />
                <li className="see-more">
                    <Link to="/content">
                        더보기
                        <img src="/image/icon/ic_chevron_right_gray.svg" alt="" />
                    </Link>
                </li>
            </ul>
        </ScrollContentWrapperSection>
    )
}

export default ScrollContentWrapper;