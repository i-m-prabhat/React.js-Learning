import React, { useState } from 'react';
import axios from 'axios';

const ProductUploadForm = () =>
{
    const [productName, setProductName] = useState('');
    const [variants, setVariants] = useState([{ name: '', photos: [] }]);

    const handleProductNameChange = (e) =>
    {
        setProductName(e.target.value);
    };

    const handleVariantNameChange = (index, e) =>
    {
        const newVariants = [...variants];
        newVariants[index].name = e.target.value;
        setVariants(newVariants);
    };

    const handleFileChange = (index, e) =>
    {
        const newVariants = [...variants];
        newVariants[index].photos = Array.from(e.target.files);
        setVariants(newVariants);
    };

    const addVariant = () =>
    {
        setVariants([...variants, { name: '', photos: [] }]);
    };

    const removeVariant = (index) =>
    {
        const newVariants = variants.filter((_, i) => i !== index);
        setVariants(newVariants);
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('variants', JSON.stringify(variants)); // Convert variants to JSON string

        variants.forEach((variant, variantIndex) =>
        {
            variant.photos.forEach((photo, photoIndex) =>
            {
                formData.append(`variants[${variantIndex}][photos]`, photo);
            });
        });

        try
        {
            await axios.post('http://localhost:8080/api/v1/add-product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Product added successfully');
            setProductName('');
            setVariants([{ name: '', photos: [] }]);
        } catch (error)
        {
            console.error('There was an error uploading the product!', error);
            alert('Failed to add product');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={handleProductNameChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            {variants.map((variant, index) => (
                <div key={index} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Variant Name:</label>
                    <input
                        type="text"
                        value={variant.name}
                        onChange={(e) => handleVariantNameChange(index, e)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2">Photos:</label>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileChange(index, e)}
                        accept="image/*"
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => removeVariant(index)}
                        className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Remove Variant
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={addVariant}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Variant
            </button>
            <button
                type="submit"
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default ProductUploadForm;
