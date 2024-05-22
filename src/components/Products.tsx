// Products.tsx

import React from "react";

interface Product {
  id: number;
  name: string;
  size: string;
  price: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Terragon Essential Oil",
    size: "5ml",
    price: "$12",
    imageUrl: "./../../public/photographs/TerragonEssentialOil.png",
  },
  {
    id: 2,
    name: "Pine Hydrolate",
    size: "200ml",
    price: "$4",
    imageUrl: "./../../public/photographs/PineHydrolate.png",
  },
  {
    id: 3,
    name: "Tea 'Emerald Distance'",
    size: "50gr",
    price: "$5",
    imageUrl: "./../../public/photographs/TeaEmeraldDistance.png",
  },
  {
    id: 4,
    name: "Car Air Freshener 'Thyme&Pine'",
    size: "",
    price: "$8",
    imageUrl: "./../../public/photographs/CarAirFreshenerThyme&Pine.png",
  },
];

const Products: React.FC = () => {
  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Customer's Favourites</h1>
        <a>SHOP ALL BESTSELLERS</a>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              className="product-img"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="product-infos">
              <div className="product-title">{product.name}</div>
              <div className="product-details">{product.size}</div>
              <div className="product-price">{product.price}</div>
            </div>
            <button className="product-button">ADD TO BAG</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
