import styled from '@emotion/styled'

const RadioLabelDiv = styled.div`
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

        &.circle::after {
            border-radius: 20px;
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

const RadioLabel = ({checked, contentLabel, disabled, shape})=>{
    
    return(
        <RadioLabelDiv className="checkbox-label">
            <input type="radio" name="radioBtn" id="show-next-time" className={shape} checked={checked} disabled={disabled}/>
            <label htmlFor="show-next-time">
                {contentLabel}
            </label>
        </RadioLabelDiv>
    )
}

export default RadioLabel;