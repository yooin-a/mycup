import MessageBox from '../../component/popup/message_box'
import ButtonCommon from '../../component/button/button_common'
import InputTextLabel from '../../component/input/inputText_common'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';

const NotiPopup = (props) => {
    useEffect(()=>{
        setAriaLabel();
      },[])
    return (
      <>
        <MessageBox
            content={
                <>
                    알림을 삭제하시겠어요?
                </>
            }
            button={
                <ButtonCommon 
                    size="large" 
                    color="gray" 
                    >
                    취소
                </ButtonCommon>
            }
            button2={
                <ButtonCommon 
                    size="large" 
                    color="black" 
                    >
                    삭제하기
                </ButtonCommon>
            }
            display={
                props.status.deleteMessage
            }
        />
        <MessageBox
            content={
                <>
                    알림 삭제에 실패했습니다.<br/>다시 시도해주세요.
                </>
            }
            button={
                <ButtonCommon 
                    size="large" 
                    color="black" 
                    >
                    확인
                </ButtonCommon>
            }
            display={
                props.status.failDeleteMessage
            }
            />
        <MessageBox
            content={
                <>
                    마이컵 계정은 이미 만들어졌는데..<br/>
                    여기서 중단하실건가요?<br/>
                    입력하신 정보는 저장되지 않습니다.
                </>
            }
            button={
                <ButtonCommon 
                    size="large" 
                    color="black" 
                    >
                    가입 계속하기
                </ButtonCommon>
            }
            display={
                props.status.welcomeMessage
            }
            />

            <MessageBox
                content={
                    <>
                        줄서기가 취소되었습니다. 
                    </>
                }
                button={
                    <ButtonCommon 
                        size="large" 
                        color="black" 
                        >
                        확인
                    </ButtonCommon>
                }
                display={
                    props.status.QrcodeMessage
                }
                />

                
            <MessageBox
                content={
                    <>
                        줄서기를 취소하시겠어요?
                    </>
                }
                button={
                    <>
                    <ButtonCommon 
                        size="large" 
                        color="gray" 
                        >
                        네, 줄서기 취소
                    </ButtonCommon>
                    <ButtonCommon 
                        size="large" 
                        color="black" 
                        >
                        아니요, 줄서기 유지
                    </ButtonCommon>
                </>                
                }
                display={
                    props.status.QrcodeWaitingMessage
                }
                />
                
                <MessageBox
                    content={
                        <>
                            당첨자 선정 중이에요.<br/>조금만 기다려주세요!
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.EventEndMessage
                    }
                />
                <MessageBox
                    content={
                        <>
                            신규회원 선물이 지급되었습니다.<br/>마이 {'>'} 쿠폰함을 확인해주세요.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.EventPresentMessage
                    }
                />
                <MessageBox
                    content={
                        <>
                            선물 지급 대상자가 아닙니다.<br/>이벤트 유의사항을 확인해주세요.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.EventNoticeMessage
                    }
                />
                <MessageBox
                    content={
                        <>
                            짝짝짝! 당첨을 축하드립니다!<br/>마이 {'>'} 쿠폰함을 확인해주세요.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.EventPrizeMessage
                    }
                />
                <MessageBox
                    content={
                        <>
                            아쉽게도 당첨자 명단에 없습니다.<br/>하지만 기회는 또 올 거예요!

                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.EventChanceMessage
                    }
                />

                <MessageBox
                    inputTextContent={
                        <>
                            <div className='popupInputTextForm'>
                                <InputTextLabel color="gray" valueText="닉네임닉네임"></InputTextLabel>
                                <ButtonCommon color="black">
                                    사용하기
                                </ButtonCommon>
                            </div>
                        </>
                    }
                    style={{marginBottom:'4px'}}
                    redText={
                        <>
                        닉네임은 한글 6글자, 영문 12글자를 초과할 수 없습니다.<br />
                        사용할 수 없는 닉네임입니다.<br/>한글/영문/숫자만 입력 가능합니다.
                        </>
                    }
                    display={
                        props.status.MyPagePopupErrorNickName
                    }
                />

                <MessageBox
                    inputTextContent={
                        <>
                            <div className='popupInputTextForm'>
                                <InputTextLabel color="gray" valueText="닉네임닉네임" bytes=""></InputTextLabel>
                                <ButtonCommon color="black">
                                    사용하기
                                </ButtonCommon>
                            </div>
                        </>
                    }
                    style={{marginBottom:'4px'}}
                    color={'blue'}
                    redText={
                        <>
                        사용 가능한 닉네임입니다.
                        </>
                    }
                    display={
                        props.status.MyPagePopupNickName
                    }
                />

                <MessageBox
                    content={
                        <>
                            로그아웃 할까요?
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="gray" 
                            >
                            취소
                        </ButtonCommon>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            로그아웃
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPagePopupLogout
                    }
                />

                <MessageBox
                    content={
                        <>
                            닉네임 : 닉네임닉네임<br/>
                            ID : mycup ID<br/>
                            관리기기 : 장소명_세척기번호<br/><br/>
                            서브관리자 권한을 삭제하시겠습니까?
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="gray" 
                            >
                            취소
                        </ButtonCommon>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            권한삭제
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPageAdminDelete
                    }
                />

                <MessageBox
                    content={
                        <>
                            닉네임 : 닉네임닉네임<br/>
                            ID : mycup ID<br/>
                            관리기기 : 장소명_세척기번호<br/><br/>
                            서브관리자 권한이 삭제되었습니다.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPageAdminDelete2
                    }
                />

                <MessageBox
                    content={
                        <>
                            예약을 취소하시겠습니까?<br/>
                            입력중이던 내용은 저장되지 않습니다.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="gray" 
                            >
                            작성 취소
                        </ButtonCommon>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            계속 작성
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPageReservationCancel
                    }
                />

                <MessageBox
                    content={
                        <>
                            아래 내용으로 방문서비스를 예약합니다.
                            <span className='grayTextStyle' style={{textAlign:'left'}}>
                                점검필요기기 : 장소명+세척기번호<br/>
                                방문희망일시 : m월 dd일 hh시<br/>
                                방문예약장소 : 설치장소 주소
                            </span>
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="gray" 
                            >
                            작성 취소
                        </ButtonCommon>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            예약신청
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPageReservation
                    }
                />

                <MessageBox
                    content={
                        <>
                            방문서비스 신청이 완료되었습니다.
                            <span className='grayTextStyle'>
                            확인을 위해 서비스매니저가 한번 더 전화를 드릴 예정이며, 일정이 조정될 수 있습니다.
                            </span>
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPageReservationConfirm
                    }
                />

                <MessageBox
                    content={
                        <>
                           변경하신 내용이 저장되었습니다.<br/>
                           변경한 내용은 익일부터 반영됩니다.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPageSave
                    }
                />

                <MessageBox
                    content={
                        <>
                           문의 작성을 취소하시겠어요?<br/>작성중이던 내용은 저장되지 않아요.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="gray" 
                            >
                            작성 취소
                        </ButtonCommon>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            계속 작성
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPageQnACancel
                    }
                />

                <MessageBox
                    content={
                        <>
                           1:1 문의를 등록하시겠어요?
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="gray" 
                            >
                            취소
                        </ButtonCommon>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            등록하기
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPageQnASave
                    }
                />

                <MessageBox
                    content={
                        <>
                           <b>마케팅 정보 앱 푸시 알림 동의 안내</b>
                           <span className='grayTextStyle' style={{textAlign:'left'}}>
                            전송자: LG전자 마이컵<br/>
                            수신동의 일시: <span aria-label='2023년 09월 30일 09시 30분 12초'>2023-09-30 09:30:12</span><br/>
                            처리내용: 수신동의 처리완료
                           </span>
                           <p style={{textAlign:'center',fontSize:'0.9375rem', marginTop:'20px'}}>*마이페이지에서 변경 가능합니다.</p>
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPagePushAgree
                    }
                />

                <MessageBox
                    content={
                        <>
                           <b>마케팅 정보 앱 푸시 알림 거부 안내</b>
                           <span className='grayTextStyle' style={{textAlign:'left'}}>
                            전송자: LG전자 마이컵<br/>
                            수신동의 일시: <span aria-label='2023년 09월 30일 09시 30분 12초'>2023-09-30 09:30:12</span><br/>
                            처리내용: 수신거부 처리완료
                           </span>
                           <p style={{textAlign:'center',fontSize:'0.9375rem', marginTop:'20px'}}>*마이페이지에서 변경 가능합니다.</p>
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPagePushAgree2
                    }
                />


                <MessageBox
                    content={
                        <>
                            준비중입니다.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.MyPagePrepares
                    }
                />

                <MessageBox
                    content={
                        <>
                           가까운 세척 장소를 확인하기 위해<br/>마이컵 앱에게 위치 권한을 허용해주세요.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            color="gray" 
                            >
                            닫기
                        </ButtonCommon>
                        <ButtonCommon 
                            color="black" 
                            >
                            설정하러 가기
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.washSetting
                    }
                />

                <MessageBox
                    content={
                        <>
                           세척 완료 시 30초간 세척기 도어가 열리지 않으며, 잠금 해제를 위해서는 본인 인증이 필요합니다.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.washWarning
                    }
                />

                <MessageBox
                    content={
                        <>
                           세척 완료 즉시 세척기 도어<br/>잠금이 해제돼요.<br/>컵 분실과 도난에 유의해주세요.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.washWarning2
                    }
                />

                <MessageBox
                    content={
                        <>
                           줄서기를 하기 위해서는<br/>알림 권한이 필요해요. 
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.washWarning3
                    }
                />

                <MessageBox
                    content={
                        <>
                           영상을 재생하려면<br/>모바일 데이터가 사용돼요.<br/><br/>사용을 원치 않으시면 휴대폰의<br/>와이파이를 켜고 시청해주세요.
                        </>
                    }
                    button={
                        <>
                        <ButtonCommon 
                            size="large" 
                            color="black" 
                            >
                            확인
                        </ButtonCommon>
                    </>                
                    }
                    display={
                        props.status.washWarning4
                    }
                />

      </>
    );
}

export default NotiPopup;