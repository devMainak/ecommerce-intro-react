import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from "../components/Footer"

const ProductDetails = () => {

  const productId = useParams()
  
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
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$49.99",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
  ]

  const productData = products.find(product => product.id == productId.productId)
  
  return (
    <>
      <Header/>
      <main className="container mb-5">
        <h3 className='display-3 fw-normal py-4'>{productData.name}</h3>
        <img className='img-fluid pb-3' src={productData.productImageUrl}/>
        <p className='fs-5 fw-normal'>Price: {productData.price}</p>
        <p className='fs-5 fw-normal'>Description: {productData.description}</p>
        <p className='fs-5 fw-normal'>Available Colors: {productData.availableColors.join(", ")}</p>
        <p className='fs-5 fw-normal'>Return Policy: {productData.isReturnApplicable ? "Return applicable within 7 days" : "No Return Policy"}</p>
      </main>
      <Footer/>
    </>
  )
}

export default ProductDetails;