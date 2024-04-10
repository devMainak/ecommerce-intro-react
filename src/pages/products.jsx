import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


// generating and displaying product cards
const ProductList = ({products}) => {
  return (
    <div>
      {products.map(product => {
        return (
          <div className='card d-flex flex-row mb-3'>
            <img className='img-fluid' src={product.productImageUrl} alt={product.name}/>
            <div className='card-body'>
              <div className='float-end'>
              <h5 className='card-title'>{product.name}</h5>
              <p className='card-text'>{product.description}</p>
              <p className='text-secondary'>Price: {product.price}</p>
              <span><Link className='btn btn-primary' to="/">View Product</Link></span>
                </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Products = () => {

  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x300",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x300",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://via.placeholder.com/300x300",
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$49.99",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x300",
    },
  ];
  
  return (
    <>
      <Header/>
      <main className='container'>
        <h3 className='display-3 fw-normal pt-4'>Products</h3>
        <div className='mb-5'>
        <ProductList products={products}/>
        </div>
      </main>
      <Footer/>
    </>    
    )
}

export default Products;