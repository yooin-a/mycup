import styled from '@emotion/styled'

const MyQuickMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px 28px;
    background-color: var(--sys-on-primary);
    img {
        display:block;
        margin:0 auto 8px;
        &.disabled {
            opacity: 0.3;
        }
    }
    div {
        text-align: center;
        a {
           font-size: .8125rem;
        }

    }
`

const MyQuickMenu = () => {
    return (
        <MyQuickMenuWrapper>
            <div role='link' aria-label='내 레벨'>
                <a href="#!" aria-hidden='true'>
                    <img src="/image/my/my_navi_level.png" alt="" />
                    내 레벨
                </a>
            </div>
            <div role='link' aria-label='보유 스탬프'>
                <a href="#!" aria-hidden='true'>
                    <img src="/image/my/my_navi_stamp.png" alt="" className='disabled'/>
                    보유 스탬프
                </a>
            </div>
            <div role='link' aria-label='보유 쿠폰'>
                <a href="#!" aria-hidden='true'>
                    <img src="/image/my/my_navi_coupon.png" alt="" />
                    보유 쿠폰
                </a>
            </div>
            <div role='link' aria-label='세척 리포트'>
                <a href="#!" aria-hidden='true'>
                    <img src="/image/my/my_navi_report.png" alt="" />
                    세척 리포트
                </a>
            </div>
        </MyQuickMenuWrapper>
    );
}

export default MyQuickMenu;