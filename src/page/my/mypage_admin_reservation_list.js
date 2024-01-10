import styled from '@emotion/styled';
import MyPageAdminWrap from '../../component/my/mypage_admin_wrapper'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';

const ReservationWrap = styled.div`
    select {
        display: none;
    }
    .MonitoringList {
        mark {
            margin-left: auto;
            font-size: .75rem;
            font-weight: bold;
            &.AS-ing{
                color:var(--sys-sub)
            }
            &.AS-Completion{
                color:var(--sys-secondary)
            }
        }
        li{
            p {
                font-size: .9375rem;
                font-weight: 500;
            }
            &:last-child{
                border-bottom: 1px solid #cfd4e0;
            }
        }
    }
`

const MyPageAdminMonitoring = () => {

    useEffect(() => {
        setAriaLabel();    
    }, []);

    return (
        <>
        <ReservationWrap>
            <MyPageAdminWrap subTitle="LG 서비스 예약">
                <ul className="MonitoringList" style={{marginTop:'25px'}}>
                    <li sal="true" tabIndex={0}>
                        <p>기기명<br/>선택한 고장증상
                            <span aria-label='신청일 2023년 08월 31일'>신청일 : 2023-08-31</span>
                        </p>
                        <mark className='AS-ing'>예약 신청중</mark>
                    </li>
                    <li sal="true" tabIndex={0}>
                        <p>기기명<br/>선택한 고장증상
                            <span aria-label='신청일 2023년 08월 31일'>신청일 : 2023-08-31</span>
                        </p>
                        <mark className='AS-ing'>예약 신청중</mark>
                    </li>
                    <li sal="true" tabIndex={0}>
                        <p>기기명<br/>선택한 고장증상
                            <span aria-label='신청일 2023년 08월 31일'>신청일 : 2023-08-31</span>
                        </p>
                        <mark className='AS-Completion'>AS 완료</mark>
                    </li>
                </ul>
            </MyPageAdminWrap>
        </ReservationWrap>
        </>
    );
}

export default MyPageAdminMonitoring;