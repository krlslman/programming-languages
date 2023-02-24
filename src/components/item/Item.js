import './Item.css'
import { useEffect, useState } from 'react';

const Item = ({card}) => {
    const [showLogo, setShowLogo] = useState(true)
    const {name, img, options} = card;

    // this part flips the card on click
    const handleCardClick = () => {
        setShowLogo(!showLogo);
    }
    // this part works after any update.
    useEffect(() => {
        if (!showLogo) {
            const flipTimeout = setTimeout(() => {
                setShowLogo(true);
            }, 2000);

            return () => clearTimeout(flipTimeout);
        }
    }, [showLogo]);

    return (
        <div className="card" onClick={handleCardClick}>
            {showLogo ? 
                (<div>
                    <img className="card-logo" src={img} alt="logo"/>
                    <h3 className="card-title">{name}</h3>
                </div>)
                : 
                (<ul className='list'>
                    {options.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })}
                </ul>)
            }
        </div>
    )
}
export default Item;