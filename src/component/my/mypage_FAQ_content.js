import React, {useState} from 'react';
import styled from '@emotion/styled'

const FAQContentDl = styled.dl`
    padding-top: 24px;
    border-bottom:1px solid #cfd4e0;
    dt {
        font-size: 1.0625rem;
        line-height: 1.375rem;
        display: flex;
        font-weight:500;
        padding-bottom:24px;
        align-items: center;
        gap: 16px;
        mark{
            display: inline-flex;
            font-weight:bold;
            font-size: .75rem;
            color:var(--sys-sub);
            margin-bottom:4px;
        }
        span {
            display:block;
            font-size: .8125rem;
            line-height: 1.0625rem;
            color:#5a6979;
            font-weight: normal;
            margin-top: 8px;
        }

        button {
            padding: 8.25px 5.25px;
            margin-left:auto
        }

        .btnChk {
            margin-right:12px
        }
    }

    dd {
        display: none;
        font-size: .8125rem;
        line-height: 1.0625rem;
        color:#5a6979;
        &.on{
            display: block;
        }
        p {
            padding-bottom:24px;
        }
        img {
            display: block;
            width: auto;
            max-width: 100%;
            margin:0 auto;
            padding-bottom:24px;
        }
    }
`

const FAQContent = ()=>{
    const [displayMore, setDisplayMore] = useState(false);

    return(
        <FAQContentDl>
            <dt>
                <div>
                    <mark className='category'>카테고리</mark>
                    <p>타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀(2줄까지, 최대 50자)</p>
                </div>
                <button onClick={()=>{
                    if( displayMore === false ) {
                        setDisplayMore(true);
                    } else if ( displayMore === true ) {
                        setDisplayMore(false);
                    }
                }}>
                    {

                        <img src={`/image/icon/ic_chevron_${displayMore ? "up":"down"}_black.svg`} alt="" />
                    }
                    
                </button>
            </dt>
            <dd className={`${displayMore ? "on":null}`}>
                <p>글자수 제한이 없으면 좋겠지만 권장사항 정도는 어드민에서 글자수 제한이 없으면 좋겠지만 권장사항 정도는 어드민에서 안내 글자수 제한이 없으면 좋겠지만 권장사항 정도는 어드민에서 글자수 제한이 없으면 좋겠지만 권장사항 정도는 어드민에서 안내 합니다.</p>
            </dd>
        </FAQContentDl>
    )
}

export default FAQContent;