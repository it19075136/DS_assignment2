import Product from '../components/Product'
import './HomePage.css'


const HomePage = () => {
    return (
        <div className="homepage">
            <h2 className="homepage__title">Latest Product</h2>
            <div className="homepage__products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>        
        </div>
    )
}

export default HomePage
