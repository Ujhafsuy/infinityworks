import './style.css'

const ShinyText = ({ text, className = '' }) => {
  
    return (
      <div
        className={`shiny-text ${className}`} >
        {text}
      </div>
    );
  };
  
export default ShinyText;