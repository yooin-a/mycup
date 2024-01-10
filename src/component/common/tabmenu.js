import styled from '@emotion/styled'
import React, {useEffect} from 'react';

const TabmenuWrap = styled.div`
    position: relative;
    &::after{
        position: absolute;
        display: block;
        top:0;
        right: 0;
        content: '';
        background: linear-gradient(to right, rgba(240, 241, 243, 0), #f0f1f3 96%);
        width: 75px;
        height: 100%;
    }
    &.border{
        &::before{
            content:'';
            position: absolute;
            bottom: 8px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--sys-divider);
        }
    }
    .tabmenu {
        width: 100%;
        overflow-x: auto;
        margin-bottom:12px;
        ul {
            display:flex;
            flex-wrap:nowrap;
            padding-left: 20px;
            padding-bottom: 8px;
            white-space: nowrap;
            li {
                position: relative;
                label {
                    position:relative;
                    display: block;
                    padding:10px 16px 0;
                    max-width: 150px;
                    font-size: 15px;
                    color:var(--sys-secondary);
                }
                input{
                    position: absolute;
                    opacity: 0;
                    width: 100%;
                    height: 100%;
                    &:checked + label {
                        position: relative;
                        &::after{
                            content:'';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background-color: var(--sys-primary);
                        }
                        color:var(--sys-primary);
                        font-weight: bold;
                        line-height: 1.47;
                        padding-bottom: 5px;
                    }
                }
            }
            li:last-of-type {
                padding-right: 75px;
            }
            
        }
    }
`
const Tabmenu = ({menu, border}) => {
    useEffect(
        () =>{
            let numCheckedRadio = 0;
            menu.list.forEach(
                (element, index)=>{
                    if ( element.checked === true ){
                        numCheckedRadio = index
                    }
                }
            )
            document.querySelectorAll(".tabmenu input")[numCheckedRadio].setAttribute("checked", "true")
        }
    )

    return (
        <TabmenuWrap className={`${border?"border":""}`}>
            <nav className="tabmenu" >
                <ul>
                    {
                        menu.list.map(
                            (element, index)=>{
                                return(
                                    <li key={index}>
                                        <input 
                                            type="radio" 
                                            name={menu.name} 
                                            value={element.value} 
                                            id={element.id}
                                            aria-label={element.label}
                                            role="tab"
                                            aria-selected={element.checked}
                                            checked={element.checked===true}
                                        />
                                        <label 
                                            aria-hidden="true"
                                            htmlFor={element.id}>
                                            {element.label}
                                        </label>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </nav>
        </TabmenuWrap>
    )
}

export default Tabmenu;