/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 17 2020 14:35:00 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import Select from "react-select";

import styles from "./FilterBlock.module.css";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
  }),
  control: (styles) => ({
    ...styles,
    width: 150,
    backgroundColor: "#fff",
  }),
};

function FilterBlock(props) {
  const { filterData, handleOptionChange } = props;

  const { label, param, options } = filterData;

  return (
    <div className={styles.block_root}>
      <h3>{label}</h3>
      <Select
        styles={customStyles}
        options={options}
        defaultValue={options[0]}
        onChange={(selectedOption) =>
          handleOptionChange(param, selectedOption.value)
        }
      />
    </div>
  );
}

export default FilterBlock;
