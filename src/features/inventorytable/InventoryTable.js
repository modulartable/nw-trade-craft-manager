import React from "react";
import { Table } from "reactstrap";
import { InvFilter } from "../filter/InvFilter";
import "./InventoryTable.css";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteMaterials } from "./inventorySlice";

const InventoryTable = (props) => {
  const state = useSelector((state) => state.inventory);

  let bagFilter = props.bagFilter;
  let setBagFilter = props.setBagFilter;

  const dispatch = useDispatch();

  return (
    <div id="tableContainer">
      <h3>Crafting materials:</h3>
      <div id="lookContainer">
        <div>
          <InvFilter bagFilter={bagFilter} setBagFilter={setBagFilter} />
        </div>
      </div>
      <Table bordered hover responsive id="allItems">
        <thead>
          <tr>
            <th>Item name:</th>
            <th>Quantity:</th>
            <th>Location:</th>
            <th>Delete:</th>
          </tr>
        </thead>
        <tbody>
          {state.map((el) => (
            <tr key={el.name}>
              <td>{el.name}</td>
              <td>{el.quantity}</td>
              <td>{el.location}</td>
              <td>
                <Button
                  className="closeBtns"
                  close
                  onClick={() => {
                    dispatch(deleteMaterials(el.name));
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export { InventoryTable };
