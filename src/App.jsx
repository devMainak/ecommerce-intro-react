import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Header from './components/Header'

// generating and displaying product cards
const ProductListings = ({products}) => {

  const productCards = products.map(product => {
    return (
      <div className='col-sm-4 mt-3'>
        <div className='card'>
          <img className='card-img-top img-fluid' src={product.productImageUrl}/>
          <div className='card-body'>
            <h5 className='card-title'>{product.name}</h5>
            <p className='card-text'>{product.description}</p>
            <Link className='btn btn-primary'>View Product</Link>
          </div>
        </div>
      </div>
    )
  })
  
  return (
    <div className='row'>
      {productCards}
    </div>
  )
}

export default function App() {

  // products data
  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://via.placeholder.com/300x200",
    }
  ];
  
  return (
    <>
      <Header/>
      <main className='container'>
        <h3 className='display-3 fw-normal pt-4'>Featured Products</h3>
      <ProductListings products={products}/>
      </main>
    </>
  )
}
