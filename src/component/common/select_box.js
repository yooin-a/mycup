import React from 'react';
import styled from '@emotion/styled'

const SelectBoxWrapper = styled.select`
    appearance: none;
    border: none;
    background-color: transparent;
    background-image: url("/image/icon/icon_arrow_down_gray.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 16px 16px;
    padding-right: 16px;
    color: var(--sys-secondary);
    font-size: 13px;
    line-height: 1.3076;
`

const SelectBox = ({listOption, name, id})=>{
    return(
        <SelectBoxWrapper name={name} id={id} className="select-sort">
            {
                listOption.map(
                    (element, index)=>{
                        return(
                            <option key={index} value={element.value}>{element.content}</option>
                        )
                    }
                )
            }
        </SelectBoxWrapper>
    )
}

export default SelectBox;