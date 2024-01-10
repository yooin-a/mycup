import styled from '@emotion/styled'
import { useNavigate } from "react-router-dom";
import ButtonCommon from '../../component/button/button_common'

const NavButtonModifyProfileWrapper = styled.nav`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 15px 20px 14px;
    box-sizing: border-box;
    background-color: var(--sys-on-primary);
`

const NavButtonModifyProfile = () => {
    const navigate = useNavigate();

    return (
        <NavButtonModifyProfileWrapper>
            <ButtonCommon 
                size="small" 
                color="gray" 
                onClick={()=>{
                    navigate("/mypage_user_modify")
                }}
            >
                프로필 수정
            </ButtonCommon>
        </NavButtonModifyProfileWrapper>
    );
}

export default NavButtonModifyProfile;