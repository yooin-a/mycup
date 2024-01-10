import styled from '@emotion/styled'

const SelectBoxWrapper = styled.div`
    select {
        font-size: .9375rem;
        width: 100%;
        height:48px;
        border-radius: 10px;
        border:none;
        padding:0 16px;
        appearance:none;
        background: url(/image/icon/ic_chevron_down_black.svg) no-repeat #fff;
        background-position: calc(100% - 20px) center;
        &:required{
            &:invalid {
                color: color-mix(in srgb, var(--sys-primary) 30%, transparent);
            }
        }
        &:focus {
            outline: 0;
        }
        >option{
            color:var(--sys-primary);
        }
        >option[value=""][disabled] {
            display: none;
        }
    }
    
`

const SelectBox = ({children}) => {
    return (
        <SelectBoxWrapper>
            <form action="#!">
                <label htmlFor="selectForm"></label>
                <select name="" id="selectForm" required>
                    {children}
                </select>
            </form>
        </SelectBoxWrapper>
    );
}

export default SelectBox;