import './Card.css'
import { languages } from '../../helpers/data';
import Item from '../item/Item';

const Card = () => {
    return (
        <div className='cards-area-container'>
            <div className="bars"></div>
            <h1 className="language-title">Languages</h1>
            <div className='cards-container'>
                {
                    languages.map((i, index) => {
                        return <Item card={i} />
                    })
                }
            </div>            
        </div>
    )
}

export default Card;