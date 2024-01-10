import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled'
import SlideFade from '../../../component/slide/slide_fade'

const CoachmarkMain = styled.main`
background-color:#000000;
  .slide-fade {
    img {
      display: block;
      width: 100vw;
    }
    > .slide-fade-nav {
      position: fixed;
      top: 45px;
      left: 0;
      width: 100%;
      .page {
        > button {
          background-color:rgba(255,255,255,.3);
          &.on {
            background-color: rgba(255,255,255);
          }
        }
      }
    }
  }

`



const Coachmarks = (props) => {
  const navigate = useNavigate();
    return (
      <CoachmarkMain>
        <SlideFade
          buttonNext={
            true
          }
          buttonClose={
            ()=>{
              navigate("/home");
            }
          }
          onOverPage={
            ()=>{
              navigate("/home");
            }
          }
        >
          <div aria-label="진행 중인 이벤트나 챌린지를 확인해보세요!">
            <img src={`/image/coachmark/${props.ratio === "9:16" ? "9_16/" : ""}coachmark_step_1.png`} alt="" />
          </div>
          <div aria-label="다양한 주제의 볼거리, 읽을거리! 마이컵이 준비한 여러 가지 콘텐츠를 확인해보세요!">
            <img src={`/image/coachmark/${props.ratio === "9:16" ? "9_16/" : ""}coachmark_step_2.png`} alt="" />
          </div>
          <div aria-label="재미있는 이벤트, 챌린지에 참여하고 보상을 받으세요!">
            <img src={`/image/coachmark/${props.ratio === "9:16" ? "9_16/" : ""}coachmark_step_3.png`} alt="" />
          </div>
          <div aria-label="세척 장소, 코스를 선택할 수 있어요!">
            <img src={`/image/coachmark/${props.ratio === "9:16" ? "9_16/" : ""}coachmark_step_4.png`} alt="" />
          </div>
          <div aria-label="QR 코드를 세척기에 인식시켜 주세요. 세척기 대기자가 많으면 줄서기를 해주세요.">
            <img src={`/image/coachmark/${props.ratio === "9:16" ? "9_16/" : ""}coachmark_step_5.png`} alt="" />
          </div>
        </SlideFade>

      </CoachmarkMain>
    );
}

export default Coachmarks;