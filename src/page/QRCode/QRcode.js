import QrCodeWrapper from '../../component/QRcode/QRcode_content_wrapper'
import QrCodeContent from '../../component/QRcode/QRcode_content'
import QrCodeCountContent from '../../component/QRcode/QRcode_count_content'
import ButtonCommon from '../../component/button/button_common'

const QrCodePage = (props)=>{
    const nickName = "닉네임닉네임 님,"

    return(
        <>
        {/* QR코드 최초진입 */}
        <QrCodeWrapper button={
            <>
                <ButtonCommon color="gray btn firstBtn">이용 가이드 보기</ButtonCommon>
                <ButtonCommon>세척서비스 이용하기</ButtonCommon>
            </>
            }
            display={
                props.status.qrcodeFirstPage
            }>
                <QrCodeContent nickName={nickName}></QrCodeContent>
        </QrCodeWrapper>



        {/* QR코드 재진입 - 바로 이용 */}
        <QrCodeWrapper button={
            <> 
                <ButtonCommon color="gray btn firstBtn">세척서비스 이용 시 유의사항</ButtonCommon>
                <ButtonCommon>줄서기 (세척 장소 선택하기)</ButtonCommon>
            </>
            }
            countNum = "02:55"
            faqBoxDisplay="faqBox" 
            display={
                props.status.qrcodePage1
            }>
                <QrCodeCountContent 
                    qrTitle = {["세척기의 카메라에",<br/>,"QR코드를 인식해주세요"]}
                    countNum = "02:55"
                    guideText={["마이컵 세척기가 있는 곳이라면", <br />, "어디서나 이용할 수 있어요."]}
                ></QrCodeCountContent>
        </QrCodeWrapper>



        {/* QR코드 재진입 - 바로 이용 QR 새로고침 */}
        <QrCodeWrapper button={
            <> 
                <ButtonCommon color="gray btn firstBtn">세척서비스 이용 시 유의사항</ButtonCommon>
                <ButtonCommon>줄서기 (세척장소 선택하기)</ButtonCommon>
            </>
            }
            countNum = "02:55"
            faqBoxDisplay="faqBox" 
            display={
                props.status.qrcodePage5
            }>
                <QrCodeCountContent 
                    qrTitle = {["세척기의 카메라에",<br/>,"QR코드를 인식해주세요"]}
                    style = {{opacity:'.3'}}
                    BtnRefresh = {{display:'block'}}
                    countNum = "00:00"
                    guideText={["마이컵 세척기가 있는 곳이라면", <br />, "어디서든지 이용할 수 있어요."]}
                ></QrCodeCountContent>
        </QrCodeWrapper>



        {/* QR코드 재진입 - 줄서기 중 */}
        <QrCodeWrapper button={
            <> 
                <ButtonCommon color="gray btn firstBtn">세척서비스 이용 시 유의사항</ButtonCommon>
                <ButtonCommon>줄서기 취소</ButtonCommon>
            </>
            }        
            display={
                props.status.qrcodePage2
            }>
                <QrCodeCountContent 
                    qrTitle = {["세척기의 카메라에",<br/>,"QR코드를 인식해주세요"]}
                    countNum = "02:55"
                    guideText={["줄서기 중이에요.", <br />, "내 차례가 되면 세척을 시작해주세요."]}
                ></QrCodeCountContent>
        </QrCodeWrapper>
        

        {/* QR코드 세척 중 */}
        <QrCodeWrapper button={
            <> 
                <ButtonCommon color="gray btn firstBtn">세척서비스 이용시 유의사항</ButtonCommon>
                <ButtonCommon color="black" disabled="true">세척중…</ButtonCommon>
            </>
            }               
            display={
                props.status.qrcodePage3
            }>
                <QrCodeCountContent 
                    qrTitle = {["세척기의 카메라에",<br/>,"QR코드를 인식해주세요"]}
                    infoText={[<p className='infoText'>세척 취소를 위해 본인 확인이 필요합니다.</p>]}
                    countNum = "02:55"
                    guideText={["세척 진행중입니다.", <br />, "세척 취소는 세척기에서 할 수 있어요."]}                   
                ></QrCodeCountContent>
        </QrCodeWrapper>
        

        {/* QR코드 세척 완료 */}
        <QrCodeWrapper button={
            <> 
                <ButtonCommon color="gray btn firstBtn">세척서비스 이용 시 유의사항</ButtonCommon>
                <ButtonCommon>줄서기 (세척 장소 선택하기)</ButtonCommon>
            </>
            }        
            display={
                props.status.qrcodePage4
            }>
                <QrCodeCountContent 
                    qrTitle = {["세척기의 카메라에",<br/>,"QR코드를 인식해주세요"]}
                    countNum = "02:55"
                    guideText={["세척이 완료됐어요.", <br />, "컵을 수거해주세요."]}
                ></QrCodeCountContent>
        </QrCodeWrapper>
        </>
    )
}

export default QrCodePage;