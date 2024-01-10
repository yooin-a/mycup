import styled from '@emotion/styled'

const CourseChoiceBtn = styled.div`
    width: 100%;
    flex-grow: 1;
        button {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            text-align: center;
            padding:24px 0 12px;
            background-color: #ffffff;
                img {
                    display: block;
                    margin: 0 auto 8px;
                }
                >p {
                    font-size: 1rem;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                span {
                    display: block;
                    font-size: .8125rem;
                    color: var(--sys-secondary);
                }
            &.speedWasher {
                background-color: #eeeef1;
                box-shadow:inset 5px 5px 10px 1px #fff, 5px 5px 10px 5px rgba(0, 0, 0, 0.02);
                background-image: linear-gradient(to bottom, #14e3bf, rgba(255, 255, 255, 0.2) 110%);
            }
            &.standardWasher {
                background-color: #ffffff;
                box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.02);
            }
            &.disable {opacity:.3}
        }
`

const CourseChoice = ({speedChk, courseTitle, courseText, courseImgSrc}) => {
    return (
        <CourseChoiceBtn>
            <button className={speedChk} sal="true">
                <img src={courseImgSrc} alt="" />
                <p>{courseTitle}</p>
                <span>{courseText}</span>
            </button>
        </CourseChoiceBtn>
    )
}

export default CourseChoice;