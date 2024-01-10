import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const EventTabMenuWrapper = styled.ul`
    display:flex;
    align-items: center;
    justify-content: space-around;
    text-align:center;
    width:calc(100% - 40px);
    font-size: 15px;
    border-radius:20px;
    margin-top:-17px;
    margin-bottom:29px;
    margin-left:20px;
    border:2px solid #cfd4e0;
    margin-top:12px;
    li {
        display:block;
        width: 100%;
        line-height: 28px;
        position:relative;
        a {
            display: block;
            width: 100%;
            height: 100%;
            &.active {
                span {
                    position:absolute;
                    top:-16px;
                    display:block;
                    width:100%;
                    height:32px;
                    left:-2px;
                    border-radius:20px;
                    background:#111;
                    color:#fff;
                    border-color:#111;
                    line-height:32px;
                }
            }
            &.active span{
                left:0;
                right:-2px;
            }
        }
    }
`


const EventTabMenu = ({listMenu})=>{
    return(
        <EventTabMenuWrapper>
            {
                listMenu.map(
                    (element, index)=>{
                        return (
                            <li  
                                key={index}
                                >
                                    <Link 
                                        to={element.url}
                                        className={element.menuActive}
                                        aria-label={`${element.menuActive?"선택됨,":""} ${element.menuName}`}
                                    >
                                        <span>
                                            {element.menuName}
                                        </span>
                                    </Link>
                            </li>
                        )
                    }
                )
            }
        </EventTabMenuWrapper>
    )
}

export default EventTabMenu;