import styled from '@emotion/styled'
import Subheader from "../../component/common/subHeader";
import ProgressBar from '../../component/wash/progressbar';
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WashingWrapper = styled.div`
    .arrowPrev {display: none;}
    min-height: 100vh;
    background:no-repeat top/100% url(/image/home/background_home.png) ;
    h2 {
        font-size: 1.375rem;
        margin-bottom: 15px;
        b{
            font-size: 1.0625rem;
            display: block;
        }
    }
    .progressBox {
        background: rgba(255, 255, 255, .2);
        border-radius: 20px;
        padding:0 20px 24px 20px;
        box-shadow: inset 5px 5px 15px 3px rgba(255,255,255,0.9);
        margin-bottom: 20px;
            img {
                display: block;
                margin:0 auto;
            }
            article {
                font-size: 1.25rem;
                color: var(--sys-secondary);
                span {
                    display: block;
                    color: var(--sys-secondary);
                    font-size: .8125rem;
                    margin-top:12px
                }
                span.strong {
                    display: inline;
                    color:var(--sys-primary);
                    margin-right: 3px;
                    font-size:inherit;
                    font-weight: 700;
                }
                
            }
    }
    .youtubeThumb {
        width: 100%;
        height:188px;
        border-radius: 10px;
        overflow: hidden;
        background:url(/image/wash/wash_shortForm_img.png) center no-repeat;
        background-size: cover;
        position:relative;
        p {
            color:#fff;
            font-size: 1.75rem;
            line-height: 2rem;
            position: absolute;
            bottom: 10px;
            left: 10px;
            font-weight: bold;
        }
    }
`
const Washing = () => {
    useEffect(()=>{
        setAriaLabel();
      },[])
    return (
        <WashingWrapper>
            <Subheader subTitle='세척중'/>

            <div className="wrap">
                <h2 role='text'>
                    <b>1번 세척기에서</b>쾌속 세척 중이에요.
                </h2>

                <div className="progressBox" sal="true" tabIndex={0}>
                    <img src="/image/wash/progress_top_img.png" alt="" className='topImg'/>
                    <article>
                        <ProgressBar />
                        <span>세척 중 취소는 세척기에서 할 수 있어요.</span>
                    </article>
                </div>

                <Link to="/washing_shortForm" sal="true">
                    <div className="youtubeThumb">
                        <p>폴인 에디터의<br/>일주일 Vlog</p>
                    </div>
                </Link>

            </div>
        </WashingWrapper>
    )
}

export default Washing;