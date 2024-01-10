import styled from '@emotion/styled'
import Subheader from '../../component/common/subHeader'

const NotificationListMain = styled.main`
    .button-show-ui-delete {
        display: none;
    }
    .agreeListCon {
        border-bottom:1px solid #cfd4e0;
        padding-bottom:12px;
        margin-bottom: 12px;
        &:last-child{
            border: 0;
        }
        >p {
            padding: 12px 0;
        }
        .agreeList {
            font-weight: 500;
            font-size: .9375rem;
            line-height: 1.3125rem;
            padding:15px 0;           
            display: flex;
            align-items: center;
            justify-content: space-between;
            >div {
                color:var(--sys-secondary);
            }
        }
    }
`

const NotificationList = () => {
    return (
        <NotificationListMain>

            <Subheader
                subTitle="이용약관 및 이용동의"
            />

            <div className="wrap">
                <div className="agreeListCon">
                    <p>내용<br/>
텍스트LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관
<br/><br/>
내용<br/>
텍스트LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관
<br/><br/>
내용<br/>
텍스트LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관
<br/><br/>
내용<br/>
텍스트LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관LG전자 계정 이용약관
</p>
                </div>
            </div>

        </NotificationListMain>
    );
}

export default NotificationList;