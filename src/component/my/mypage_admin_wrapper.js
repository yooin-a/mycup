import styled from '@emotion/styled';
import SelectBox from '../../component/input/select_common'
import SubheaderMain from '../../component/common/subHeader'


const MyPageAdminWrapper = styled.div`
    .button-show-ui-delete {
        display: none;
    }
    select {
        margin-top:12px;
    }
    .MonitoringList {
        margin-top:60px;
        li {
            border-bottom:1px solid #cfd4e0;
            padding:24px 0;
            display: flex;
            align-items: center;
            p span {
                display:block;
                font-size: .8125rem;
                line-height: 1.0625rem;
                margin-top:4px;
                color: #5a6979;
            }
            svg {
                margin-left: auto;
            }
            &:first-of-type{
                padding-top: 0;
            }
            &:last-child {
                border:0
            }
            &.bdbottomline {
                border-bottom:1px solid #cfd4e0;
            }
            >div {
                margin-left: auto;
                text-align: right;
                >button {
                    display: block;
                    margin-top:12px;
                    svg {
                        vertical-align: middle;
                        margin-left:5px;
                        display: inline-block;
                        margin-top:-1px;
                    }
                }
                span {
                    display:block;
                    margin-top:8px;
                    font-size: .8125rem;
                    color:#5a6979;
                }
            }
            &.adminList {
                display:block;
                div.listBox {
                    margin-top:12px;
                    text-align: left;
                    background-color:rgba(255,255,255,0.5);
                    padding:20px;
                    border-radius: 10px;
                    div{
                        margin-bottom:24px;
                        &:last-child {
                            margin-bottom:0
                        }
                        p {
                            padding-bottom: 8px;
                            line-height: 21px;
                        }
                        span {
                            font-size: .9375rem;
                            color:#5a6979;
                            display: flex;
                            margin-top:8px;
                            align-items: center;
                            justify-content: space-between;
                            button img {
                                vertical-align: middle;
                            }
                        }
                    }
                }
                div.adminEmailForm {
                    margin:24px auto;
                }
            }
        }
    }

`

const MyPageAdminWrap = ({subTitle, children, selected}) => {
    return (
        <>
            <MyPageAdminWrapper>

                <SubheaderMain subTitle={subTitle}
                ></SubheaderMain>

                <div className="wrap">
                    <SelectBox>
                        <option value="" disabled selected>기기를 선택하세요</option>
                        <option value="" selected={selected}>스타벅스 ABCDE지점_1번 세척기</option>
                        <option value="">스타벅스 ABCDE지점_2번 세척기</option>
                        <option value="">스타벅스 ABCDE지점_3번 세척기</option>
                        <option value="">스타벅스 ABCDE지점_4번 세척기</option>                        
                    </SelectBox>
                    
                    {children}

                </div>                
            </MyPageAdminWrapper>
        </>
    );
}

export default MyPageAdminWrap;