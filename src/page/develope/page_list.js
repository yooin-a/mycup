import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { IoSnow } from "react-icons/io5";

const objectPageList = [
  {
    headline: "Guide",
    list: [
      {
        url: "/GuideButton",
        category:"page",
        title: "Guide > Button Page"
      }
    ]
  },
  {
    headline : "스플래쉬",
    list: [
      {
        url: "/splash",
        ariaLabel: "ariaLabel",
        category:"page",
        title: "스플래쉬"
      },
      {
        url: "/splash/app-access",
        ariaLabel: "ariaLabel",
        category: "popup",
        title: "스플래쉬 - 앱 접근 권한 안내"
      },
      {
        url: "/splash/disconnected",
        ariaLabel: "ariaLabel",
        category: "popup",
        title: "스플래쉬 - 연결 불가 팝업"
      },
    ]
  },
  {
    headline: "코치마크",
    list: [
      {
        url: "/home/coachmark",
        ariaLabel: "ariaLabel",
        category: "page",
        title: "코치마크" 
      },
      {
        url: "/home/coachmark/9-16",
        ariaLabel: "ariaLabel",
        category: "page",
        title: "코치마크 - 9:16 화면 비율 전용" 
      },
    ]
  },
  {
    headline: "워크스루",
    list: [
      {
        url: "/walkthrough",
        ariaLabel: "ariaLabel",
        category: "page",
        title: "Walkthrough(Onboarding)"
      }
    ]
  },
  {
    headline: "홈",
    list: [
      {
        url: "/home",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "홈 - 첫방문"
      },
    ]
  },
  {
    headline: "알림",
    list: [
      {
        url: "/notification",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "알림"
      },
      {
        url: "/notification/no-notification",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "알림 없음"
      },
    ]
  },
  {
    headline: "welcome",
    list: [
      {
        url: "/welcome-placeholder",
        category: "page",
        title: "신규회원가입 - 가입 완료 후 개인 데이터 입력 전(닉네임)",
        ariaLabel: "ariaLabel",
      },    
      {
        url: "/welcome",
        category: "page",
        title: "신규회원가입 - 가입 완료 후 개인 데이터 입력(닉네임)",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/welcome-nicknameError",
        category: "page",
        title: "신규회원가입 - 가입 완료 후 개인 데이터 입력(닉네임 > 글자수 초과)",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/welcome-nicknameError2",
        category: "page",
        title: "신규회원가입 - 가입 완료 후 개인 데이터 입력(닉네임 > 사용할 수 없는 닉네임)",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/welcome-nicknameError3",
        category: "page",
        title: "신규회원가입 - 가입 완료 후 개인 데이터 입력(닉네임 > 2글자 이하)",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/welcome-nicknameError4",
        category: "page",
        title: "신규회원가입 - 가입 완료 후 개인 데이터 입력(닉네임 > 한글/영어/숫자/공백이 아님)",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/welcome-popup",
        category: "popup",
        title: "신규회원가입 - 가입 완료 후 개인 데이터 입력 팝업",
        ariaLabel: "ariaLabel",
      },
    ]
  },{
    headline: "QR Code",
    list: [
      {
        url: "/qrCode_main",
        category: "page",
        title: "QR코드 - 최초진입",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/qrCode_count",
        category: "page",
        title: "QR코드 - 바로이용(기본)",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/qrCode_refresh",
        category: "page",
        title: "QR코드 - 바로이용(기본) QR새로고침",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/qrCode_count2",
        category: "popup",
        title: "QR코드 - 줄서기 중",
        ariaLabel: "ariaLabel",
      },   
      {
        url: "/qrCode_count3",
        category: "popup",
        title: "QR코드 - 세척 중",
        ariaLabel: "ariaLabel",
      },   
      {
        url: "/qrCode_count4",
        category: "page",
        title: "QR코드 - 세척 완료",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/qrCode_waiting_popup",
        category: "popup",
        title: "QR코드 - 줄서기 취소 - 팝업",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/qrCode_popup",
        category: "popup",
        title: "QR코드 - 줄서기 취소 - 팝업2",
        ariaLabel: "ariaLabel",
      },
    ]
  },
  {
    headline: "Event",
    list: [
      {
        url: "/event-list",
        category: "page",
        title: "이벤트 탭 - 진행중",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/event-no-list",
        category: "page",
        title: "이벤트 탭 - 진행 중인 이벤트가 없는 경우",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/challenge-no-list",
        category: "page",
        title: "이벤트 탭 - 진행 중인 챌린지가 없는 경우",
        ariaLabel: "ariaLabel",
      },
  
      {
        url: "/event-view",
        category: "page",
        title: "이벤트 탭 - 진행중 상세",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/event-view2",
        category: "page",
        title: "이벤트 탭 - 회원가입 프로모션(첫 방문 선물받기)",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/event-view3",
        category: "page",
        title: "이벤트 탭 - 당첨자발표 상세",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/event_end_popup",
        category: "popup",
        title: "이벤트 탭 - 기간 종료 이벤트 - 팝업",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/event_present_popup",
        category: "popup",
        title: "이벤트 탭 - 회원 가입 프로모션(첫 방문 선물받기) - 팝업",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/event_notice_popup",
        category: "popup",
        title: "이벤트 탭 - 회원 가입 프로모션(첫 방문 선물받기) - 팝업2",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/event_prize_popup",
        category: "popup",
        title: "이벤트 탭 - 당첨자 발표 상세 - 팝업",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/event_chance_popup",
        category: "popup",
        title: "이벤트 탭 - 당첨자 발표 상세2 - 팝업",
        ariaLabel: "ariaLabel",
      }
    ]
  },

  {
    headline: "콘텐츠",
    list: [
      {
        url: "/content",
        category: "page",
        title: "읽을거리 (콘텐츠 리스트)",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/content/detail-blog",
        category: "page",
        title: "콘텐츠 상세 - 블로그",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/content/detail-video",
        category: "page",
        title: "콘텐츠 상세 - 동영상",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/content/detail-short",
        category: "page",
        title: "콘텐츠 상세 - 숏폼",
        ariaLabel: "ariaLabel",
      },
      {
        url: "/content/origin-notice",
        category: "page",
        title: "콘텐츠 상세 - 출처 및 고지사항",
        ariaLabel: "ariaLabel",
      }
    ]
  },

  {
    headline: "마이",
    list: [
      {        
        url: "/mypage/level-badge",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 나의 에코레벨"
      },
      {        
        url: "/mypage/level-badge/no-eco-history",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 나의 에코레벨 (에코 히스토리 없음)"
      },
      {
        url: "/mypage_user",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 일반 유저 뷰"
      },
      {
        url: "/mypage_user_prepares",
        category: "popup",
        ariaLabel: "ariaLabel",
        title: "마이 - 일반 유저 - 준비중"
      },

      {
        url: "/mypage_admin",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 관리자 뷰"
      },
      {
        url: "/mypage_user_modify",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 일반 유저 내 정보 수정"
      },
      {
        url: "/mypage_popupError_nickName",
        category: "popup",
        ariaLabel: "ariaLabel",
        title: "마이 - 내 정보 수정 - popup 오류"
      },
      {
        url: "/mypage_popup_nickName",
        category: "popup",
        ariaLabel: "ariaLabel",
        title: "마이 - 내 정보 수정 - popup 사용가능"
      },
      {
        url: "/mypage_popup_logout",
        category: "popup",
        ariaLabel: "ariaLabel",
        title: "마이 - 내 정보 수정 - 로그아웃"
      },
      {
        url: "/mypage_admin_monitoring",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 기기 상태 - 관리자"
      },
      {
        url: "/mypage_admin_add",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 기기 상태 - 관리자 현황"
      },
      {
        url: "/mypage_admin_QR_add",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 관리자 추가 - QR코드 추가"
      },
      {
        url: "/mypage_admin_ID_add",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 관리자 추가 - ID 추가"
      },
      {
        url: "/mypage_admin_ID_add_error",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "마이 - 관리자 추가 - ID 추가 오류"
      },
      {
        url: "/mypage_admin_popup_delete",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 추가/수정"
      },
      {
        url: "/mypage_admin_popup_delete2",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 추가/수정 완료"
      },
      {
        url: "/mypage_admin_popup_reservation_cancel",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 - 서비스예약 취소"
      },
      {
        url: "/mypage_admin_popup_reservation",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 - 서비스예약"
      },
      {
        url: "/mypage_admin_popup_reservation_confirm",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 - 서비스예약 완료"
      },
      {
        url: "/mypage_admin_popup_save",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 - 변경내용 저장"
      },
      {
        url: "/mypage_admin_reservation_check",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 장소 관리 - 이용가능시간 수정"
      },
      {
        url: "/mypage_admin_reservation",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 - 서비스 예약"
      },
      {
        url: "/mypage_admin_reservation_list",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 - 서비스 예약"
      },
      {
        url: "/mypage_admin_place",
        category: "page",
        title: "마이 - 관리자 - 서비스 예약"
      },
      {
        url: "/mypage_FAQ_list",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 자주 묻는 질문"
      },
      {
        url: "/mypage_qna",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 자주 묻는 질문 - 문의 작성"
      },
      {
        url: "/mypage_qna_list",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 자주 묻는 질문 - 문의 내역"
      },
      {
        url: "/mypage_qna_view",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 자주 묻는 질문 - 문의상세"
      },
      {
        url: "/mypage_qna_cancel_popup",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 자주 묻는 질문 - 취소"
      },
      {
        url: "/mypage_qna_save_popup",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 자주 묻는 질문 - 등록"
      },
      {
        url: "/mypage_notice_list",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 공지사항"
      },
      {
        url: "/mypage_notice_view",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 공지사항 - 상세"
      },
      {
        url: "/mypage_setting",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 관리자 설정 약관"
      },
      {
        url: "/mypage_push_agree_popup",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 알림설정 팝업1"
      },
      {
        url: "/mypage_push_agree_popup2",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "마이 - 알림설정 팝업2"
      },
      {
        url: "/mypage_agree_list",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 이용약관 및 이용동의"
      },
      {
        url: "/mypage_agree_view",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 이용약관 상세"
      },
      {        
        url: "/wash-report",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "마이 - 세척 리포트"
      },     
    ]
  },{
    headline: "세척",
    list: [
      {
        url: "/wash_place_list",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 장소선택 리스트 뷰"
      },
      {
        url: "/wash_place_map",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 장소선택 지도"
      },
      {
        url: "/wash_place_view",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 장소선택 상세"
      },
      {
        url: "/wash_place_view2",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 장소선택 이용불가"
      },
      {
        url: "/wash_setting_popup",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "세척 - 장소선택 권한설정 팝업"
      },
      {
        url: "/wash_place_search",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 장소선택 검색"
      },
      {
        url: "/wash_place_no_search",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 장소선택 최근 검색어 없음"
      },
      {
        url: "/wash_place_no_list",
        category: "page",
        ariaLabel: "ariaLabel",
        title: "세척 - 장소선택 장소없음"
      },
      {
        url: "/wash_warning_popup",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "세척 - 코스선택 잠금 팝업 1"
      },
      {
        url: "/wash_warning_popup2",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "세척 - 코스선택 잠금 팝업 2"
      },
      {
        url: "/wash_warning_popup3",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "세척 - 코스선택 잠금 팝업 3"
      },
      {
        url: "/wash_warning_popup4",
        category: "popup",
        ariaLabel:"ariaLabel",
        title: "세척 - 숏폼재생 데이터 사용안내"
      },
      {
        url: "/wash_course_choice",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 세척 코스선택"
      },
      {
        url: "/wash_course_choice2",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 세척 코스선택2"
      },
      {
        url: "/wash_course_choice3",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 세척 코스선택3"
      },
      {
        url: "/washing",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 세척중"
      },
      {
        url: "/washing_shortForm",
        category: "page",
        ariaLabel:"ariaLabel",
        title: "세척 - 세척중 숏폼재생"
      }
    ]
  },

]

