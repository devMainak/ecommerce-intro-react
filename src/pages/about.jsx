import Header from '../components/Header'
import Footer from '../components/Footer'

// About element
const About = () => (
  <>
    <Header/>
    <main className='container'>
      <h3 className="display-3 fw-normal pt-4">About Our Ecommerce Platform</h3>
      <article className='pb-5'>
        <p className='fs-5 fw-normal'>Welcome to our ecommerce platform! We are dedicated to providing customers with a seamless and enjoyable shopping experience from start to finish.</p>
        <p className='fs-5 fw-normal'>Our mission is to offer a wide selection of high-quality products at competitive prices, coupled with exceptional customer service and fast shopping.</p>
        <p className='fs-5 fw-normal'>At our ecommerce platform, we believe in the power of online shopping to connect people with the products they love, and we strive to make every interaction with our platform convenient, reliable, and secure.</p>
        <p className='fs-5 fw-normal'>Thank you for choosing our ecommerce platform. We look forward to serving you and exceeding your expectations at every turn.</p>
      </article>
    </main>
    <Footer/>
  </>
)

export default About;