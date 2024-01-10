import React from 'react';
import styled from '@emotion/styled'

const ContentSubstanceWrapper = styled.article`
    background-color: var(--sys-on-primary);
`

const ContentSubstance = ()=>{
    return(
        <ContentSubstanceWrapper>
            {/* 임시 및 예시용 이미지 */}
            <img src="/image/temporary/content_detail_example.jpg" alt="" style={{
                display:"block",
                width: "100%"
            }
                
            }/>
        </ContentSubstanceWrapper>
    )
}

export default ContentSubstance;