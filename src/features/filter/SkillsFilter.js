import React from "react";
import {
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./SkillsFilter.css";
import {
  updateSkill,
  alphabetical,
  reversealphabetical,
  ascending,
  descending,
} from "../skills/skillsSlice";
import { useDispatch } from "react-redux";

const SkillsFilter = (props) => {
  let tradeFilter = props.tradeFilter;
  let setTradeFilter = props.setTradeFilter;

  //Redux Selectors
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
        isOpen={tradeFilter}
        toggle={() => {
          tradeFilter === true ? setTradeFilter(false) : setTradeFilter(true);
        }}
      >
        <DropdownToggle caret>Filter</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Sort order:</DropdownItem>
          <DropdownItem onClick={() => dispatch(alphabetical())}>
            Alphabetical
          </DropdownItem>
          <DropdownItem onClick={() => dispatch(reversealphabetical())}>
            Reverse Alphabetical
          </DropdownItem>
          <DropdownItem onClick={() => dispatch(ascending())}>
            Highest to lowest
          </DropdownItem>
          <DropdownItem onClick={() => dispatch(descending())}>
            Lowest to highest
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export { SkillsFilter };
