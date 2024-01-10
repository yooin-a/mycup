import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import HeaderButtonBack from '../../component/common/header_button_back'
import ContentNavBottom from "../../component/content/content_nav_bottom"
import ButtonCommon from '../../component/button/button_common'

const ContentDetailShortWrapper = styled.main`
    .slide-scroll-wrapper{
        >div {
            display: flex;
            flex-flow: column;
            height: 100vh;
            .iframe-video {
                display: block;
                width: 100%;
                flex: 1 0 auto;
            }
            .link-title-wrapper {
                padding: 16px 20px 7px;
                .link-environmental {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size:13px;
                    line-height: 1.2307;
                    color: var(--sys-sub);
                    font-weight: 700;
                    margin-bottom: 8px;
                }
                >div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    h1 {
                        font-weight: 700;
                        font-size: 17px;
                        line-height: 1.4118;
                    }
                }
            }
        }

    }
`

const ContentDetailShort = ()=>{
    return(
        <ContentDetailShortWrapper>
            <HeaderButtonBack link="back" fixed={{status:true, background:false}} color="white"/>
            <div className="slide-scroll-wrapper">
                {
                    Array.from({ length: 10 }, (element, index) => (
                        <div key={index}>
                            <iframe 
                                className="iframe-video"
                                src="https://www.youtube.com/embed/uRSp2exhtTk" 
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                            <section>
                                <article className="link-title-wrapper">
                                    <Link to="/content/origin-notice" className="link-environmental">
                                        환경이슈
                                        <img src="/image/icon/icon_info_stroke_blue.svg" alt="" />
                                    </Link>
                                    <div>
                                        <h1>콘텐츠 타이틀이 입력되는<br/>공간입니다.</h1>
                                        <ButtonCommon 
                                            size="small" 
                                            color="white" 
                                        >
                                            button
                                        </ButtonCommon>
                                    </div>
                                </article>
                                <ContentNavBottom positionStatic={true}/>
                            </section>
                        </div>
                    ))
                }
            </div>
        </ContentDetailShortWrapper>
    )
}
export default ContentDetailShort;