import Portfolio from "./Portfolio";
import './style.css'
import {useState} from 'react'

function ContentCards()
{
    const [isClicked, setIsClicked] = useState(false);
    const handleChange = (e) =>
    {
        if(!isClicked)
            setIsClicked(true);
        else
            setIsClicked(false);
        console.log(isClicked);
    }
    return (
        <>
        <Portfolio onClick={handleChange} clicked={isClicked}/>
        </>
    );
}

export default ContentCards