import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

const SettingsCountrySelect = ({ control, name }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={selectedCountry}
      render={({ field: { onChange, value } }) => (
        <Select
          options={countries}
          onChange={(selectedOption) => {
            onChange(selectedOption);
            setSelectedCountry(selectedOption.value);
          }}
          value={value}
        />
      )}
    />
  );
};

export default SettingsCountrySelect;
