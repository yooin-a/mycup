import MyPageAdminWrap from '../../component/my/mypage_admin_wrapper'
import ButtonCommon from '../../component/button/button_common';
import InputTextLabel from '../../component/input/inputText_common'

const MyPageAdminMonitoring = () => {
    return (
        <>
        <MyPageAdminWrap subTitle="관리자 추가/수정" selected="selected">

            <ul className="MonitoringList" style={{marginTop:'32px'}}>
                <li className='adminList'>
                    <p>ID로 추가하기
                        <span role='text'>관리자로 추가할 회원의 ID를 이메일 형식으로 정확하게 입력해 주세요.<br/>
                        SNS 간편가입자는 관리자로 추가할 수 없습니다. <br/>QR 코드를 인식하여 추가해주세요.</span>
                    </p>

                    <div className='adminEmailForm'>
                        <InputTextLabel error='fieldError' valueText='abc@lgecom'></InputTextLabel>
                        <ButtonCommon color="white">조회하기</ButtonCommon>
                    </div>
                    <p className='errorMessage' role='text'>존재하지 않는 ID입니다.<br/>ID는 이메일 형식으로 입력해주세요.<br/>예) abcde@lgmycup.co</p>
                </li>
            </ul>

            <div className="fixedButton">
                <ButtonCommon>추가하기</ButtonCommon>
            </div>
        </MyPageAdminWrap>
        </>
    );
}

export default MyPageAdminMonitoring;