const lengthPageList = () =>{
  let length = {
    page: 0,
    popup: 0,
    ariaLabel:0
  }
  objectPageList.forEach((element)=>{

    element.list.forEach(( listElement )=>{
      if( listElement.category === "page" ) {
        length.page++
      }
  
      if( listElement.category === "popup" ) {
        length.popup++
      }
  
      if( listElement.ariaLabel === "ariaLabel" ) {
        length.ariaLabel++ 
      }
    })

  })
  return length
}

const PageListMain = styled.main`
  width: 100%;
  height:100vh;
  overflow-y: auto;
  color: #404040;
  margin: 0 auto;
  font-size: 20px;
  background:url(/image/splash/background_splash.png) right bottom no-repeat;
  background-size:60%;
  padding:20px;
  box-sizing: border-box;
  h1 {
    font-size: 35px;
    font-weight:bold;
    margin-bottom:10px;
    color:#111;
  }
  h2 {
    font-size: 21px;
    font-weight:bold;
  }
  .info {
    font-size: 16px;
  }
  .snowIcon {
    color: #28a5e3;
    background-color: #fff;
    border-radius: 10px;
    font-size:13px;
    position: relative;
    top: 1px;
  }

  .pageListWrap{
    width:100%;
    font-size:1rem;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 35px;
    margin-top: 35px;
    section{
      width: calc(50% - 25px);
      @media screen and (max-width: 768px) {
          width: calc(100% - 12px);
        }
      dl {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        dt {
        min-width: 100px;
        padding:10px 0px;
        position:Relative;
          mark{
            width:55px;
            border-radius:15px;
            font-size: 12px;
            text-align:Center;
            color:#fff;
            display:inline-block;
            padding:2px 0 3px;
            margin-right:10px;
            color:#fff;
            &.popup {
              background-color:#296d61;
            }
            &.page {
              background-color:#21345d;
            }
            svg {
              position:absolute;
              top:6px;
              left:44px;
              color: #28a5e3;
              background-color: #fff;
              padding: 3px;
              border-radius: 10px;
              font-size:13px;
              box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
            }
          }
        }
        dd {
          padding-right: 20px;
        }
      }
    }
  }
  .ia-info {
  padding: 15px 0;
  margin-bottom: 0; 
  display: flex;
  justify-content:space-between;
  align-items: center;
    .d-flex {
      display:flex;
      font-size: 16px;
      gap:10px;
    }
    .ia-card {
    padding: 10px 10px 8px;
    border-radius: 5px;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    width: 180px;
    }
    .note {
      font-size: 1rem;
        span{
          text-align:right
        }
    }
  }
`

