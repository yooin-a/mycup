import styled from '@emotion/styled'
import MyProfile from '../../component/my/mypage_profile'


const MyProfileBoxWrapper = styled.section`
    background-color:var(--sys-on-primary);
    padding: 0 20px 28px;
    text-align: center;
    button.small.gray {
        float: right;
    }
    .emailAddress {
        font-size: .8125rem;
        line-height: 1rem;
        margin:9px auto 6px;
    }
    .errorMessage {
        font-size: .8125rem;
        color:var(--sys-error);
        padding-bottom: 8px;
    }
`

const MyProfileBox = ({displayEmail, nameOnClick}) => {


    return (
        <MyProfileBoxWrapper>
            <MyProfile 
                profileNickName="DUOBO"
                nameOnClick={
                    nameOnClick?
                    nameOnClick:
                    null
            }>
                {
                    displayEmail?
                    <p className='emailAddress'>example@lge.com</p>
                    : null
                }                
            </MyProfile>
        </MyProfileBoxWrapper>
    );
}

export default MyProfileBox;