
import Card from 'react-bootstrap/Card'
import cardImg from '../../assets/g6.jpg'
import {Link} from 'react-router-dom'
const Cards = () => {
    return (
        <>

        <Card style={{ border:'none' }}>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body className="card-body">
        <Card.Title>
            <h3 className='card-title'>
            <Link to="/"  style={{textDecoration:'none', color:'black'}}>
            The Sound of Silence
            </Link>
            </h3>
            
        </Card.Title>
        
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
        </Card.Text>
        </Card.Body>
        </Card>
        </>
    )
}

export default Cards