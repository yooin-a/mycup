const setAriaLabel = ()=>{
    const getTextContent = (element) => {
        // element가 텍스트 노드인 경우 해당 텍스트 반환
        if (element.nodeType === Node.TEXT_NODE) {
            return element.textContent;
        } else {
            if (element.getAttribute("aria-label")){
                return element.getAttribute("aria-label")
            } else if (element.getAttribute("alt")) {
                return element.getAttribute("alt")
            }
        }
        
        // element의 자식들을 재귀적으로 처리
        return Array.from(element.childNodes)
          .map(getTextContent)
          .join(" ");
    };
    document.querySelectorAll(`[sal="true"]`).forEach(
        (element)=>{
            if(element.childNodes){
                element.childNodes.forEach((elementChildNodes)=>{
                    if(elementChildNodes.setAttribute){
                        elementChildNodes.setAttribute("aria-hidden", "true");
                    }
                })
            }
            element.setAttribute("aria-label", getTextContent(element))
        }
    )
}


export default setAriaLabel;