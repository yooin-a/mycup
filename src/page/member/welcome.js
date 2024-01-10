import styled from '@emotion/styled'
import React from 'react'
import ButtonCommon from '../../component/button/button_common'
import InputTextCommon from '../../component/input/inputText_common'


const WelcomeMain = styled.main`
    background:no-repeat top/100% url(/image/home/background_home.png) ;
    box-sizing: border-box;
    padding:0 20px 48px;
    min-height: 100vh;
    h1 {
        font-weight: bold;
        font-size: 1.75rem;
        line-height: 1.36;
        margin-bottom:4px;
        padding-top:68px
    }
    >p{
        font-size: 0.9375rem;
        line-height:1.3125rem;
        margin-bottom:24px
    }

    .noticeList {
        margin-top:52px;
        background:rgba(255,255,255,.5);
        padding: 16px 20px 14px;
        color:var(--sys-secondary);
        line-height: 21px;
        font-size: .9375rem;
        border-radius: 10px;
        h2 {
            color:var(--sys-primary);
            font-size: 1rem;
            line-height: 1.375rem;
            margin-bottom:12px;
            font-weight: 600;
        }
        ul>li {
            display: flex;
            align-items: center;
            padding-left: 10px;
            position: relative;
            color: var(--sys-secondary);
            :before {
                content: '';
                position:absolute;
                display: block;
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background-color: var(--sys-secondary);
                left:0
            }
        }
    }

`

const Welcome = ({error, valueText, info}) => {

    return (
      <WelcomeMain>
        <h1>환영해요!</h1>
        <p role='text'>마이컵 유니버스에 온 당신!<br/>뭐라고 불러드릴까요?</p>

        <InputTextCommon 
            valueText={valueText} 
            info={info} 
            inputLengthMax={12} 
            inputInfo={true} 
            placeholder="닉네임을 입력해주세요" 
            type="nickname"
        />

        <div className="noticeList">
            <h2>유의사항</h2>
            <ul>
                <li>닉네임은 추후 변경 가능합니다. </li>
                <li>닉네임은 한글 2글자~6글자까지, 영문/숫자는 12글자까지 등록할 수 있어요.</li>
                <li>닉네임은 세척서비스를 이용할 때 세척기 화면에 표시됩니다.</li>
                <li>부적절한 닉네임은 사용이 제한됩니다.</li>
            </ul>
        </div>
        <div className="fixedButton">
        <ButtonCommon
            color="black"
        >
            마이컵 시작하기
        </ButtonCommon>
        </div>
      </WelcomeMain>
    );
}

export default Welcome;