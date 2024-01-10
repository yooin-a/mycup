import styled from '@emotion/styled'
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';

const ButtonCommonWrapper = styled.button`
    width: 100%;
    border-radius: 10px;
    padding: 11px 10px 15px;
    background-color: var(--sys-primary);
    color: var(--sys-on-primary);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.375;
    &:disabled,
    &[disabled]{
        background-color: var(--sys-secondary-on-white);
        color: var(--sys-primary);
        opacity:.3;
    }
    &.medium {
        border-radius:50rem;
        font-size: 14px;
        line-height: 1.29;
        padding: 6.5px 19.5px;
    }
    &.small {
        border-radius:50rem;
        font-size: 13px;
        line-height: 1.31;
        padding: 6px 12px 4px;
        width: auto;
    }
    &.white {
        background-color: var(--sys-on-primary);
        color: var(--sys-primary);
    }
    &.gray{
        background-color: var(--sys-secondary-on-white);
        color: var(--sys-primary);
    }
    &.black{
        background-color: var(--sys-primary);
        color: var(--sys-on-primary);
    }
`

const ButtonCommon = ({onClick, size, color, disabled, children}) => {
    useEffect(() => {
        setAriaLabel();    
    }, []);

    return(
        <ButtonCommonWrapper sal="true" 
            onClick={
                onClick ? 
                onClick
                : null
            }
            className={`
                ${size} ${color}
            `}

            disabled={disabled}

        >
            {children}
        </ButtonCommonWrapper>
    )
}

export default ButtonCommon;