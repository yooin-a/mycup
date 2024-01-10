import styled from '@emotion/styled'
import { Link } from "react-router-dom";
import MyMenuList from '../../component/my/mypage_menuList'
import BottomNavigator from '../../component/common/bottom_navigator'
import MyProfileBox from '../../component/my/myprofile_box'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';

const MyPageWrapper = styled.div`
    .nav-go-back {
        background-color:var(--sys-on-primary);
        padding: 16px;
        a {
            display: block;
            width: 24px;
            height: 24px;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
    .myProfileBox {
        background-color:var(--sys-on-primary);
        padding: 15px 20px;
        text-align: center;
        button.small.gray {
            float: right;
        }
        .emailAddress {
            font-size: .8125rem;
            line-height: 1rem;
            margin:9px auto 6px;
        }
    }
    .errorMessage {
        display: block;
        font-size: .8125rem;
        color:var(--sys-error);
    }
`

const MyPageUser = () => {
    useEffect(() => {
        setAriaLabel();    
    }, []);
    const menus = [
        [
            {
                menuName : '계정 관리',
                linkUrl : '#',
            },
            {
                menuName : '닉네임 설정',
                linkUrl : '#',
                errorMessage : <mark className='errorMessage'>줄서기 중, 세척 중에는 닉네임을 변경할 수 없어요.</mark>,
            },
            {
                menuName : '로그아웃',
                linkUrl : '#',
            },
        ],
    ];


    return (
        <MyPageWrapper>
            <nav className="nav-go-back">
                <Link to="/mypage_user" className='arrowPrev' sal="true" tabIndex={0} aria-label='뒤로' role='button'>
                    <img src="/image/icon/ic_chevron_left.svg" alt="" />
                </Link>
            </nav>
            <MyProfileBox 
                displayEmail={false}
                nameOnClick={
                    ()=>{
                        alert("Level 클릭")
                    }
                }
            />

            <MyMenuList 
                menus={menus}
            />

            <BottomNavigator 
                location="my" 
            />

        </MyPageWrapper>
    );
}

export default MyPageUser;