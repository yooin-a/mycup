import React,{useRef, useState, useEffect, useCallback} from 'react'
import styled from '@emotion/styled'

const InputTextLabelDiv = styled.div`
    position:relative;
    input[type="text"] {
        width: 100%;
        padding: 14px 16px 15px;
        font-size:15px;
        background-color:#fff;
        border:0;
        border-radius:10px;
        font-weight:500;
        box-sizing: border-box;
        :focus {
            outline: none;
        }  
        &.gray {
            background-color:#f0f1f3;
        }
        &::placeholder{
            color: color-mix(in srgb, var(--sys-primary) 30%, transparent);
        }
    }
    span{
        position:absolute;
        top:15px;
        right:20px;
        font-size:12px;
        line-height: 21px;
        color: color-mix(in srgb, var(--sys-primary) 30%, transparent);
    }
    .info {
        font-size: .8125rem;
        line-height: 1.0625rem;
        position:absolute;
        top:60px;
        display:none;
    }
    &.fieldError input[type="text"]{
        padding: 14px 16px 15px;
        border:1px solid red;
    }
    &.fieldError span,
    &.fieldError .info{
        color:red;
        display:block;
    }
    &.fieldError.nobytes span {
        color: color-mix(in srgb, var(--sys-primary) 30%, transparent);        
    }
`

const InputTextLabel = ({color, valueText, placeholder, type, inputLengthMax, inputInfo})=>{
    const INPUT_LENGTH_MAX = inputLengthMax;
    const [alertMessage, setAlertMessage] = useState(null)
    const [nicknameLength, setNicknameLength] = useState(0)
    let inputRef = useRef(null);

    const getLetterCount = (string) => {

        const reKorean = /[^(ㄱ-ㅣ가-힣)]/;
        const reEnglishNumber = /[^(a-zA-Z0-9)]/;
        const reSpace = /[^(\s)]/;

        const arrString = string.split("")

        let letterLength = 0;

        arrString.forEach((letter)=>{
            if( !reKorean.test(letter) ){
                letterLength = letterLength + 2;
            } else if ( !reEnglishNumber.test(letter) ) {
                letterLength = letterLength + 1;
            } else if ( !reSpace.test(letter) ) {
                letterLength = letterLength + 1;
            }
        })

        return letterLength;

    }
    const isIncludeBadWord = (string)=>{
        const arrBadWord = ["안되는", "닉네임들", "배열"]
        return arrBadWord.some(char => string.includes(char));
    }

    const checkInputNickname = useCallback(
        ()=>{
            const inputValue = inputRef.current.value;
            const reNickname = /[^(ㄱ-ㅣ가-힣a-zA-Z0-9\s)]/;
            setNicknameLength( getLetterCount(inputValue) );
            if( reNickname.test( inputValue ) ){
                setAlertMessage("한글/영어/숫자만 입력해 주세요.")
            } else if( getLetterCount(inputValue) > INPUT_LENGTH_MAX || getLetterCount(inputValue) < 4 ) {
                setAlertMessage("닉네임 글자수를 확인해주세요.")
            } else if ( isIncludeBadWord(inputValue) ) {
                setAlertMessage("사용할 수 없는 닉네임입니다.")
            } else {
                setAlertMessage(null)
            }
        }, [INPUT_LENGTH_MAX]
    )
        

    useEffect(()=>{
        if(valueText){
            inputRef.current.value = valueText
            checkInputNickname();
        }
    },[valueText, checkInputNickname])
    return(
        <>
            <InputTextLabelDiv className={alertMessage?"fieldError":""}>
                <label htmlFor="Nickname-field"></label>
                <input 
                    type="text" 
                    id="Nickname-field" 
                    onChange={(event)=>{
                        switch (type) {
                            case "nickname":
                                checkInputNickname()
                                break;
                                default:
                        }
                    }} 
                    ref={inputRef} 
                    className={color} 
                    placeholder={placeholder}
                />
                {
                    INPUT_LENGTH_MAX?
                    <div className='bytes' aria-label={`${nicknameLength}/${INPUT_LENGTH_MAX} bytes`} tabIndex={0}>
                        <span aria-hidden="true">
                            {nicknameLength}/{INPUT_LENGTH_MAX} bytes
                        </span>
                    </div>
                    :null
                }
                {
                    inputInfo&&
                    <p className="info" aria-live="polite">
                        {alertMessage}
                    </p>
                }
                
            </InputTextLabelDiv>
        </>
    )
}

export default InputTextLabel;