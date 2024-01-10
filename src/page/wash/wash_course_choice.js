import WashCourseChoice from '../../component/wash/wash_course_choice_content'
import ButtonCommon from '../../component/button/button_common'
import BottomNavigator from '../../component/common/bottom_navigator'


const Wash = ({buttonCommonText, errorMessageText, courseChoiceNotiText}) => {
    return (
        <>
            <WashCourseChoice
                courseChoiceNoti= {
                    <>
                        <span className='courseChoiceNoti'>{courseChoiceNotiText}</span>
                    </>
                }

                errorMessage={
                    <>
                        <mark className="errorMessage" >{errorMessageText}</mark>
                    </>
                }
                button = {
                    <>
                        <ButtonCommon>{buttonCommonText}</ButtonCommon>
                    </>
                }>

            </WashCourseChoice>

            <BottomNavigator location="wash"/>
        </>
    )
}

export default Wash;