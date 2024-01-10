import styled from '@emotion/styled'

const CheckboxLabelDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    input {
        width: 20px;
        height: 20px;
        appearance: none;
        margin: 0;
        &::after{
            content:'';
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 2px;
            background-color: var(--sys-on-primary);
        }

        &:checked {
            &::after{
                background-color: var(--sys-primary);
                background-image: url(/image/icon/icon_check_white.svg);
                background-repeat: no-repeat;
                background-size: 12px 6.8px;
                background-position: center center;
            }
        }       
        &:disabled {
            &::after {
                background-color: color-mix(in srgb, var(--sys-primary) 10%, transparent);
            }
        }
    }
    label {
        font-size: 15px;
        line-height: 1.33;
        font-weight: 500;
    }
`

const CheckboxLabel = ({checked, contentLabel, disabled})=>{
    
    return(
        <CheckboxLabelDiv className="checkbox-label">
            <input type="checkbox" id="show-next-time" checked={checked} disabled={disabled}/>
            <label htmlFor="show-next-time">
                {contentLabel}
            </label>
        </CheckboxLabelDiv>
    )
}

export default CheckboxLabel;