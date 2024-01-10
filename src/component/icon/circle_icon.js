import styled from '@emotion/styled'

const CircleIconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--sys-secondary-on-white);
    img {
        display: block;
    }
`

const CircleIcon = (props) => {
    return (
      <CircleIconDiv className="circle-icon">
        <img src={props.imgSrc} alt={props.imgAlt} style={{
            width: props.imgWidth,
            height: props.imgHeight
        }
            
        }/>
      </CircleIconDiv>
    );
}

export default CircleIcon;