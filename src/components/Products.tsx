// Products.tsx
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import React, { useState } from "react";
import { getAssetPath } from "../utils/getAssetPath";

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
    imageUrl: getAssetPath("/photographs/TerragonEssentialOil.png"),
  },
  {
    id: 2,
    name: "Pine Hydrolate",
    size: "200ml",
    price: "$4",
    imageUrl: getAssetPath("/photographs/PineHydrolate.png"),
  },
  {
    id: 3,
    name: "Tea 'Emerald Distance'",
    size: "50gr",
    price: "$5",
    imageUrl: getAssetPath("/photographs/TeaEmeraldDistance.png"),
  },
  {
    id: 4,
    name: "Car Air Freshener 'Thyme&Pine'",
    size: "",
    price: "$8",
    imageUrl: getAssetPath("/photographs/CarAirFreshenerThyme&Pine.png"),
  },
];

const Products: React.FC = () => {
  const [likedStates, setLikedStates] = useState<boolean[]>(
    products.map(() => false)
  );

  const toggleLike = (index: number) => {
    setLikedStates((prevLikedStates) => {
      const newLikedStates = [...prevLikedStates];
      newLikedStates[index] = !newLikedStates[index];
      return newLikedStates;
    });
  };

  return (
    <div id="SHOP" className="products-container">
      <div className="products-header">
        <h1>Our Customer's Favourites</h1>
        <a href="/richka/#/teas" className="learn-about-teas">
          LEARN ABOUT TEAS
        </a>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            <img
              className="product-img"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="product-infos">
              <div className="product-title">{product.name}</div>
              <div className="product-details">{product.size}</div>
              <div className="product-price">
                {likedStates[index] ? (
                  <MdFavorite
                    onClick={() => toggleLike(index)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <MdFavoriteBorder
                    onClick={() => toggleLike(index)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
            {/* <button className="product-button">ADD TO FAV</button> */}
          </div>
        ))}
      </div>
      <a href="/richka/#/teas" className="shop-all-link">
        LEARN ABOUT TEAS
      </a>
    </div>
  );
};

export default Products;
