import styled from '@emotion/styled'

const QrCodeCountContentDiv = styled.div`
    .infoText {
        font-size: .9375rem;
        font-weight: 500;
        margin-bottom: 30px;
        margin-top:-12px;
    }
    >p {
        font-weight: bold;
        font-size:1.25rem;
        line-height:1.2;
        margin-bottom: 36px;
    }
    .qrImg {
        position:relative;
        margin:0 auto 13px;
        img {
            display: block;
            margin:0 auto
        }
        .btnQrRefresh {
            display: none;
            position:absolute;
            top:50%;
            left:50%;
            margin-left:-24px;
            margin-top:-24px;
            z-index: 2;
        }
    }
    mark {
        font-size: 1.75rem;
        line-height: 2.375rem;
        color:#19dbba;
        margin-bottom: 16px;
        font-weight: bold;
        display:block;
    }
    span {
        display:block;
        font-size: .9375rem;
        color:var(--sys-secondary);
        font-weight: 500;
        margin-bottom:24px;
    }
    .faqBox {
        text-align: left;
        background-color: color-mix(in srgb, var(--sys-background) 50%, transparent);
        padding: 16px;
        border-radius: 10px;
        margin-bottom:19px;
        display: none;
        p {
            font-weight: bold;
            font-size: .9375rem;
            line-height: 1.375rem;
            margin-bottom: 12px;
        }
        li {
            font-size: .8125rem;
            line-height: 1.0625rem;
            color: var(--sys-secondary);
            padding-left: 10px;
            position: Relative;
            &:before {
                content:'·';
                position:absolute;
                left:0;
            }
        }
    }
    .active {
        display:block;
    }
`

const QrCodeCountContent = ({infoText, qrTitle, countNum, guideText, lastGuideText, style, BtnRefresh})=>{

    return(
        <QrCodeCountContentDiv>
            {infoText}
            <p role='text'>{qrTitle}</p>
            <div className="qrImg">
                <img src="/image/QRcode/QRCode_img.png" alt="QR 코드" style={style}/>
                <button className='btnQrRefresh' style={BtnRefresh}>
                    <img src="/image/QRcode/ic_QR_refresh.png" alt="새로고침" />
                </button>
            </div>
            <div aria-label="인식 유효시간 2분 55초 남음" tabIndex={0}>
                <mark aria-hidden="true">{countNum}</mark>
            </div>
            <span role='text' style={lastGuideText}>{guideText}</span>
        </QrCodeCountContentDiv>
    )
}

export default QrCodeCountContent;