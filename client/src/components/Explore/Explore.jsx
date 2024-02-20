import React, { useState, useEffect } from "react";
import axios from "axios";
import Property from "./Property/Property";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";
import ExploreHero from "./ExploreHero/ExploreHero";

const Explore = () => {
  const URL = "http://localhost:5000/api/cars";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [makeFilter, setMakeFilter] = useState("");
  const [fuelTypeFilter, setFuelTypeFilter] = useState("");
  const [transmissionFilter, setTransmissionFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(175000);
  // const [currentPage, setCurrentPage] = useState(1);
  // const cardsPerPage = 4;
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL, {
          params: {
            sortBy,
            makeFilter,
            fuelType: fuelTypeFilter,
            transmission: transmissionFilter,
            condition: conditionFilter,
            type: typeFilter,
            minPrice,
            maxPrice,
            // page: currentPage,
            // limit: cardsPerPage,
            searchQuery
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [
    sortBy,
    makeFilter,
    fuelTypeFilter,
    transmissionFilter,
    conditionFilter,
    typeFilter,
    minPrice,
    maxPrice,
    // currentPage,
    searchQuery
  ]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleMakeFilterChange = (e) => {
    setMakeFilter(e.target.value);
  };

  const handleFuelTypeFilterChange = (e) => {
    setFuelTypeFilter(e);
  };

  const handleTransmissionFilterChange = (e) => {
    setTransmissionFilter(e);
  };

  const handleConditionFilterChange = (e) => {
    setConditionFilter(e);
  };

  const handleTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
  };

  const handleMinPriceRangeChange = (e) => {
    setMinPrice(parseInt(e.target.value, 10));
  };

  const handleMaxPriceRangeChange = (e) => {
    setMaxPrice(parseInt(e.target.value, 10));
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearFilters = () => {
    setSortBy("");
    setMakeFilter("");
    setFuelTypeFilter("");
    setTransmissionFilter("");
    setConditionFilter("");
    setTypeFilter("");
    setMinPrice(0);
    setMaxPrice(175000);
    setSearchQuery("");
  };

  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  return (
    <div>
      <ExploreHero />
      <Filter
        makeFilter={makeFilter}
        fuelTypeFilter={fuelTypeFilter}
        transmissionFilter={transmissionFilter}
        conditionFilter={conditionFilter}
        typeFilter={typeFilter}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortBy={sortBy}
        searchQuery={searchQuery}
        handleMakeFilterChange={handleMakeFilterChange}
        handleFuelTypeFilterChange={handleFuelTypeFilterChange}
        handleTransmissionFilterChange={handleTransmissionFilterChange}
        handleConditionFilterChange={handleConditionFilterChange}
        handleTypeFilterChange={handleTypeFilterChange}
        handleMinPriceRangeChange={handleMinPriceRangeChange}
        handleMaxPriceRangeChange={handleMaxPriceRangeChange}
        handleSortChange={handleSortChange}
        handleSearchInputChange={handleSearchInputChange}
        clearFilters={clearFilters}
      />
      <Property data={data} loading={loading} error={error} />
      {/* <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalCards={data.length}
          /> */}
    </div>
  );
};

export default Explore;
