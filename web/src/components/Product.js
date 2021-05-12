import {Link} from 'react-router-dom';
import './Product.css'

const Product = () => {
    return (
        <div className="product">
            <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt=""/>
            <div className="product__info">
                <p className="info__name">Product 01</p>
                <p className="info__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis voluptatem laudantium, architecto illum suscipit!
                </p>
                <p className="info__price">$100.88</p>
                <p className="info__date">2021-03-12</p>

                <Link to={`/product/${1111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product
