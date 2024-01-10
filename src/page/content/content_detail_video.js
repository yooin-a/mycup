import React, {useState} from 'react';
import styled from '@emotion/styled'
import HeaderButtonBack from '../../component/common/header_button_back'
import ContentNavBottom from "../../component/content/content_nav_bottom"
import ContentBox from '../../component/content/content_box'
import ContentOrigin from '../../component/content/content_origin'
import ContentSubstance from '../../component/content/content_substance'

const ContentDetailWrapper = styled.main`
    .content-headline-top-video {
        padding-top: calc( 100% / 16 * 9 );
        .video-wrapper {
            position: fixed;
            top:0;
            width: 100%;
            > .button-video-play {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                aspect-ratio: 16/9;
                overflow: hidden;
                .thumbnail-image {
                    display: block;
                    width: 100%;
                }
                .icon-play {
                    position: absolute;
                    display: block;
                    width: 48px;
                    height: 48px;
                }
            }
            .iframe-video {
                display: block;
                width: 100%;
                aspect-ratio: 16/9;
            }
        }
        > article {
            padding: 20px;
            background-color: var(--sys-on-primary);
            font-weight: 700;
            mark {
                display: inline-flex;
                padding: 8px 16px;
                font-size: 13px;
                line-height: 1.2307;
                background-color: var(--sys-primary);
                color: var(--sys-on-primary);
                border-radius: 99999px;
                margin-bottom: 12px;
            }
            h1 {
                font-size: 20px;
                line-height: 1.4;
                color: var(--sys-primary);
            }
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
    const [displayIframeVideo, setDisplayIframeVideo] = useState(false);

    let arrContentExample = [];
    for(var i = 0; i < 10; i++){
        arrContentExample.push(
            <li key={i}>
                <ContentBox
                    content={
                        {
                            link:"/content/detail",
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
            {/* video type일 경우엔 headline 미입력 */}
            <HeaderButtonBack link="back" fixed={{status:true, background:false}}/>
            <section className="content-headline-top-video">
                <div className="video-wrapper">
                    {
                        displayIframeVideo === false?
                        <button className="button-video-play" aria-label="유튜브 동영상 표시" onClick={()=>{
                                alert("Wifi 바로 재생, LTE/5G 환경은 <데이터 연결 시 과금> 팝업 출력(OS별), 팝업 확인 후 영상 재생 제공")
                                setDisplayIframeVideo(true);
                            }}
                        >
                            <img src="/image/temporary/thumbnail_content_headline_video_top.jpg" alt="" className="thumbnail-image"/>
                            <img src="/image/icon/icon_play_white.png" alt="" className="icon-play"/>
                        </button>
                        :<iframe 
                            className="iframe-video"
                            src="https://www.youtube.com/embed/n6WaTObHRJM?si=cWYe5m5hRtynOGic" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    }

                </div>
                <article>
                    <mark>
                        환경이슈
                    </mark>
                    <h1>
                        콘텐츠 타이틀이 입력되는 공간입니다. 최대 2줄까지 입력 할 수 있습니다.
                    </h1>
                </article>
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