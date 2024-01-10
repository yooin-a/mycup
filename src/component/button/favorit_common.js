import styled from '@emotion/styled'
import { useEffect, useState } from 'react';

const FavoritButton = styled.button`
    width: 16px;
    height: 16px;
    img {
        display: block;
    }
`

const FavoritBtn = ({isActive}) => {
    const [imageSrc, setImageSrc] = useState("/image/wash/ic_star_gray.svg");
    const [isClicked, setIsClicked] = useState(isActive);

    const handleClick = () => {
        const color = isClicked ? 'gray' : 'black';
        setImageSrc(`/image/wash/ic_star_${color}.svg`);
        setIsClicked(!isClicked);
    };

    useEffect(()=>{
        const color = isActive ? 'black' : 'gray';
        setImageSrc(`/image/wash/ic_star_${color}.svg`);
      },[isActive])


    return(
        <FavoritButton>
            <img src={imageSrc} onClick={handleClick} alt="즐겨찾기"/>
        </FavoritButton>
    )
}

export default FavoritBtn;