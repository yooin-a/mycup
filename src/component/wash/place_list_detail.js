import styled from '@emotion/styled';
import FavoritBtn from '../../component/button/favorit_common'


const PlaceListWrapper = styled.div`
    width: 100%;
    .place_list_detail {
        width: 100%;
        display: flex;
        >img {
            width: 100px;
            object-fit: contain;
        }
        p {
            font-size: 1.0625rem;
            line-height: 1.4375rem;
            padding:0 11px 0 20px;
            font-weight:bold;
            min-height: 116px;
            span {
                display: block;
                margin:6px 0;
                color: var(--sys-secondary);
                font-size: .8125rem;
                line-height: 1.0625rem;
                font-weight: normal;
            }
            b {
                font-size: .8125rem;
            }
        }
        button {
            margin-left: auto;
        }
    }
`

const PlaceListDetail = ({title, address, distance}) => {
    return (
        <PlaceListWrapper>
            <div className='place_list_detail'>
                <img src="/image/wash/wash_list_thumb.png" alt="" />
                <p>{title}
                    <span>{address}</span>
                    <b>{distance}</b>
                </p>
                <FavoritBtn />
            </div>
        </PlaceListWrapper>
    )
}

export default PlaceListDetail;