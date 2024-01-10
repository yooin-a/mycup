import MyPageAdminWrap from '../../component/my/mypage_admin_wrapper'
import ButtonCommon from '../../component/button/button_common';
// import styled from '@emotion/styled'
// const MyPageAdminWrap = styled.main`
// `

const MyPageAdminMonitoring = () => {
    return (
        <>
        <MyPageAdminWrap subTitle="관리자 추가/수정" selected="selected">

            <ul className="MonitoringList" style={{marginTop:'32px'}}>
                <li className='adminList'>
                    <p>QR 코드로 추가하기
                        <span>관리자로 추가할 회원의 QR 코드를 인식시켜주세요.</span>
                    </p>
                    <div className="qrcodeArea" style={{width:'100%',height:'252px',backgroundColor:'rgba(0,0,0,0.8)',margin:'12px auto 24px'}}></div>
                    <div className='listBox'>
                        <p>아래 회원을 관리자로 추가합니다. <br/>내용 확인 후 하단의 추가 버튼을 눌러주세요</p>
                        <div>
                            <span><span>닉네임</span>{("{닉네임}")}</span>
                            <span><span>권한종류</span>서브관리자</span>
                            <span>관리 세척기<span>{("{장소명+세척기번호}")}</span></span>
                        </div>

                    </div>
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