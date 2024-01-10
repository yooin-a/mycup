import styled from '@emotion/styled'
import { ReactComponent as ArrowWhite } from "../../assets/icons/chevronRight.svg";
import setAriaLabel from '../../component/accessibility/set_aria_label';
import { useEffect } from 'react';

const MyMenuListWrapper = styled.div`
        padding: 28px 20px;
        nav {
            background-color:var(--sys-on-primary);
            border-radius: 10px;
            margin-bottom: 20px;
            a {
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding:17px 20px 15px;
                div>p{
                    color:var(--sys-secondary);
                }
            }
        }
        .blueDot {
            width: 8px;
            height:8px;
            border-radius: 10px;
            background: #1d76e8;
            display: inline-block;
            vertical-align: top;
            margin-left: 4px;
        }
        .verNum {
            color: #5a6979;
            font-size: .9375rem;
        }

`

const MyMenuList = ({menus}) => {
    useEffect(() => {
        setAriaLabel();    
    }, []);
    return (
        <MyMenuListWrapper>
                    {
                        menus.map((menu, index1) => (  
                            <nav key={index1}>
                                {
                                    menu.map((submenu, index2) => (
                                        <a key={index2} href={submenu.linkUrl} sal="true" tabIndex={0}>
                                            <div>
                                                {submenu.menuName}{submenu.mark}
                                                {submenu.errorMessage}
                                            </div>
                                                {
                                                    submenu.linkUrl && <span><ArrowWhite width="7.5" height="13.5"/></span>
                                                }
                                            {submenu.verNum}
                                        </a>
                                    ))
                                }
                            </nav>
                        ))
                    }
                
        </MyMenuListWrapper>
    );
}

export default MyMenuList;