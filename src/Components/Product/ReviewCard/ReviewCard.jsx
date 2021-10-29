import React from "react";
import { Rating } from "@material-ui/lab";
import "./reviewcard.css";
const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
    

      <div className="single-review">
        <div className="single-review__image">
          {
            review.avatar?(<img src={review.avatar} alt="" className="img-fluid" />):(<img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="" className="img-fluid" />)
          }
          
        </div>

        <div className="single-review__content">
        <p className="review-username">
            {review.name}
          </p>
          <div className="single-review__rating">
            <Rating {...options} />
          </div>
          
          <p className="review-title">
            {review.title}
          </p>
          <p className="review-message">{review.comment}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
