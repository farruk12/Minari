import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductLayout from './ProductLayout';
import './Collection.css';

function Collection({ titles, isFullView = false }) {
    const { collectionName } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [collectionName]);

    const collections = [
        {
            title: "LIVING ROOM",
            products: [
                {
                    id: 1,
                    name: "modular sofa",
                    price: "KSh 10,600",
                    image: "sofa (2).jpg",
                    reviews: 4,
                    rating: 5
                },
                {
                    id: 2,
                    name: "Fabric sofa",
                    price: "KSh 11,200",
                    image: "sofa (1).jpg",
                    reviews: 3,
                    rating: 4
                },
                {
                    id: 3,
                    name: "Cloud sofa",
                    price: "KSh 34,700",
                    image: "sofa (3).jpg",
                    reviews: 3,
                    rating: 6
                },
                {
                    id: 4,
                    name: "green sofa",
                    price: "KSh 24,800",
                    image: "sofa (4).jpg",
                    reviews: 5,
                    rating: 4
                },
                {
                    id: 5,
                    name: "Grey clody sofa",
                    price: "KSh 1,800",
                    image: "sofa (5).jpg",
                    reviews: 3,
                    rating: 5
                },
                {
                    id: 6,
                    name: "white modular sofa",
                    price: "KSh 28,800",
                    image: "sofa 6.jpg",
                    reviews: 4,
                    rating: 5
                },
                {
                    id: 7,
                    name: "black mod sofa",
                    price: "KSh 28,800",
                    image: "sofa 1 (2).jpg",
                    reviews: 4,
                    rating: 5
                },
                {
                    id: 8,
                    name: "purple sofa",
                    price: "KSh 28,800",
                    image: "sofa 1 (1).jpg",
                    reviews: 4,
                    rating: 5
                },
                {
                    id: 9,
                    name: "maroon sofa",
                    price: "KSh 28,800",
                    image: "sofa 1 (3).jpg",
                    reviews: 4,
                    rating: 5
                },
                {
                    id: 10,
                    name: "CornFlower sofa",
                    price: "KSh 28,800",
                    image: "sofa 1 (4).jpg",
                    reviews: 4,
                    rating: 5
                }
            ]
        },
        {
            title: "BEDROOM",
            products: [
                {
                    id: 11,
                    name: "Wooden bed",
                    price: "KSh 87,500",
                    image: "Beds (1).jpg",
                    reviews: 1,
                    rating: 5
                },
                {
                    id: 12,
                    name: "Jungle Green Bed",
                    price: "KSh 61,300",
                    image: "Beds (2).jpg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 13,
                    name: "Beige bed",
                    price: "KSh 72,800",
                    image: "Beds (3).jpg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 14,
                    name: "Inbuilt drawer Bed",
                    price: "KSh 1,900",
                    image: "Beds (5).jpg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 15,
                    name: "offWhite Bed",
                    price: "KSh 2,600",
                    image: "Beds (4).jpg",
                    reviews: 2,
                    rating: 1
                },
                {
                    id: 16,
                    name: "Brown wood bed",
                    price: "KSh 3,600",
                    image: "Beds (7).jpg",
                    reviews: 3,
                    rating: 4
                },
                {
                    id: 15,
                    name: "white Bed",
                    price: "KSh 2,600",
                    image: "Beds (6).jpg",
                    reviews: 2,
                    rating: 1
                },
                {
                    id: 15,
                    name: "Gray Bed",
                    price: "KSh 2,600",
                    image: "Beds (8).jpg",
                    reviews: 2,
                    rating: 1
                },
            ]
        },
        {
            title: "HOME DECOR",
            products: [
                {
                    id: 16,
                    name: "Lamp",
                    price: "KSh 1,200",
                    image: "Decor (1).jpg",
                    reviews: 2,
                    rating: 4
                },
                {
                    id: 17,
                    name: "Mirror",
                    price: "KSh 1,300",
                    image: "Decor (2).jpg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 18,
                    name: "Globe light",
                    price: "KSh 1,500",
                    image: "Decor (3).jpg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 19,
                    name: "Vases",
                    price: "KSh 1,400",
                    image: "Decor (4).jpg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 20,
                    name: "A cute stand",
                    price: "KSh 1,600",
                    image: "Decor (5).jpg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 19,
                    name: "Black Vases",
                    price: "KSh 1,400",
                    image: "Decor (6).jpg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 19,
                    name: "Beige Vases",
                    price: "KSh 1,400",
                    image: "Decor (7).jpg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 19,
                    name: "Brown Vases",
                    price: "KSh 1,400",
                    image: "Decor (8).jpg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 19,
                    name: "White stats",
                    price: "KSh 1,400",
                    image: "Decor.jpg",
                    reviews: 4,
                    rating: 4
                }
            ]
        },
        {
            title: "OFFICE",
            products: [
                {
                    id: 20,
                    name: "Office chair",
                    price: "KSh 2,500",
                    image: "Office (1).jpg",
                    reviews: 5,
                    rating: 5,
                    description: "Elegant baby blue and white  perfect for special occasions. Features a flowing design with intricate detailing."
                },
                {
                    id: 21,
                    name: "Office accessories",
                    price: "KSh 1,900",
                    image: "Office (2).jpg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 22,
                    name: "Organizer",
                    price: "KSh 2,900",
                    image: "Office (3).jpg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 23,
                    name: "can",
                    price: "KSh 1,000",
                    image: "Office (5).jpg",
                    reviews: 3,
                    rating: 3
                },
                {
                    id: 24,
                    name: "office stand",
                    price: "KSh 2,900",
                    image: "Office (6).jpg",
                    reviews: 2,
                    rating: 2
                },
                {
                    id: 25,
                    name: "White Office chair",
                    price: "KSh 2,100",
                    image: "Office (7).jpg",
                    reviews: 2,
                    rating: 2
                },
                {
                    id: 26,
                    name: "Purple ",
                    price: "KSh 2,300",
                    image: "Office (9).jpg",
                    reviews: 2,
                    rating: 2
                }

            ]
        },
        {
            title: "OUTDOOR",
            products: [
                {
                    id: 27,
                    name: "swing outdoor",
                    price: "KSh 3,200",
                    image: "Outdoor (1).jpg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 28,
                    name: "Swing outdoor",
                    price: "KSh 3,500",
                    image: "Outdoor (2).jpg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 29,
                    name: "Wooden swing outdoor",
                    price: "KSh 3,000",
                    image: "Outdoor (3).jpg",
                    reviews: 3,
                    rating: 3
                }
            ]
        }
    ];

    const currentCollections = isFullView
    ? collections.filter(c => c.title.toLowerCase().replace(/\s+/g, '-') === collectionName)
    : (titles ? collections.filter(c => titles.includes(c.title)) : collections);

    const addToCart = (product) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItemIndex = existingCartItems.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            existingCartItems[existingItemIndex].quantity += 1;
        } else {
            existingCartItems.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

        window.dispatchEvent(new Event('cartUpdated'));
        window.dispatchEvent(new Event('itemAddedToCart'));
    };

    return (
        <div className="collections-container">
            {currentCollections.map((collection, index) => (
                <div key={collection.title} id={collection.title.toLowerCase().replace(/\s+/g, '-')} className="collection-section">
                    <h2 className="collection-title">{collection.title}</h2>
                    <ProductLayout
                        products={isFullView ? collection.products : collection.products.slice(0, 10)}
                        expanded={isFullView}
                        addToCart={addToCart}
                    />
                    {/* Add a thin line after each collection */}
                    {index < currentCollections.length - 1 && <hr className="collection-divider" />}
                </div>
            ))}
        </div>
    );
}

export default Collection;

