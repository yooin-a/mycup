import styled from '@emotion/styled'

const QuickButton = styled.button`
    position:fixed;
    bottom:48px;
    right:20px;
    background:var(--sys-primary);
    color:#fff;
    padding:15px 15px 14px;
    border-radius: 24px;
     img {
        vertical-align: middle;
        margin-left:4px
     }
`

const QuickBtnFixed = ({btnTitle, Children, style}) => {
    return(
        <QuickButton style={style}>
            {btnTitle}
            {Children}
        </QuickButton>
    )
}

export default QuickBtnFixed;