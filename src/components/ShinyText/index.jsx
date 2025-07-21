import './style.css'

const ShinyText = ({ text, className = '' }) => {
    return (
      <div
        className={`shiny-text ${className}`} >
        <p>{text}</p>
      </div>
    );
  };
  
export default ShinyText;