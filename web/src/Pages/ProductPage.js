import './ProductPage.css'

const ProductPage = () => {
    return (
        <div className="productpage">
            <div className="productpage__left">
                <div className="left__image">
                    <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt="product name" />
                </div>
                <div className="left__info">
                    <p className="left__name">Product 01</p>
                    <p>Price: $100.88</p>
                    <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat magnam iusto modi quaerat officia quos?</p>
                </div>
            </div>
            <div className="productpage__right">
                <div className="right__info">
                    <p>
                        Price: <span>$100.88</span>
                    </p>
                    <p>
                        Status: <span>In stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
