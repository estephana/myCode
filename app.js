import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { setAppElement } from 'react-modal';
import $ from 'jquery';
import styles from './styles.css';

Modal.setAppElement('body'); // Set an app element to body
Modal.defaultStyles.overlay.ariaHideApp = false;


function ProductTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    color: '',
    size: '',
    price: '',
    quantity: '',
  });
  const [selectedProductType, setSelectedProductType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedProducts, setSelectedProducts] = useState([]);

   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
     const [paymentFormData, setPaymentFormData] = useState({
       email: '',
       cardNumber: '',
       cardName: '',
       address: '',
       phoneNumber: '',
     });


     const handlePaymentModalOpen = () => {
       setIsPaymentModalOpen(true);
     };

     const handlePaymentModalClose = () => {
       setIsPaymentModalOpen(false);
     };

     const handlePaymentInputChange = fieldName => event => {
       setPaymentFormData({
         ...paymentFormData,
         [fieldName]: event.target.value,
       });
     };

     const handlePaymentSubmit = event => {
       event.preventDefault();
       // Implement payment processing logic here
       // You can use the paymentFormData to process the payment
       console.log('Payment form data:', paymentFormData);
       // Close the payment modal after processing
       handlePaymentModalClose();
     };

     const handleCheckboxChange = productId => {
      if (selectedProducts.includes(productId)) {
        setSelectedProducts(selectedProducts.filter(id => id !== productId));
      } else {
        setSelectedProducts([...selectedProducts, productId]);
      }
    };
     const handleBuyButtonClick = () => {
       if (selectedProducts.length === 0) {
         alert('Please select the product(s) you want to buy.');
       } else {
         handlePaymentModalOpen();
       }
     };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/api/shopify');
        const data = await response.json();
        setProducts(data.data.products.edges.map(({ node }) => node));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  useEffect(() => {
  function toggleDropdown() {
    setIsNavigationOpen((prevIsNavigationOpen) => !prevIsNavigationOpen);
  }

  const navButton = document.querySelector('.nav-button');
  if (navButton) {
    navButton.addEventListener('click', toggleDropdown);
  }

  return () => {
    if (navButton) {
      navButton.removeEventListener('click', toggleDropdown);
    }
  };
}, []);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = fieldName => event => {
    if (fieldName === 'image') {
      setFormData({
        ...formData,
        image: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [fieldName]: event.target.value,
      });
    }
  };



  const handleProductTypeChange = (productType) => {
   if (productType === 'all') {
      setSelectedProductType('all');
     setIsNavigationOpen((prevIsNavigationOpen) => !prevIsNavigationOpen); // Toggle the navigation dropdown
   } else {
     setSelectedProductType(productType);
      setIsNavigationOpen((prevIsNavigationOpen) => !prevIsNavigationOpen);
   }
 };


  const handleSort = sortOrder => {
    setSortOrder(sortOrder);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          variants: [
            {
              price: formData.price,
              inventoryQuantity: formData.quantity,
              options: [
                {
                  name: 'Color',
                  value: formData.color,
                },
                {
                  name: 'Size',
                  value: formData.size,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to add product. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Product created:', data);

      setFormData({
        title: '',
        description: '',
        color: '',
        size: '',
        price: '',
        quantity: '',
        image: null,
      });
      closeModal();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

    const sortedProducts = products.slice().sort((a, b) => {
       const priceA = a.variants.edges[0].node.price;
       const priceB = b.variants.edges[0].node.price;

       return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
     });

     const filteredProducts = selectedProductType === 'all'
       ? sortedProducts
       : sortedProducts.filter(product => product.productType === selectedProductType);


  return (
    <div>
      <div>
      <button className="shadow__btn" onClick={openModal}>
      Add Product
       </button>

      <button className="shadow__btn" onClick={handleBuyButtonClick}>
        Buy Products
      </button>
       <div className="controls">
         <label className="bluee-bg">Filter:</label>
         <nav>
                <ul className={`drop-down ${isNavigationOpen ? '' : 'closed'}`}>
                  <li>
                    <button onClick={() => handleProductTypeChange('all')}>All</button>
                  </li>
                  <li><button onClick={() => handleProductTypeChange('t-shirt')}>T-Shirt</button></li>
                  <li><button onClick={() => handleProductTypeChange('Pants')}>Pants</button></li>
                  <li><button onClick={() => handleProductTypeChange('shoes')}>Shoes</button></li>
                </ul>
              </nav>
<label className="bluee-bg">Sort Price:</label>
         <button className="sort Price" onClick={() => handleSort('asc')}>
           Asc
         </button>
         <button className="sort Price" onClick={() => handleSort('desc')}>
           Desc
         </button>
      </div>  </div>


      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Product Type</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
           {filteredProducts.map(({ id, title, description, productType, variants, images }) => {
            const variant = variants.edges[0].node;
            const colorOption = variant.selectedOptions.find(option => option.name === 'Color');
            const sizeOption = variant.selectedOptions.find(option => option.name === 'Size');

            const imageSrc = images.edges.length > 0 ? images.edges[0].node.originalSrc : '';

            return (
              <tr key={id}>
                <td><img src={imageSrc} alt={`Image of ${title}`} width="50" /></td>
                <td>{title}</td>
                <td>{description}</td>
                <td className="blue-bg">{productType}</td>
                <td>{colorOption ? colorOption.value : 'N/A'}</td>
                <td>{sizeOption ? sizeOption.value : 'N/A'}</td>
                <td>{variant.price}</td>
                <td>{variant.inventoryQuantity}</td>
                <td>
          <div className="customCheckBoxHolder">
            <input
              type="checkbox"
              checked={selectedProducts.includes(id)}
              onChange={() => handleCheckboxChange(id)}
              id={`cCB_${id}`} // Use a unique id for each checkbox
              className="customCheckBoxInput"
            />
            <label htmlFor={`cCB_${id}`} className="customCheckBoxWrapper">
              <div className="customCheckBox">
                <div className="inner">Buy</div>
              </div>
            </label>
          </div>
        </td>
              </tr>
            );
          })}
        </tbody>
      </table>

     <Modal isOpen={isPaymentModalOpen} onRequestClose={handlePaymentModalClose}>
             <h2>Payment Information</h2>
            <form onSubmit={handlePaymentSubmit}>
               <label>Email: <input type="email" value={paymentFormData.email} onChange={handlePaymentInputChange('email')} /></label><br/><br/>
               <label>Card Number: <input type="text" value={paymentFormData.cardNumber} onChange={handlePaymentInputChange('cardNumber')} /></label><br/><br/>
               <label>Card Name: <input type="text" value={paymentFormData.cardName} onChange={handlePaymentInputChange('cardName')} /></label><br/><br/>
               <label>Address: <input type="text" value={paymentFormData.address} onChange={handlePaymentInputChange('address')} /></label><br/><br/>
               <label>Phone Number: <input type="tel" value={paymentFormData.phoneNumber} onChange={handlePaymentInputChange('phoneNumber')} /></label><br/><br/>
               <button type="submit">Pay</button>
             </form>
             <button onClick={handlePaymentModalClose}>Close</button>
           </Modal>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} >
             <h2>Add Product</h2>
             <form>
             <label htmlFor="title">Title: <input type="text" id="title" value={formData.title} onChange={handleInputChange('title')} /></label>
            <label htmlFor="description">Description: <input type="text" id="description" value={formData.description} onChange={handleInputChange('description')} /></label>
            <label htmlFor="color">Color: <input type="text" id="color" value={formData.color} onChange={handleInputChange('color')} /></label>
             <label htmlFor="size">Size: <input type="text" id="size" value={formData.size} onChange={handleInputChange('size')} step="1"/></label>
          <label htmlFor="price">Price: <input type="number" id="price" value={formData.price} onChange={handleInputChange('price')} step="0.01" /></label>
         <label htmlFor="quantity">Quantity: <input type="number" id="quantity" value={formData.quantity} onChange={handleInputChange('quantity')} step="1" /></label>
          <label htmlFor="image">Image: <input type="file" id="image" onChange={handleInputChange('image')} accept="image/*" /></label>

               <button onClick={handleSubmit}>Add</button>
             </form>
             <button onClick={closeModal}>Close</button>
           </Modal>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Shopify Products</h1>
      <ProductTable />
    </div>
  );
}
