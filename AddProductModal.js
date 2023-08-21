import React, { useState } from 'react';
import Modal from 'react-modal';
import { useMutation, gql } from '@apollo/client';

const ADD_PRODUCT = gql`
  mutation AddProduct($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        id
        title
      }
    }
  }
`;

function AddProductModal({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    title: '',
    body_html: '',
    vendor: '',
    product_type: '',
  });

  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addProduct({
        variables: {
          input: { ...formData },
        },
      });
      console.log('Product added:', data.productCreate.product);
      closeModal();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        {/* Add other input fields for body_html, vendor, product_type, etc. */}
        <button type="submit">Add Product</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </Modal>
  );
}

export default AddProductModal;
