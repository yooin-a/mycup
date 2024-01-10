import React, {useEffect} from "react";
import styled from '@emotion/styled'
import CircleIcon from '../../component/icon/circle_icon'
import setAriaLabel from '../../component/accessibility/set_aria_label';

const AboutAppAccessArticle = styled.article`
  >header {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--sys-divider);
    margin-bottom: 20px;
    h2 {
      font-size: 17px;
      font-weight: 700;
      line-height: 1.47;
    }
    p {
      font-size: 15px;
      font-weight: 500;
      line-height: 1.4;
    }
  }

  >section {
    text-align: left;
    >article {
      &.required{
        margin-bottom: 28px;
      }
      &.selective {
        border-bottom: 1px solid var(--sys-divider);
        padding-bottom: 24px;
        margin-bottom: 20px;
      }
      &.announce{
        font-size: 15px;
        line-height: 1.4;
      }

      h3 {
        font-size: 17px;
        font-weight: 400;
        line-height: 1.47;
        margin-bottom: 15px;
      }

      ul{
        li {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          &:last-of-type{
            margin-bottom: 0;
          }
          .circle-icon{
            margin-right: 12px;
          }
          h4 {
            font-size: 15px;
            line-height: 1.27;
          }
          p {
            font-size: 13px;
            line-height: 1.23;
            color: var(--sys-secondary);
          }
        }

      }

    }

  }
`

const AboutAppAccess = () => {
    useEffect(()=>{
      setAriaLabel();
    },[])
    return (
      <AboutAppAccessArticle>
        <header>
          <h2>
            앱 접근 권한 안내
          </h2>
          <p>
            마이컵의 다양한 서비스 이용을 위해 필요한 접근권한을 안내해 드립니다.
          </p>
        </header>
        <section>
          <article className="selective">
            <h3>
              선택 접근 권한
            </h3>
            <ul>
              <li>
                <CircleIcon imgSrc="/image/icon/icon_pin_stroke_gray.svg" imgAlt="" imgWidth="17px" imgheight="auto"/>
                <div sal="true" tabIndex={0}>
                  <h4>위치</h4>
                  <p>세척 가능 매장 확인 시 필요</p>
                </div>
              </li>
              <li>
                <CircleIcon imgSrc="/image/icon/icon_bell_stroke_gray.svg" imgAlt="" imgWidth="18px" imgheight="auto"/>
                <div sal="true" tabIndex={0}>
                  <h4>알림</h4>
                  <p>서비스 이용 관련 안내 시 필요</p>
                </div>
              </li>
            </ul>
          </article>
          <article className="announce">
            <p>
              선택 접근권한은 동의하지 않아도 서비스 이용이 가능하나, 해당 권한이 필요한 기능은 이용이 제한될 수 있습니다.
            </p>
          </article>
        </section>
      </AboutAppAccessArticle>
    );
}

export default AboutAppAccess;