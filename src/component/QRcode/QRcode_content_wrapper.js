import styled from '@emotion/styled'

const QrCodeWrapperSection = styled.section`
    background-color:var(--sys-primary);
    min-height:100vh;
    padding: 0 20px;
    text-align:center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .card {
        border-radius:10px;
        padding:50px 20px 20px 20px;
        background-color:var(--sys-on-primary);
        margin:0 auto 59px;
        max-width: 335px;
        .btn {
            margin-bottom:12px
        }
        .firstBtn {
            margin-bottom:12px;
        }        
    }

    .closeBtn {
        display: block;
        background-color:rgba(255,255,255,.5);
        width: 48px;
        height:48px;
        border-radius:50px;
        margin:0 auto;
        img {
            display: block;
            margin:0 auto;
        }
    }
`

const CardBox = styled.div`
    border-radius:10px;
    padding:50px 20px 20px 20px;
    background-color:var(--sys-on-primary);
    margin:0 auto 59px;
    max-width: 335px;
    position: relative;
    width: 100%;
    .btn {
        margin-bottom:12px
    }
    .firstBtn {
        margin-bottom:12px;
    }
`

const QrCodeWrapper = ({display, children, button, style})=>{
    if(display === true) {
        return(
            <QrCodeWrapperSection>                
                <CardBox style={style}>
                    {children}
                    <nav>
                        {button}
                    </nav>
                </CardBox>

                <button className="closeBtn" aria-label="닫기">
                    <img src="/image/icon/ic_qrcode_close.svg" alt="" />
                </button>
            </QrCodeWrapperSection>
        )
    }
}
export default QrCodeWrapper;