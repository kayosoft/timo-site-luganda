import React from "react";
import { FaHeart, FaStar } from "react-icons/fa"; // Import icons from react-icons
import { BsFillHouseDoorFill } from "react-icons/bs"; // Icon for square footage
import { BiDirections, BiBath } from "react-icons/bi"; // Bed and Bath icons

const PropertyCard = ({ image, description, size, price, rate }) => {
  return (
    <div className="card shadow-sm mx-4 mt-4" style={{ width: "18rem" }}>
      {/* Image Section */}
      <div className="position-relative">
        <img className="card-img-top" src={image} alt="Property" />
        <button
          className="btn btn-light rounded-circle position-absolute"
          style={{ top: "10px", right: "10px" }}
        >
          {/* <FaHeart className="text-danger" /> */}
        </button>
      </div>

      {/* Content Section */}
      <div className="card-body">
        {/* Address */}
        <h5 className="card-title">{description}</h5>

        {/* Property Details */}
        <div className="d-flex justify-content-between text-muted my-2">
          <div className="d-flex align-items-center">
            <BsFillHouseDoorFill className="me-1" />
            <span>{size}</span>
          </div>
          <div className="d-flex align-items-center"></div>
          <div className="d-flex align-items-center">
            <BiDirections className="me-1" />
            <span>Access Roads</span>
          </div>
        </div>

        {/* Price and Rating */}
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-5 fw-bold">{price}</span>
          <div className="d-flex align-items-center">
            <FaStar className="text-warning" />
            <span className="ms-1 fw-semibold">{rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
