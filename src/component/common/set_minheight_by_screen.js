const setMinHeightByScreen = (ref)=>{

    const setSize = ()=>{
        ref.current.style.minHeight = window.innerHeight + "px"
    }
    
    setSize();

    window.addEventListener("resize", setSize)

    return ()=>{
        window.removeEventListener("resize", setSize)
    }
    
}


export default setMinHeightByScreen;