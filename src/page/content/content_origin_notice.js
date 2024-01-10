import React from 'react';
import styled from '@emotion/styled'
import HeaderButtonBack from '../../component/common/header_button_back'

const ContentDetailWrapper = styled.main`
    
    .origin-substance {
        padding: 12px 20px;
        color: var(--sys-secondary);
        font-weight: 500;
        font-size: 15px;
        line-height: 1.53;
    }
`

const ContentOriginNotice = ()=>{

    return(
        <ContentDetailWrapper>
            <HeaderButtonBack link="back" headline="출처 및 고지사항"/>
            <section>
                <article className="origin-substance">
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공<br/>
                    출처와 고지에 대한 안내 문구제공
                </article>
            </section>
        </ContentDetailWrapper>
    )
}
export default ContentOriginNotice;