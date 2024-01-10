import styled from '@emotion/styled'
import QrCodeWrapper from '../../component/QRcode/QRcode_content_wrapper'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';

const ShortForm = styled.div`
    .shorts-container {
            position: relative;
            padding-bottom: 177.78%;
            width: 100%;
            height:0;
            overflow: hidden;
            .shorts-iframe {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border: none;
            }
        }

`
const WashingShortForm = () => {
    useEffect(()=>{
        setAriaLabel();
      },[])
    return (
        <ShortForm>
            <QrCodeWrapper
                style={{padding:'0'}}
                children={
                    <>
                        <div className="shorts-container">
                            <iframe 
                                className="shorts-iframe"
                                src="https://www.youtube.com/embed/uRSp2exhtTk?autoplay=1&mute=1" 
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </>
                }
                display={true}
            >
            </QrCodeWrapper>

        </ShortForm>
    )
}

export default WashingShortForm;