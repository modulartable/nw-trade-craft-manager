import React from "react";
import {
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./InvFilter.css";
import { useDispatch } from "react-redux";
import {
  alphabeticalInv,
  reversealphabeticalInv,
  highestInv,
  lowestInv,
  locationSort,
} from "../inventorytable/inventorySlice";

const InvFilter = (props) => {
  let bagFilter = props.bagFilter;
  let setBagFilter = props.setBagFilter;

  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Dropdown
        isOpen={bagFilter}
        toggle={() => {
          bagFilter === true ? setBagFilter(false) : setBagFilter(true);
        }}
      >
        <DropdownToggle caret>Filter</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Sort order:</DropdownItem>
          <DropdownItem
            onClick={() => {
              dispatch(alphabeticalInv());
            }}
          >
            Alphabetical
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              dispatch(reversealphabeticalInv());
            }}
          >
            Reverse Alphabetical
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              dispatch(highestInv());
            }}
          >
            Highest Quantity
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              dispatch(lowestInv());
            }}
          >
            Lowest Quantity
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              dispatch(locationSort());
            }}
          >
            Location
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export { InvFilter };
