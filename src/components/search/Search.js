import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetch_api, GEO_OPTIONS } from "../../DataAPI";

export default function Search({ handleOnSearch }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (searchInput) => {
    return fetch(
      `${fetch_api}/cities?minPopulation=1000000&namePrefix=${searchInput}`,
      GEO_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.city} ${city.countryCode}`,
          })),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleSearch = (searchData) => {
    setSearch(searchData);
    handleOnSearch(searchData);
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search The City"
        debounceTimeout={500}
        value={search}
        onChange={handleSearch}
        loadOptions={loadOptions}
      />
    </>
  );
}
