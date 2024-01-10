import styled from '@emotion/styled'
import { useState } from 'react';
import { useEffect } from 'react';
import setAriaLabel from '../../component/accessibility/set_aria_label';

const SwitchBtn = styled.button`
    width: 48px;
    height: 28px;
    background-color: #cfd4e0;
    border-radius:15px;
    position:relative;
    cursor:pointer;
      .slider {
        width: 20px;
        height: 20px;
        background-color:#fff;
        border-radius: 30px;
        position:absolute;
        top:4px;
        left:4px;
        transition:transform 0.3s ease;
      }
      &.on {
        background-color:#111111;
      }
      &.on .slider {
        transform:translateX(20px)
      }
      &.off .slider {
        transform:translateX(0)
      }
`

const ToggleSwitch = ({isActive}) => {
  const [isToggled, setToggled] = useState(isActive);

  const handleToggle = ()=> {
    setToggled(!isToggled);
  }
  useEffect(()=>{
    setAriaLabel();
  },[isActive])

  return (
  <SwitchBtn
    type="button"
    role="switch"
    aria-checked={`${isToggled ? true : false}`}
    className={`toggle-switch ${isToggled ? 'on' : 'off'}`} onClick ={handleToggle}
  >
      <div className='slider'></div>
    </SwitchBtn>
  );
};

export default ToggleSwitch;