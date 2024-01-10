import React, {useState} from 'react';
import styled from '@emotion/styled'
import Checkbox from '../input/checkbox'

const NotiContentBox = styled.div`
    padding-top: 24px;
    border-bottom:1px solid #cfd4e0;
    .title {
        font-size: 1.0625rem;
        line-height: 1.375rem;
        display: flex;
        font-weight:500;
        padding-bottom:24px;
        align-items: center;
        gap: 16px;
        mark{
            display: inline-flex;
            padding: 2.5px 8.5px;
            border-radius: 9999999px;
            font-weight:400;
            font-size: 11px;
            line-height: 1.1818;
            color:var(--sys-sub);
            margin-bottom:10px;
            background-color: color-mix(in srgb, var(--sys-sub) 15%, transparent);
        }
        time {
            display:block;
            font-size: .8125rem;
            line-height: 1.0625rem;
            color:#5a6979;
            font-weight: normal;
            margin-top: 8px;
        }

        button {
            display: flex;
            padding: 8.25px 5.25px;
            margin-left:auto
        }

        .btnChk {
            margin-right:12px
        }
    }

    .con {
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
            margin:0 auto 24px;
        }
    }
`

const NotiContent = ({checkboxOnChange, displayCheckbox})=>{
    const [displayMore, setDisplayMore] = useState(false);

    return(
        <NotiContentBox>
            <div className='title'>
                <Checkbox 
                    onChange={
                        checkboxOnChange ?
                        checkboxOnChange
                        : null 
                    }
                    display={
                        displayCheckbox
                    }
                />
                <div>
                    <mark>NEW</mark>
                    <p>첫번째 알림 제목 (최대 50자)를 적어봅시다. 총 50자 쉽지 않네요.</p>
                    <time role='text' aria-label='2023년 08월 31일 15시 59분'>2023-08-31 15:59</time>
                </div>
                <button onClick={()=>{
                    if( displayMore === false ) {
                        setDisplayMore(true);
                    } else if ( displayMore === true ) {
                        setDisplayMore(false);
                    }
                }}>
                    {
                        <img src={`/image/icon/ic_chevron_${displayMore ? "up":"down"}_black.svg`} alt={displayMore?"알림 추가 내용 숨기기":"알림 추가 내용 더 보기"} />
                    }
                    
                </button>
            </div>
            <div className={`${displayMore ? "on":null} con`}>
                <img src="/image/thumb/Thumb_card.png" alt="컨텐츠 상세 이미지" role="image"/>
                <p>글자수 제한이 없으면 좋겠지만 권장사항 정도는 어드민에서 글자수 제한이 없으면 좋겠지만 권장사항 정도는 어드민에서 안내 글자수 제한이 없으면 좋겠지만 권장사항 정도는 어드민에서 글자수 제한이 없으면 좋겠지만 권장사항 정도는 어드민에서 안내 합니다.</p>
            </div>
        </NotiContentBox>
    )
}

export default NotiContent;