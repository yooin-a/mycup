import styled from '@emotion/styled'

const NotiList = styled.div`
    dl{
        padding-top: 24px;
        border-bottom:1px solid #cfd4e0;
        dt {
            font-size: 1.0625rem;
            line-height: 1.375rem;
            display: flex;
            font-weight:500;
            padding-bottom:24px;
            align-items: center;
            mark{
                display:none;
                font-weight:bold;
                font-size: 11px;
                line-height: 13px;
                color:var(--sys-sub);
                padding:3px 9px 2px;
                border-radius:12px;
                margin-bottom:10px;
                background-color: color-mix(in srgb, var(--sys-sub) 15%, transparent);
            }
            span {
                display:block;
                font-size: .8125rem;
                line-height: 1.0625rem;
                color:#5a6979;
                font-weight: normal;
                margin-top: 8px;
            }
            button {
                margin-left: 31px;
                margin:0 0 0 auto;
            }
        }
        dd {
            font-size: .8125rem;
            line-height: 1.0625rem;
            color:#5a6979;
            p {
                padding-bottom:24px;
            }
            img {
                display: block;
                width: 100%;
                padding-bottom:24px;
            }
        }
        &.newList dt mark {
            display:inline-block;
        }
    }
`




const NotificationList = (props) => {

    return (
        <NotiList>
            <dl className={props.newList}>
                <dt>
                    {props.checkBox}
                    <div>
                        <mark>NEW</mark>
                        <p>첫번째 알림 제목 (최대 50자)를 적어봅시다. 총 50자 쉽지 않네요.
                        <span>2023-08-31 15:59</span></p>
                    </div>
                    <button><img src='/image/icon/ic_chevron_up.svg' alt="" /></button>
                </dt>
                <dd>{props.viewImg}{props.viewText}</dd>
            </dl>
        </NotiList>
    );
}

export default NotificationList;