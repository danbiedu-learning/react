import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  const renderColorButton = (language) => {
    return (
      <ColorContext.Consumer>
        {color => {
          console.log(color)
          return (
          <div className={`ui button ${color}`}>
            {language === 'english' ? 'Submit' : '제출'}
          </div>
          )
        }}
      </ColorContext.Consumer>
    )
  }
  return (
    <LanguageContext.Consumer>
      {language => renderColorButton(language)}
    </LanguageContext.Consumer>
  )
}

export default Button;