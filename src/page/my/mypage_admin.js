import NavButtonModifyProfile from '../../component/my/nav_button_modify_profile'
import MyMenuList from '../../component/my/mypage_menuList'
import BottomNavigator from '../../component/common/bottom_navigator'
import MyProfileBox from '../../component/my/myprofile_box'
import MyQuickMenu from '../../component/my/mypage_quickMenu'

const MyPageUser = () => {
    const menus = [
        [
            {
                menuName : '기기 상태',
                linkUrl : '#',
            },
            {
                menuName : '관리자 추가/수정',
                linkUrl : '#',
            },
            {
                menuName : 'LG서비스 예약',
                linkUrl : '#',
            },
            {
                menuName : '장소 관리',
                linkUrl : '#',
            },
        ],
        [
            {
                menuName : '친구 초대',
            },
            {
                menuName : '출석 체크',
            },
        ],
        [
            {
                menuName : '자주 묻는 질문',
                linkUrl : '#',
            },
            {
                menuName : '공지사항',
                linkUrl : '#',
            },
        ],
        [
            {
                menuName : '알림 설정',
                linkUrl : '#',
            },
            {
                menuName : '이용 약관 및 이용 동의',
                linkUrl : '#',
            },
            {
                menuName : '버전 정보',
                mark : <mark className='blueDot'></mark>,
                verNum : <span className='verNum'>0.0.1</span>
            },
        ],
    ];

    return (
        <main>
            <NavButtonModifyProfile/>
            <MyProfileBox/>
            <MyQuickMenu/>
            <MyMenuList 
                menus={menus}
            />
            <BottomNavigator location="my" />

        </main>
    );
}

export default MyPageUser;