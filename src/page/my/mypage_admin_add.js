import React,{useEffect} from 'react';
import MyPageAdminWrap from '../../component/my/mypage_admin_wrapper'
import { ReactComponent as ArrowWhite } from "../../assets/icons/chevronRight.svg";
import setAriaLabel from '../../component/accessibility/set_aria_label';

const MyPageAdminMonitoring = () => {
    useEffect(()=>{
        setAriaLabel();
    },[])
    return (
        <>
        <MyPageAdminWrap subTitle="관리자 추가/수정" selectPlaceholder="기기를 선택하세요">

            <ul className="MonitoringList">
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
                                <button aria-label='삭제'><img src="/image/icon/ic_delete_black.svg" alt="" /></button>
                            </span>                            <span>
                                {("{닉네임} / {mycup ID}}")}
                                <button aria-label='삭제'><img src="/image/icon/ic_delete_black.svg" alt="" /></button>
                            </span>
                            <span>
                                {("{닉네임} / {mycup ID}}")}
                                <button aria-label='삭제'><img src="/image/icon/ic_delete_black.svg" alt="" /></button>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <p>QR 코드로 추가하기
                        <span role='text' aria-hidden="false">QR 코드 스캔을 통해 서브관리자로 추가할 수 있습니다.</span>
                    </p>
                    <ArrowWhite width="7.5" role="button"/>
                </li>
                <li>
                    <p>ID로 추가하기
                        <span role='text' aria-hidden="false">마이컵 ID를 등록하여 서브관리자로 추가할 수 있습니다.</span>
                    </p>
                    <ArrowWhite width="7.5" role="button"/>
                </li>
            </ul>
        </MyPageAdminWrap>
        </>
    );
}

export default MyPageAdminMonitoring;