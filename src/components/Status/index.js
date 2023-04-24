import "./index.css";

const Status = () => (
  <>
    <div className="color-boxes-container">
      <div className="color-box-container">
        <div className="count-container">
          <p className="count">O New Request</p>
        </div>
        <div className="count-details-container">
          <p className="details-text">View Details</p>
          <p className="right-arrow">">"</p>
        </div>
      </div>
      <div className="color-box-container">
        <div className="count-container">
          <p className="count">O New Request</p>
        </div>
        <div className="count-details-container">
          <p className="details-text">View Details</p>
          <p className="right-arrow">">"</p>
        </div>
      </div>
      <div className="color-box-container">
        <div className="count-container">
          <p className="count">O New Request</p>
        </div>
        <div className="count-details-container">
          <p className="details-text">View Details</p>
          <p className="right-arrow">">"</p>
        </div>
      </div>
      <div className="color-box-container">
        <div className="count-container">
          <p className="count">O New Request</p>
        </div>
        <div className="count-details-container">
          <p className="details-text">View Details</p>
          <p className="right-arrow">">"</p>
        </div>
      </div>
    </div>
    <h1 className="pricing-heading">Laundry Price(per Unit)</h1>
    <ul className="pricing-list">
      <li className="price-item">
        <div className="pricing-item-container">
          <div className="price-description-container">
            <p className="price-description">Top Wear Laundry Price</p>
          </div>
          <div className="price-container">
            <p className="price">12</p>
          </div>
        </div>
      </li>
      <li className="price-item">
        <div className="pricing-item-container">
          <div className="price-description-container">
            <p className="price-description">Bottom Wear Laundry Price</p>
          </div>
          <div className="price-container">
            <p className="price">22</p>
          </div>
        </div>
      </li>
      <li className="price-item">
        <div className="pricing-item-container">
          <div className="price-description-container">
            <p className="price-description">Woolen Cloth Laundry Price</p>
          </div>
          <div className="price-container">
            <p className="price">20</p>
          </div>
        </div>
      </li>
      <li className="price-item">
        <div className="pricing-item-container">
          <div className="price-description-container">
            <p className="price-description">Other Price</p>
          </div>
          <div className="price-container">
            <p className="price">
              Other Price depend upon the cloth variety(other than above three
              category)
            </p>
          </div>
        </div>
      </li>
    </ul>
  </>
);

export default Status;
