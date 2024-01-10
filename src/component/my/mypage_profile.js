import styled from '@emotion/styled'

const MyProfileWrapper = styled.div`
    margin:0 auto;
    position:relative;
    background: url('/image/my/myprofile_img.png') top center no-repeat;
    span {
        display: inline-flex;
        align-items: center;
        background-color:#08101b;
        color:#fff;
        font-weight: bold;
        padding:2px 10px;
        font-size: .9375rem;
        border-radius: 20px;
        /* height:24px; */
        line-height: 1.375rem;
        margin:87px auto 28px;
        img {
            display: block;
            width: 19px;
            margin-right: -6px;
        }
    }
    h1 {
        font-size: 1.25rem;
        font-weight:bold;
    }
`

const MyProfile = ({profileNickName, children, nameOnClick}) => {
    return (
        <MyProfileWrapper>
            <div className="levelBox">
                <span 
                    disabled={ 
                        nameOnClick? false : true 
                    } 
                    onClick={
                        nameOnClick? nameOnClick: null
                    }
                >
                    Lv2. 새싹
                    {/* {   
                        nameOnClick ? 
                        <img src="/image/icon/ic_chevron_right_white.svg" alt="" />
                        : null
                    } */}
                </span>
            </div>
            <h1>{profileNickName}</h1>
            {children}
        </MyProfileWrapper>
    );
}

export default MyProfile;