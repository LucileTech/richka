import React from "react";

const Reviews: React.FC = () => {
  return (
    <div className="reviews">
      <h2>FROM OUR CUSTOMERS</h2>
      <div className="reviews-container">
        <div className="review-card">
          <div className="review-content">
            <img
              src="/photographs/review1.png"
              alt="Katya Yatsenko"
              className="review-image-top-right"
            />
            <p>
              <q>
                I liked the composition of this tea so much that I’ve been
                drinking only “Herbs Symphony” for more than a month! Fennel
                adds an unusual note to the aroma. And also, as a nice bonus, it
                helped with my sleep problems.
              </q>
              <br />- Katya Yatsenko
            </p>
          </div>
          <div className="review-product">
            <img
              src="/photographs/review1product.png"
              alt="Herbs Symphony"
              className="review-image-bottom-left"
            />
            <p>Tea "Herbs Symphony", 50g</p>
            <p>
              Relieves anxiety, calms the mind and helps fight chronic stress,
              relieves menstrual discomfort.
            </p>
          </div>
        </div>
        <div className="review-card">
          <div className="review-content">
            <img
              src="/photographs/review2.png"
              alt="Serhiy Bondar"
              className="review-image-top-right"
            />
            <p>
              <q>
                As a Massage Therapist I selected Richka’s Essential Oils
                because of their high quality and standing out customer service.
                Feeling happy to offer my clients good service accompanied with
                great materials.
              </q>
              <br />- Serhiy Bondar
            </p>
          </div>
          <div className="review-product">
            <img
              src="/photographs/review2product.png"
              alt="Peppermint Essential Oil"
              className="review-image-bottom-left"
            />
            <p>Peppermint Essential Oil, 5ml</p>
            <p>
              Reduces pain or discomfort from sore muscles, helps to relax,
              cooling down.
            </p>
          </div>
        </div>
        <div className="review-card">
          <div className="review-content">
            <img
              src="/photographs/review3.png"
              alt="Iryna Pavlyuk"
              className="review-image-top-right"
            />
            <p>
              <q>
                Just opened hydrolates for myself! Happy to use it as a balm for
                my dry mature skin. It really make it smooth and fresh and slow
                down the aging process. I also add it to a bathtub when I want
                to make a SPA day at home.
              </q>
              <br />- Iryna Pavlyuk
            </p>
          </div>
          <div className="review-product">
            <img
              src="/photographs/review3product.png"
              alt="Lavenda Hydrolate"
              className="review-image-bottom-left"
            />
            <p>Lavenda Hydrolate, 200ml</p>
            <p>
              Toning, moisturizing and nourishing, cleansing and narrowing
              pores, general skin rejuvenation.
            </p>
          </div>
        </div>
      </div>
      <button className="reviews-button">READ MORE REVIEWS</button>
    </div>
  );
};

export default Reviews;
