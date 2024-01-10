import styled from '@emotion/styled'

const QrCodeContentDiv = styled.div`
    h1 {
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 16px;
    }
    span {
        display:block;
        font-size: .9375rem;
        color:var(--sys-secondary);
        font-weight: 500;
        margin-bottom:30px;
    }
    p {
        font-weight: bold;
        font-size:1.25rem;
        line-height:1.2;
    }
    img {
        display: block;
        margin:36px auto 47px;
    }
`

const QrCodeContent = ({nickName})=>{
    return(
        <QrCodeContentDiv>
            <h1>{nickName}</h1>
            <span>마이컵 세척 이력이 없어요.</span>
            <p role='text'>텀블러를 세척하고<br/>지구 지키기에 동참해주세요!</p>
            
            <img src="/image/illust/illust_qrcode_img.png" alt="" className=""/>
        </QrCodeContentDiv>
    )
}

export default QrCodeContent;