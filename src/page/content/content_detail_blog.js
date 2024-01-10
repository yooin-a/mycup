import React from 'react';
import styled from '@emotion/styled'
import HeaderButtonBack from '../../component/common/header_button_back'
import ContentNavBottom from "../../component/content/content_nav_bottom"
import ContentBox from '../../component/content/content_box'
import ContentOrigin from '../../component/content/content_origin'
import ContentSubstance from '../../component/content/content_substance'

const ContentDetailWrapper = styled.main`
    .content-headline-top-blog {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 0 20px 108px;
        /* 예시 이미지 */
        background-image: url("/image/temporary/background_content_headline_top.jpg");
        /* 예시 이미지 */
        background-size: 100% auto;
        font-weight: 700;
        aspect-ratio: 375/456;
        color: var(--sys-on-primary);
        mark {
            display: inline-flex;
            padding: 7px 20px 5px;
            background-color: var(--sys-primary);
            color:var(--sys-on-primary);
            border-radius: 99999px;
            margin-bottom: 24px;
            font-size: .9375rem;
        }
        h1 {
            font-size: 28px;
            line-height: 1.2857;
            color:var(--sys-on-primary);
        }
    }
    .recommend-wrapper{
        padding: 24px 0;
        background-color: var(--sys-on-primary);
        h2 {
            padding-left: 20px;
            margin-bottom: 16px;
            font-weight: 700;
            font-size: 17px;
            line-height: 1.1764;
        }
        ul {
            display: flex;
            padding: 0 20px;
            white-space: nowrap;
            overflow-x: auto;
            gap: 20px;
            li {
                width: 150px;
                min-width: 150px;
                max-width: 150px;
            }
        }
      }
`

const ContentDetail = ()=>{
    let arrContentExample = [];
    for(var i = 0; i < 10; i++){
        arrContentExample.push(
            <li key={i}>
                <ContentBox
                    content={
                        {
                            link:"/content/detail-video",
                            imgSrc: "/image/temporary/content_thumb_square_1.jpg",
                            headline: "'연봉'보다 중요한 이것? 업계사람들",
                            liked: false,
                            numLike: 36,
                        }
                    }
                />
            </li>
        )
    }
    return(
        <ContentDetailWrapper>
            <HeaderButtonBack link="back" fixed={ {status:true, background:true} } headline="콘텐츠 타이틀이 입력되는 공간입니다"/>
            <section className="content-headline-top-blog">
                <mark>
                    콘텐츠
                </mark>
                <h1>
                콘텐츠 타이틀이<br aria-hidden="true"/>입력되는 공간입니다
                </h1>
            </section>
            <section>
                <ContentSubstance/>
                <ContentOrigin/>
            </section>
            <section>
                <article className="recommend-wrapper">
                    <h2>
                        추천 콘텐츠
                    </h2>
                    <ul className="content-list-wide">
                        {arrContentExample}
                    </ul>
                </article>
            </section>
            <ContentNavBottom padding={true}/>
        </ContentDetailWrapper>
    )
}
export default ContentDetail;