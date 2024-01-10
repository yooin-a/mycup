import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from '../common/scroll_to_top'
import GuideBtn from '../../page/styleGuide/button'
import Home from '../../page/home/home'
import Splash from '../../page/splash/splash'
import Walkthrough from '../../page/home/walkthrough'
import PageList from '../../page/develope/page_list'
import Coachmark from '../../page/home/coachmark/coachmark'
import NotificationList from '../../page/notification/notification_list'
import NotificationListEvent from '../../page/notification/notification_list_event'
import NotiPopup from '../../page/popup/popup'
import Wash from '../../page/wash/wash_place_list'
import WelcomeLogin from '../../page/member/welcome'
import QrCodePage from '../../page/QRCode/QRcode'
import EventListPage from '../../page/event/event_list'
import EventListPage2 from '../../page/event/event_list2'
import EventListPage3 from '../../page/event/event_list3'
import EventNoChallengePage from '../../page/event/challenge_no_list'
import EventNoChallengePage2 from '../../page/event/challenge_no_list2'
import EventViewPage from '../../page/event/event_view'
import EventNoViewPage from '../../page/event/event_no_list'
import EventNoViewPage2 from '../../page/event/event_no_list2'
import MyPageUser from '../../page/my/mypage_user'
import MyPageUserModify from '../../page/my/mypage_user_modify.js'
import MyPageAdmin from '../../page/my/mypage_admin.js'
import LevelBadge from '../../page/my/level_badge.js'
import Content from '../../page/content/content.js'
import ContentDetailVideo from '../../page/content/content_detail_video.js'
import ContentDetailBlog from '../../page/content/content_detail_blog.js'
import ContentDetailShort from '../../page/content/content_detail_short.js'
import ContentOriginNotice from '../../page/content/content_origin_notice'
import MyPageAdminMonitoring from '../../page/my/mypage_admin_monitoring'
import MyPageAdminAdd from '../../page/my/mypage_admin_add'
import MyPageAdminQRAdd from '../../page/my/mypage_admin_QR_add'
import MyPageAdminIDAdd from '../../page/my/mypage_admin_ID_add'
import MyPageAdminIDAddError from '../../page/my/mypage_admin_ID_add_error'
import MyPageAdminReservation from '../../page/my/mypage_admin_reservation'
import MyPageAdminReservationList from '../../page/my/mypage_admin_reservation_list'
import MyPageWashReportWrapper from '../../page/my/mypage_wash_report'
import MyPageAdminPlace from '../../page/my/mypage_admin_place'
import MyPageAdminReservationCheck from '../../page/my/mypage_admin_reservation_check'
import MyPageFAQ from '../../page/my/mypage_FAQ_list'
import MyPageQnA from '../../page/my/mypage_qna'
import MyPageQnAList from '../../page/my/mypage_qna_list'
import MyPageQnAView from '../../page/my/mypage_qna_view'
import MyPageNoticeList from '../../page/my/mypage_notice_list'
import MyPageNoticeView from '../../page/my/mypage_notice_view'
import MyPageSetting from '../../page/my/mypage_setting'
import MyPageAgreeList from '../../page/my/mypage_agree_list'
import MyPageAgreeView from '../../page/my/mypage_agree_view'
import WashPlaceList from '../../page/wash/wash_place_list'
import WashPlaceMap from '../../page/wash/wash_place_map'
import WashPlaceView from '../../page/wash/wash_place_view'
import WashPlaceView2 from '../../page/wash/wash_place_view2'
import WashPlaceSearch from '../../page/wash/wash_place_search'
import WashPlaceNoSearch from '../../page/wash/wash_place_no_search'
import WashPlaceNoList from '../../page/wash/wash_place_no_list'
import WashCourseChoice from '../../page/wash/wash_course_choice'
import WashingPage from '../../page/wash/washing'
import WashingShortForm from '../../page/wash/washing_shortForm'

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/GuideButton" element={<GuideBtn />}></Route>

                <Route path="/home" element={<Home />}></Route>

                <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
                
                <Route path="/walkthrough" element={<Walkthrough />}></Route>

                <Route path="/splash" element={<Splash
                    status={
                        {
                            messagebox: false,
                            appAccess: false,
                        }
                    }
                />}></Route>
                <Route path="/splash/disconnected" element={
                    <Splash status={
                            {
                                messagebox: true,
                                appAccess: false,
                            }

                        }/>
                    }
                ></Route>
                <Route path="/splash/app-access" element={
                    <Splash status={
                            {
                                messagebox: false,
                                appAccess: true,
                            }

                        }/>
                    }
                ></Route>

                <Route path="/page-list" element={<PageList />}></Route>

                <Route path="/home/coachmark" element={<Coachmark />}></Route>
                
                <Route path="/home/coachmark/9-16" element={<Coachmark ratio="9:16"/>}></Route>

                <Route path="/notification" element={<NotificationList displayNotiContent={true} />}></Route>
                <Route path="/notification-event" element={<NotificationListEvent displayNotiContent={true} />}></Route>
                <Route path="/notification/no-notification" element={<NotificationList displayNotiContent={false} />}></Route>

                <Route path="/wash" element={<Wash />}></Route>

                <Route path="/welcome-placeholder" element={
                    <WelcomeLogin/>}
                    ></Route>
                <Route path="/welcome" element={
                    <WelcomeLogin 
                        valueText = '적절한닉네임' />}
                    ></Route>
                <Route path="/welcome-nicknameError" element={
                    <WelcomeLogin
                        valueText = '6글자초과닉네임' 
                        />}
                    ></Route>
                <Route path="/welcome-nicknameError2" element={
                    <WelcomeLogin
                        valueText = '안되는닉네임' 
                        />}
                    ></Route>
                <Route path="/welcome-nicknameError3" element={
                    <WelcomeLogin
                        valueText = '뿅'
                        />}
                    ></Route>
                <Route path="/welcome-nicknameError4" element={
                    <WelcomeLogin
                        valueText = '無量空処'
                        />}
                    ></Route>
                <Route path="/welcome-popup" element={
                    <NotiPopup status={
                            {
                                welcomeMessage:true,
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/qrCode_main" element={
                    <QrCodePage status={
                            {
                                qrcodeFirstPage: true,
                            }

                        }/>
                    }
                ></Route>

                <Route path="/qrCode_count" element={
                    <QrCodePage status={
                            {
                                qrcodePage1: true,
                            }
                        }/>
                    }
                ></Route>

                <Route path="/qrCode_refresh" element={
                    <QrCodePage status={
                            {
                                qrcodePage5: true,
                            }
                        }/>
                    }
                ></Route>

                <Route path="/qrCode_count2" element={
                    <QrCodePage status={
                            {
                                qrcodePage2: true,
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/qrCode_count3" element={
                    <QrCodePage status={
                            {
                                qrcodePage3: true,
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/qrCode_count4" element={
                    <QrCodePage status={
                            {
                                qrcodePage4: true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/qrCode_popup" element={
                    <NotiPopup status={
                            {
                                QrcodeMessage:true,
                            }
                        }/>
                    }
                ></Route>
                <Route path="/qrCode_waiting_popup" element={
                    <NotiPopup status={
                            {
                                QrcodeWaitingMessage:true
                            }
                        }/>
                    }
                ></Route>

                <Route path="/event-list" element={<EventListPage />}></Route>
                <Route path="/event-list2" element={<EventListPage2 />}></Route>
                <Route path="/event-list3" element={<EventListPage3 />}></Route>

                <Route path="/challenge-no-list" element={<EventNoChallengePage />}></Route>
                <Route path="/challenge-no-list2" element={<EventNoChallengePage2 />}></Route>


                <Route path="/event-view" element={
                    <EventViewPage
                        eventViewText = {["HTML",<br/>,"(이벤트 안내, 홍보, 유의사항 등)"]}
                        display = {
                            {
                                time : true
                            }
                        }
                        />}
                    ></Route>
                    
                <Route path="/event-view2" element={
                    <EventViewPage
                        eventViewText = "HTML"
                        display = {
                            {
                                time : false
                            }
                        }
                        buttonCommonText = "신규회원 선물 받기"
                        />}
                    ></Route>
                    
                <Route path="/event-view3" element={
                    <EventViewPage
                        eventViewText = "HTML"
                        display = {
                            {
                                time : false
                            }
                        }
                        buttonCommonText = "당첨 확인하기"
                        />}
                    ></Route>

                <Route path="/event-view4" element={
                    <EventViewPage
                        eventViewText = {["HTML",<br/>,"(챌린지 안내, 홍보, 유의사항 등)"]}
                        display = {
                            {
                                time : false
                            }
                        }
                        buttonCommonText = "챌린지 참여하기"
                        />}
                    ></Route>

                <Route path="/event-no-list" element={<EventNoViewPage/>}></Route>

                <Route path="/event-no-list2" element={<EventNoViewPage2/>}></Route>

                <Route path="/event_end_popup" element={
                    <NotiPopup status={
                            {
                                EventEndMessage:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/event_present_popup" element={
                    <NotiPopup status={
                            {
                                EventPresentMessage:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/event_notice_popup" element={
                    <NotiPopup status={
                            {
                                EventNoticeMessage:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/event_prize_popup" element={
                    <NotiPopup status={
                            {
                                EventPrizeMessage:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/event_chance_popup" element={
                    <NotiPopup status={
                            {
                                EventChanceMessage:true
                            }
                        }/>
                    }
                ></Route>

                <Route path="/mypage_user" element={<MyPageUser/>}></Route>

                <Route path="/mypage_user_modify" element={<MyPageUserModify/>}></Route>

                <Route path="/mypage_admin" element={<MyPageAdmin/>}></Route>
                <Route path="/mypage/level-badge" element={<LevelBadge ecoHistoryLength={3}/>}></Route>
                <Route path="/mypage/level-badge/no-eco-history" element={<LevelBadge ecoHistoryLength={0}/>}></Route>

                <Route path="/content" element={<Content />}></Route>
                <Route path="/content/detail-blog" element={<ContentDetailBlog/>}></Route>
                <Route path="/content/detail-video" element={<ContentDetailVideo/>}></Route>
                <Route path="/content/detail-short" element={<ContentDetailShort/>}></Route>
                <Route path="/content/origin-notice" element={<ContentOriginNotice/>}></Route>

                <Route path="/mypage_popupError_nickName" element={
                    <NotiPopup status={
                            {
                                MyPagePopupErrorNickName:true
                            }
                        }/>
                    }
                ></Route>

                <Route path="/mypage_popup_nickName" element={
                    <NotiPopup status={
                            {
                                MyPagePopupNickName:true
                            }
                        }/>
                    }
                ></Route>

                <Route path="/mypage_popup_logout" element={
                    <NotiPopup status={
                            {
                                MyPagePopupLogout:true
                            }
                        }/>
                    }
                ></Route>  
                
                <Route path="/mypage_admin_monitoring" element={<MyPageAdminMonitoring/>}></Route>

                <Route path="/mypage_admin_add" element={<MyPageAdminAdd/>}></Route>

                <Route path="/mypage_admin_QR_add" element={<MyPageAdminQRAdd/>}></Route>

                <Route path="/mypage_admin_ID_add" element={<MyPageAdminIDAdd/>}></Route>

                <Route path="/mypage_admin_ID_add_error" element={<MyPageAdminIDAddError/>}></Route>

                <Route path="/mypage_admin_reservation" element={<MyPageAdminReservation/>}></Route>

                <Route path="/mypage_admin_reservation_list" element={<MyPageAdminReservationList/>}></Route>

                <Route path="/mypage_admin_popup_delete" element={
                    <NotiPopup status={
                            {
                                MyPageAdminDelete:true
                            }
                        }/>
                    }
                ></Route>  
                
                <Route path="/mypage_admin_popup_delete2" element={
                    <NotiPopup status={
                            {
                                MyPageAdminDelete2:true
                            }
                        }/>
                    }
                ></Route>  
                
                <Route path="/mypage_admin_popup_reservation_cancel" element={
                    <NotiPopup status={
                            {
                                MyPageReservationCancel:true
                            }
                        }/>
                    }
                ></Route>  
                
                <Route path="/mypage_admin_popup_reservation" element={
                    <NotiPopup status={
                            {
                                MyPageReservation:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/mypage_admin_popup_reservation_confirm" element={
                    <NotiPopup status={
                            {
                                MyPageReservationConfirm:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/mypage_admin_popup_save" element={
                    <NotiPopup status={
                            {
                                MyPageSave:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/mypage_admin_place" element={<MyPageAdminPlace/>}></Route>

                <Route path="/mypage_admin_reservation_check" element={<MyPageAdminReservationCheck/>}></Route>

                <Route path="/mypage_FAQ_list" element={<MyPageFAQ/>}></Route>

                <Route path="/mypage_qna" element={<MyPageQnA/>}></Route>

                <Route path="/mypage_qna_list" element={<MyPageQnAList/>}></Route>

                <Route path="/mypage_qna_view" element={<MyPageQnAView/>}></Route>

                <Route path="/mypage_notice_list" element={<MyPageNoticeList/>}></Route>

                <Route path="/mypage_notice_view" element={<MyPageNoticeView/>}></Route>
                
                <Route path="/mypage_qna_cancel_popup" element={
                    <NotiPopup status={
                            {
                                MyPageQnACancel:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/mypage_qna_save_popup" element={
                    <NotiPopup status={
                            {
                                MyPageQnASave:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/mypage_push_agree_popup" element={
                    <NotiPopup status={
                            {
                                MyPagePushAgree:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/mypage_push_agree_popup2" element={
                    <NotiPopup status={
                            {
                                MyPagePushAgree2:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/mypage_user_prepares" element={
                    <NotiPopup status={
                            {
                                MyPagePrepares:true
                            }
                        }/>
                    }
                ></Route>
                
                <Route path="/mypage_setting" element={<MyPageSetting/>}></Route>

                <Route path="/mypage_agree_list" element={<MyPageAgreeList/>}></Route>

                <Route path="/mypage_agree_view" element={<MyPageAgreeView/>}></Route>

                <Route path="/wash_place_list" element={<WashPlaceList/>}></Route>

                <Route path="/wash_place_map" element={<WashPlaceMap/>}></Route>

                <Route path="/wash_place_view" element={<WashPlaceView/>}></Route>

                <Route path="/wash_place_view2" element={<WashPlaceView2/>}></Route>

                <Route path="/wash_setting_popup" element={
                    <NotiPopup status={
                            {
                                washSetting:true
                            }
                        }/>
                    }
                ></Route>

                <Route path="/wash_place_search" element={<WashPlaceSearch/>}></Route>

                <Route path="/wash_place_no_search" element={<WashPlaceNoSearch/>}></Route>

                <Route path="/wash_place_no_list" element={<WashPlaceNoList/>}></Route>
                
                <Route path="/wash_warning_popup" element={
                    <NotiPopup status={
                            {
                                washWarning:true,
                            }
                        }/>
                    }
                ></Route>
                <Route path="/wash_warning_popup2" element={
                    <NotiPopup status={
                            {
                                washWarning2:true,
                            }
                        }/>
                    }
                ></Route>
                <Route path="/wash_warning_popup3" element={
                    <NotiPopup status={
                            {
                                washWarning3:true,
                            }
                        }/>
                    }
                ></Route>
                <Route path="/wash_warning_popup4" element={
                    <NotiPopup status={
                            {
                                washWarning4:true,
                            }
                        }/>
                    }
                ></Route>

                <Route path="/wash-report" element={<MyPageWashReportWrapper/>}></Route>  

                <Route path="/wash_course_choice" element={
                    <WashCourseChoice
                        buttonCommonText = '세척하기'
                        />}
                    ></Route>

                <Route path="/wash_course_choice2" element={
                    <WashCourseChoice
                        buttonCommonText = '줄서기'
                        />}
                    ></Route>

                <Route path="/wash_course_choice3" element={
                    <WashCourseChoice
                        courseChoiceNotiText = '선택하신 장소에서는 현재 쾌속 세척만 가능해요.'
                        errorMessageText = '세척 코스를 선택해 주세요.'
                        buttonCommonText = '세척하기'
                        />}
                    ></Route>

                <Route path="/washing" element={<WashingPage/>}></Route>  

                <Route path="/washing_shortForm" element={<WashingShortForm/>}></Route>  

            </Routes>
        </BrowserRouter>
    )
}

export default Router;