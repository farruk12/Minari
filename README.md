# Minari Homes

Welcome to **Minari Homes**, an e-commerce website specializing in high-quality furniture to enhance any home space. From dining tables to beds and other essential furnishings, Minari Homes offers a curated selection of items to meet diverse home decor needs. This website is built using the **MERN** stack (MongoDB, Express, React, and Node.js), providing a seamless and dynamic shopping experience for customers.

## Table of Contents
- [About Minari Homes](#about-minari-homes)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## About Minari Homes

Minari Homes is an e-commerce platform offering a wide range of furniture options for any home. Our catalog includes dining tables, beds, sofas, and other furnishings. The website is designed to make furniture shopping simple and enjoyable, allowing customers to browse, view detailed product information, and make purchases all in one place.

## Features

- **User Authentication**: Customers can create an account, log in, and securely manage their personal information.
- **Product Catalog**: Furniture items are organized by category for easy browsing, including dining tables, beds, and more.
- **Product Sidebar**: Each product has a dedicated sidebar with essential details, including size guides and descriptions, providing a closer look for customers before purchase.
- **Shopping Cart**: Customers can add items to their cart and review their selections before proceeding to checkout.
- **Purchase System**: Customers can place orders for selected items, receiving confirmation upon successful purchase.
- **Responsive Design**: Minari Homes is optimized for various devices, providing a consistent user experience on mobile, tablet, and desktop.

## Tech Stack

Minari Homes is built with the **MERN** stack, a combination of technologies that provide a full-stack JavaScript-based development framework:

- **MongoDB**: A NoSQL database for efficient storage and retrieval of user and product data.
- **Express**: A server-side framework that allows for robust routing and middleware functions.
- **React**: A front-end library for building a responsive and interactive user interface.
- **Node.js**: The JavaScript runtime for executing server-side code and handling backend processes.

### Additional Libraries and Tools

- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT Authentication**: For secure user login and access control.
- **CSS**: For styling and responsive design.
- **Git & GitHub**: For version control and collaboration.
- **Axios**: For handling API requests between the front end and back end.

## Installation

To set up Minari Homes on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/farruk12/Minari.git
   cd Minari
   ```

2. **Set up environment variables**: In the root folder, create a `.env` file with the following variables:
   ```plaintext
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   PORT=5000
   ```

3. **Install dependencies for both frontend and backend**:
   ```bash
   npm install          # Installs dependencies for the backend
   cd client
   npm install          # Installs dependencies for the frontend
   ```

4. **Run the application**:
   ```bash
   # In the root directory (for backend)
   npm start

   # In the client directory (for frontend)
   cd client
   npm start
   ```

5. **Access the website**: Open your browser and go to `http://localhost:3000` to view the application.

## Usage

1. **Explore Products**: Browse furniture categories to view the variety of items available.
2. **View Product Details**: Click on a product to open a sidebar that displays more details, including a size guide and description.
3. **Add Items to Cart**: Select items to add to your cart.
4. **Sign Up or Log In**: Create an account or log in to save your cart and make purchases.
5. **Checkout**: Review your cart and proceed to checkout to complete your purchase.

## Future Enhancements

- **Search and Filter**: Implement a search and filter feature to allow users to find products quickly.
- **Wishlist**: Enable users to save items they are interested in for future purchases.
- **Payment Integration**: Integrate secure payment methods for completing transactions directly on the site.
- **Order Tracking**: Provide customers with the ability to track their orders post-purchase.
- **Admin Dashboard**: Develop an admin panel for managing products, user accounts, and orders.

## Contributing

Contributions are welcome! To contribute to Minari Homes:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for visiting Minari Homes! Happy shopping!