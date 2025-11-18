import type { CardProps } from '../models/card-props'
import './Card.css'

function Card({ title = "Title", onClick }: CardProps) {
    return (
        <div className='card-container' onClick={onClick}>
            <h2 className='card-title'>{title}</h2>
            <hr className='bar'></hr>
        </div>
    )
}

export default Card