import React from 'react';
import styled from '@emotion/styled'
import HeaderButtonBack from '../../component/common/header_button_back'
import Tabmenu from '../../component/common/tabmenu'
import SelectBox from '../../component/common/select_box'
import ContentBox from '../../component/content/content_box'

const ContentListWrapper = styled.main`
    .select-sort {
        display: block;
        margin: 0 20px 20px auto;
    }
    section{
      
      article{
        position: relative;
        padding-bottom: 24px;
        margin-bottom: 24px;
        &::after{
          /* border bottom */
          content: '';
          position: absolute;
          display: block;
          width: calc(100% - 40px);
          height: 1px;
          left: 20px;
          bottom: 1px;
          background-color: var(--sys-divider);
        }
        h2 {
          padding: 8px 20px;
          margin-bottom: 8px;
          font-weight: 700;
          font-size: 17px;
          line-height: 1.1764;
        }
        ul {
          display: flex;
          padding: 0 20px;
          &.content-list-wide {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 24px;
            li {
              width: 100%;
              @media screen and (min-width: 768px) {
                width: calc(50% - 12px);
              }
              @media screen and (min-width: 1024px) {
                width: calc((100%/3) - 16px);
              }
            }
          }
          &.content-list-short {
            white-space: nowrap;
            overflow-x: auto;
            gap: 20px;
            li {
              width: 135px;
              min-width: 135px;
              max-width: 135px;
            }
          }
        }
      }
    }
`

const ContentList = () => {
    return(
        <ContentListWrapper>
            <HeaderButtonBack link="/home" headline="읽을거리"/>
            <Tabmenu menu={
            {
              name:"keyword",
              list: [
                {
                  value: "all",
                  id: "keyword-all",
                  label: "전체",
                  checked: true
                },
                {
                  value: "trend",
                  id: "keyword-trend",
                  label: "#트랜드"
                },
                {
                  value: "marine",
                  id: "keyword-marine",
                  label: "#해양보호"
                },
                {
                  value: "recycle",
                  id: "keyword-recycle",
                  label: "#재활용"
                },
                {
                  value: "eco",
                  id: "keyword-eco",
                  label: "#친환경"
                }
              ]
            }
          }
          border={true}
          />
          <SelectBox 
          
            listOption={
                [
                    {
                        value:"latest",
                        content:"최신순"
                    },
                    {
                        value:"popularity",
                        content:"인기순"
                    }
                ]
            }

            id="select-sort"

            name="sort"
          
          />
          <section>
            <article>
                <ul className="content-list-wide">
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_1.jpg",
                            headline: "'연봉'보다 중요한 이것? 업계사람들",
                            liked: true,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_2.jpg",
                            headline: "내 커리어가 콘텐츠가 된다",
                            liked: false,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_2.jpg",
                            headline: "내 커리어가 콘텐츠가 된다",
                            liked: false,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_2.jpg",
                            headline: "내 커리어가 콘텐츠가 된다",
                            liked: false,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_2.jpg",
                            headline: "내 커리어가 콘텐츠가 된다",
                            liked: false,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_2.jpg",
                            headline: "내 커리어가 콘텐츠가 된다",
                            liked: false,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_2.jpg",
                            headline: "내 커리어가 콘텐츠가 된다",
                            liked: false,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_2.jpg",
                            headline: "내 커리어가 콘텐츠가 된다",
                            liked: false,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                </ul>
            </article>
            <article>
              <h2>
                숏 타임
              </h2>
              <ul className="content-list-short">
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_1.jpg",
                        headline: "'연봉'보다 중요한 이것? 업계사람들",
                        liked: false,
                        numLike: 36,
                      }
                    }
                  />
                </li>
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_2.jpg",
                        headline: "삼프로TV 김동환 #shorts #프로의...",
                        liked: true,
                        numLike: 36,
                      }
                    }
                  />
                </li>
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_3.jpg",
                        headline: "기획안과 기획자의 '페어링' 중요",
                        liked: false,
                        numLike: 36,
                      }
                    }
                  />
                </li>
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_1.jpg",
                        headline: "'연봉'보다 중요한 이것? 업계사람들",
                        liked: false,
                        numLike: 36,
                      }
                    }
                  />
                </li>
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_2.jpg",
                        headline: "삼프로TV 김동환 #shorts #프로의...",
                        liked: true,
                        numLike: 36,
                      }
                    }
                  />
                </li>
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_3.jpg",
                        headline: "기획안과 기획자의 '페어링' 중요",
                        liked: false,
                        numLike: 36,
                      }
                    }
                  />
                </li>
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_1.jpg",
                        headline: "'연봉'보다 중요한 이것? 업계사람들",
                        liked: false,
                        numLike: 36,
                      }
                    }
                  />
                </li>
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_2.jpg",
                        headline: "삼프로TV 김동환 #shorts #프로의...",
                        liked: true,
                        numLike: 36,
                      }
                    }
                  />
                </li>
                <li>
                  <ContentBox
                    content={
                      {
                        link:"/content/detail-short",
                        imgSrc: "/image/temporary/content_thumb_short_3.jpg",
                        headline: "기획안과 기획자의 '페어링' 중요",
                        liked: false,
                        numLike: 36,
                      }
                    }
                  />
                </li>
              </ul>
            </article>
            <article>
                <ul className="content-list-wide">
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_1.jpg",
                            headline: "'연봉'보다 중요한 이것? 업계사람들",
                            liked: true,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                    <li>
                      <ContentBox
                        content={
                          {
                            link:"/content/detail-blog",
                            imgSrc: "/image/temporary/content_thumb_2.jpg",
                            headline: "내 커리어가 콘텐츠가 된다",
                            liked: false,
                            numLike: 36,
                          }
                        }
                      />
                    </li>
                </ul>
            </article>
          </section>
        </ContentListWrapper>
    )
}

export default ContentList;