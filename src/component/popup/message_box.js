import styled from '@emotion/styled'
import React, {useEffect, useRef} from 'react';

const MessageBoxSection = styled.section`
    position: fixed;
    display: flex;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: rgba(0,0,0,.5);
    font-weight: 500;
    >div {
        display: flex;
        width: 100%;
        flex-flow: column;
        max-width: 335px;
        max-height: 100%;
        padding: 30px 20px 20px;
        background-color: #ffffff;
        border-radius: 10px;
        >article {
            max-height: 100%;
            overflow-y: auto;
            >section {
                margin-bottom: 24px;
                text-align: center;
                font-size: 17px;
            }
            >nav {
                display: flex;
                gap: 10px;
                flex-wrap: nowrap;
                button {
                    width: 100%;
                }
            }
            >mark {
                font-size: .8125rem;
                color:var(--sys-error);
                display:block;
                text-align:center;
                &.blue {
                    color:var(--sys-sub);
                }
            }
        }
    }
    .popupInputTextForm {       
        display: flex;
        gap:10px;
        align-items: center;
        justify-content: center;
        >input[type='text']{
            background-color: #f0f1f3;
            width: 100%;
            max-width: 180px;
        }
        .bytes {
            display: none;
        }
        >button {
            max-width: 105px;
        }
    }
    .grayTextStyle {
        display: block;
        padding:10px 20px 0;
        font-size: .9375rem;
        color:var(--sys-secondary)
    }
`

const MessageBox = ({display, content, inputTextContent, redText, button, button2, style, color}) => {
    const messageBoxArticle = useRef(null);
    useEffect(()=>{
        if(display === true){
            messageBoxArticle.current.setAttribute("tabindex","-1")
            messageBoxArticle.current.focus()
        }
        
    },[display])
    if(display === true) {
        return (
            <MessageBoxSection>
                <div>
                    <article>
                        <section ref={messageBoxArticle} role="dialog">
                            <p role='text'>{content}</p>
                            {inputTextContent}
                        </section>
                        <mark style={style} className={color} role='text'>
                            {redText}
                        </mark>
                        <nav>
                            {button} {button2}
                        </nav>
                    </article>
                </div>
            </MessageBoxSection>
        );
    }
}

export default MessageBox;