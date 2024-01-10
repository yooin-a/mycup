import styled from '@emotion/styled'
// import { Link } from 'react-router-dom'

const SubTabMenu = styled.nav`
    .subTabMenu {
        display:flex;
        text-align:center;
        border-bottom: 1px solid #cad0dd;
        font-size: 15px;
        color:#586676;
        width: 100%;
        padding:0 20px;
        margin-top:29px;
        button {
            width: 100%;
            padding-bottom:5px;
                mark {
                    color:#fff;
                    background:#1d76e8;  
                    width: 20px;  
                    font-size:10px;
                    border-radius: 8px;  
                    padding: 2px 5px 2px 5px;
                    margin-left: 4px;
                }
            &.active {
                color:var(--sys-primary);
                border-bottom: 3px solid var(--sys-primary);
            }
            &.active:after {
                content: "";
                display:inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color:var(--sys-sub);
                position:relative;
                top:-8px;
                margin-left:4px;
            }
        }
    }
`

const SubTabmenu = ({listMenu, overflow}) => {      

    return (
        <SubTabMenu className={`${overflow?"overflow":""}`}>

            <div className="subTabMenu">
                {
                    listMenu.map(
                        (object, index)=>{
                            return(
                                <button key={index}
                                    to={object.url} 
                                    className={object.menuActive}
                                    aria-label={`${object.menuActive?"선택됨,":""} ${object.menuName}`}
                                >
                                    {object.menuName}
                                </button>
                            )
                        }
                    )
                }
            </div>

            {/* <ul className="subTabMenu">
                {
                    listMenu.map(
                        (object, index)=>{
                            return(
                                <li key={index}  >
                                    <Link 
                                        to={object.url} 
                                        className={object.menuActive}
                                        aria-label={`${object.menuActive?"선택됨,":""} ${object.menuName}`}
                                        >
                                            {object.menuName}
                                    </Link>
                                </li>
                            )
                        }
                    )
                }
            </ul> */}

        </SubTabMenu>
    );
}
export default SubTabmenu;