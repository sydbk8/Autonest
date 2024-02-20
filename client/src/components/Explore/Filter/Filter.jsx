import React, { useState } from "react";
import "./Filter.css";
import { FaSearch, FaSlidersH } from "react-icons/fa";

const Filter = ({
  makeFilter,
  fuelTypeFilter,
  transmissionFilter,
  conditionFilter,
  typeFilter,
  minPrice,
  maxPrice,
  sortBy,
  searchQuery,
  handleMakeFilterChange,
  handleFuelTypeFilterChange,
  handleTransmissionFilterChange,
  handleConditionFilterChange,
  handleTypeFilterChange,
  handleMinPriceRangeChange,
  handleMaxPriceRangeChange,
  handleSortChange,
  handleSearchInputChange,
  clearFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    document.body.classList.add("active-filter");
  } else {
    document.body.classList.remove("active-filter");
  }

  return (
    <div className="container filter-container">
      <div className="condition">
        <div className="search">
        <input
            type="text"
            className="search__input"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <div className="search__icon">
            <FaSearch />
          </div>
          <button onClick={togglePopup} className="input-btn">
            <FaSlidersH />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="modal">
          <div onClick={togglePopup} className="filter-overlay"></div>
          <div className="filter-box">
            <div>
              <label htmlFor="makeFilter" className="filter-label">
                Make
              </label>
              <div className="filter-selector">
                <select
                  id="makeFilter"
                  onChange={handleMakeFilterChange}
                  value={makeFilter}
                >
                  <option value="">All Makes</option>
                  <option value="Acura">Acura</option>
                  <option value="Alfa Romeo">Alfa Romeo</option>
                  <option value="Audi">Audi</option>
                  <option value="Bentley">Bentley</option>
                  <option value="BMW">BMW</option>
                  <option value="Buick">Buick</option>
                  <option value="Cadillac">Cadillac</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Chrysler">Chrysler</option>
                  <option value="Datsun">Datsun</option>
                  <option value="Dodge">Dodge</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Fiat">Fiat</option>
                  <option value="Ford">Ford</option>
                  <option value="Genesis">Genesis</option>
                  <option value="GMC">GMC</option>
                  <option value="Honda">Honda</option>
                  <option value="Hummer">Hummer</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Infiniti">Infiniti</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Kia">Kia</option>
                  <option value="Land Rover">Land Rover</option>
                  <option value="Lexus">Lexus</option>
                  <option value="Lincoln">Lincoln</option>
                  <option value="Maserati">Maserati</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Mercury">Mercury</option>
                  <option value="Mini">Mini</option>
                  <option value="Mitsubishi">Mitsubishi</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Pontiac">Pontiac</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Ram">Ram</option>
                  <option value="Saab">Saab</option>
                  <option value="Saturn">Saturn</option>
                  <option value="Scion">Scion</option>
                  <option value="Smart">Smart</option>
                  <option value="Subaru">Subaru</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Volvo">Volvo</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="minPrice" className="filter-label">
                Min price
              </label>
              <div className="filter-selector">
                <input
                  type="range"
                  id="minPrice"
                  min="0"
                  max="175000"
                  value={minPrice}
                  onChange={(e) => handleMinPriceRangeChange(e)}
                />
                ${minPrice}
              </div>
            </div>
            <div>
              <label htmlFor="maxPrice" className="filter-label">
                Max price
              </label>
              <div className="filter-selector">
                <input
                  type="range"
                  id="maxPrice"
                  min="0"
                  max="175000"
                  value={maxPrice}
                  onChange={(e) => handleMaxPriceRangeChange(e)}
                />
                ${maxPrice}
              </div>
            </div>

            <div>
              <label htmlFor="makeFilter" className="filter-label">
                Type
              </label>
              <div className="filter-selector">
                <select
                  id="typeFilter"
                  onChange={handleTypeFilterChange}
                  value={typeFilter}
                >
                  <option value="">All Types</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Truck">Truck</option>
                  <option value="Van">Van</option>
                  <option value="Convertible">Convertible</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Wagon">Wagon</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="filter-label">Fuel</label>
              <div className="filter-selector">
                <label>
                  <input
                    type="radio"
                    name="fuelType"
                    value=""
                    checked={fuelTypeFilter === ""}
                    onChange={() => handleFuelTypeFilterChange("")}
                  />
                  All
                </label>
                <label>
                  <input
                    type="radio"
                    name="fuelType"
                    value="gasoline"
                    checked={fuelTypeFilter === "gasoline"}
                    onChange={() => handleFuelTypeFilterChange("gasoline")}
                  />
                  Gasoline
                </label>
                <label>
                  <input
                    type="radio"
                    name="fuelType"
                    value="electric"
                    checked={fuelTypeFilter === "electric"}
                    onChange={() => handleFuelTypeFilterChange("electric")}
                  />
                  Electric
                </label>
              </div>
            </div>
            <div>
              <label className="filter-label">Transmission</label>
              <div className="filter-selector">
                <label>
                  <input
                    type="radio"
                    name="transmission"
                    value=""
                    checked={transmissionFilter === ""}
                    onChange={() => handleTransmissionFilterChange("")}
                  />
                  All Transmissions
                </label>
                <label>
                  <input
                    type="radio"
                    name="transmission"
                    value="Automatic"
                    checked={transmissionFilter === "Automatic"}
                    onChange={() => handleTransmissionFilterChange("Automatic")}
                  />
                  Automatic
                </label>
                <label>
                  <input
                    type="radio"
                    name="transmission"
                    value="Manual"
                    checked={transmissionFilter === "Manual"}
                    onChange={() => handleTransmissionFilterChange("Manual")}
                  />
                  Manual
                </label>
              </div>
            </div>

            <div>
              <label className="filter-label">Condition</label>
              <div className="filter-selector">
                <label>
                  <input
                    type="radio"
                    name="condition"
                    value=""
                    checked={conditionFilter === ""}
                    onChange={() => handleConditionFilterChange("")}
                  />
                  All Conditions
                </label>
                <label>
                  <input
                    type="radio"
                    name="condition"
                    value="New"
                    checked={conditionFilter === "New"}
                    onChange={() => handleConditionFilterChange("New")}
                  />
                  New
                </label>
                <label>
                  <input
                    type="radio"
                    name="condition"
                    value="Used"
                    checked={conditionFilter === "Used"}
                    onChange={() => handleConditionFilterChange("Used")}
                  />
                  Used
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="sortFilter" className="filter-label">
                Sort By
              </label>
              <div className="filter-selector">
                <select
                  id="sortFilter"
                  onChange={handleSortChange}
                  value={sortBy}
                >
                  <option value="">Best match</option>
                  <option value="Lowest price">Lowest price</option>
                  <option value="Highest price">Highest price</option>
                  <option value="Newest year">Newest year</option>
                  <option value="Oldest year">Oldest year</option>
                  <option value="Lowest miles">Lowest miles</option>
                  <option value="Highest miles">Highest miles</option>
                </select>
              </div>
            </div>
            <div className="filter-input">
              <button
                onClick={clearFilters}
                className="bg-blue-500 text-white py-2 px-4 w-full rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Clear Filters
              </button>
            </div>
            <button onClick={togglePopup} className="close-filter-button">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