const PageList = () => {
    return (
      <PageListMain>

        <h1>My Cup - Information Architecture</h1>
        <div className="ia-info">
          <div className="d-flex">
            <dl className="d-flex ia-card">
                <dt>Total</dt>
                <dd><b>{lengthPageList().page + lengthPageList().popup}</b></dd>
            </dl>
            <dl className="d-flex ia-card">
                <dt>Page</dt>
                <dd><b>{lengthPageList().page}</b></dd>
            </dl>
            <dl className="d-flex ia-card">
                <dt>popup</dt>
                <dd><b>{lengthPageList().popup}</b></dd>
            </dl>
            <dl className="d-flex ia-card">
                <dt>button</dt>
                <dd><b>1</b></dd>
            </dl>
            <dl className="d-flex ia-card">
                <dt>Bottom Sheet</dt>
                <dd><b>1</b></dd>
            </dl>
            <dl className="d-flex ia-card">
                <dt><mark className='snowIcon'><IoSnow /></mark> AriaLabel</dt>
                <dd><b>{lengthPageList().ariaLabel}</b>/{lengthPageList().ariaLabel}</dd>
            </dl>
            </div>
            <div className="note">
                <span>✸ Last Update 2023.00.00 </span>
                <span>✸ Created at 2023.11.01</span>
            </div>
            </div>


            <div className="pageListWrap">
              {
                objectPageList.map(
                  (object, index)=>{
                    const listJsx = object.list.map(
                      (listObject, listIndex)=>{
                        return(
                          <dl key={listIndex}>
                            <dt>
                              <mark className={listObject.category}>{listObject.category}{listObject.ariaLabel?<IoSnow />:null}</mark>
                              <b>{listObject.title}</b>
                            </dt>
                            <dd>
                              <Link to={listObject.url}>
                                {listObject.url}
                              </Link>
                            </dd>
                          </dl>
                        )
                      }
                    )
                    return(
                      <section key={index}>
                        <h2>{object.headline}</h2>
                        {listJsx}
                      </section>
                    )
                  }
                )
              }
            </div>
      </PageListMain>
    );
}

export default PageList;