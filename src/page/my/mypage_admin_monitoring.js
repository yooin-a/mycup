import MyPageAdminWrap from '../../component/my/mypage_admin_wrapper'
import ButtonCommon from '../../component/button/button_common';
import { ReactComponent as ArrowWhite } from "../../assets/icons/chevronRight.svg";


const MyPageAdminMonitoring = () => {
    return (
        <>
        <MyPageAdminWrap subTitle="기기 상태" selectPlaceholder="기기를 선택하세요">

            <ul className="MonitoringList">
                <li>
                    <p>현재 상태</p>
                    <div>
                        {("{상태값}")}
                        <ButtonCommon size="small" color="white">
                            LG 서비스 신청하기
                            <ArrowWhite width="6" />
                        </ButtonCommon>
                    </div>
                </li>
                <li>
                    <p>설치 장소</p>
                    <div>
                        {("{장소이름}")}
                        <span>{("{장소상세}")}</span>
                    </div>
                </li>
                <li>
                    <p>최초 설치일</p>
                    <div>2023-09-01</div>
                </li>
                <li className='adminList'>
                    <p>기기 관리자 현황</p>
                    <div className='listBox'>
                        <div>
                            <p>마스터 관리자</p>
                            <span>{("{닉네임} / {mycup ID}}")}</span>
                        </div>
                        <div>
                            <p>서브 관리자 (최대 5명)</p>
                            <span>
                                {("{닉네임} / {mycup ID}}")}
                            </span>
                            <span>
                                {("{닉네임} / {mycup ID}}")}
                            </span>
                            <span>
                                {("{닉네임} / {mycup ID}}")}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>

        </MyPageAdminWrap>
        </>
    );
}

export default MyPageAdminMonitoring;