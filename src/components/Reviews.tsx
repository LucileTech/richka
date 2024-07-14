import React from "react";
import { getAssetPath } from "../utils/getAssetPath";

const Reviews = () => {
  return (
    <div id="REVIEWS" className="reviews">
      <h2>FROM OUR CUSTOMERS</h2>
      <div className="reviews-container">
        <div className="review-card">
          <div className="review-content">
            <img
              src={getAssetPath("/photographs/review1.webp")}
              alt="Katya Yatsenko"
              className="review-image-top-right"
            />
            <p>
              <p id="quote">"</p>
              <p>
                I liked the composition of this tea so much that I’ve been
                drinking only “Herbs Symphony” for more than a month! Fennel
                adds an unusual note to the aroma. And also, as a nice bonus, it
                helped with my sleep problems.
              </p>
              <br />
              <span>Katya Yatsenko</span>
            </p>
          </div>
          <div className="review-product">
            <img
              src={getAssetPath("/photographs/review1product.webp")}
              alt="Herbs Symphony"
            />
            <div>
              <h3>Tea "Herbs Symphony", 50gr</h3>
              <p>
                Relieves anxiety, calms the mind and helps fight chronic stress,
                relieves menstrual discomfort.
              </p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-content">
            <img
              src={getAssetPath("/photographs/review2.webp")}
              alt="Serhiy Bondar"
              className="review-image-top-right"
            />
            <p>
              <p id="quote">"</p>
              <p>
                As a Massage Therapist I selected Richka’s Essential Oils
                because of their high quality and standing out customer service.
                Feeling happy to offer my clients good service accompanied with
                great materials.
              </p>
              <br />
              <span>Serhiy Bondar</span>
            </p>
          </div>
          <div className="review-product">
            <img
              src={getAssetPath("/photographs/review2product.webp")}
              alt="Peppermint Essential Oil"
            />
            <div>
              <h3>Peppermint Essential Oil, 5ml</h3>
              <p>
                Reduces pain or discomfort from sore muscles, helps to relax,
                cooling down.
              </p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-content">
            <img
              src={getAssetPath("/photographs/review3.webp")}
              alt="Iryna Pavlyuk"
              className="review-image-top-right"
            />
            <p>
              <p id="quote">"</p>
              <p>
                Just opened hydrolates for myself! Happy to use it as a balm for
                my dry mature skin. It really make it smooth and fresh and slow
                down the aging process. I also add it to a bathtub when I want
                to make a SPA day at home.
              </p>
              <br />
              <span>Iryna Pavlyuk</span>
            </p>
          </div>
          <div className="review-product">
            <img
              src={getAssetPath("/photographs/review3product.webp")}
              alt="Lavenda Hydrolate"
            />
            <div>
              <h3>Lavendula Hydrolate, 200ml</h3>
              <p>
                Toning, moisturizing and nourishing, cleansing and narrowing
                pores, general skin rejuvenation.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="reviews-button">READ MORE REVIEWS</button> */}
    </div>
  );
};

export default Reviews;
