import React from "react";
import { InventoryTable } from "./features/inventorytable/InventoryTable";
import { Skills } from "./features/skills/Skills";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Offcanvas,
  Button,
  OffcanvasHeader,
  OffcanvasBody,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMaterials } from "./features/inventorytable/inventorySlice";


function App() {
  //Setting a state to control the inventory table filter dropwdown visibility
  const [bagFilter, setBagFilter] = useState(false);

  //Setting a state to control the trade skiils filter dropdown visibility
  const [tradeFilter, setTradeFilter] = useState(false);

  //Setting a state to control the visibility of hte add item side canvas section
  const [offCanvas, setOffCanvas] = useState(false);

  //Setting states to control and keep track of the inputs on the add item form and update skill form
  const [itemName, setItemName] = useState("");

  const [itemQuantity, setItemQuantity] = useState(0);

  const [itemLocation, setItemLocation] = useState("Brightwood");

  const [newLevel, setNewLevel] = useState(0);

  const [skillName, setSkillName] = useState("Arcana");

  //Set a state to control visibility of the trade skill modal

  const [modal, setModal] = useState(false);

  //Sets useDispatch to a variable for easier to read code

  const dispatch = useDispatch();

  //Selects the inventory state from the Redux store

  const state = useSelector((state) => state.inventory);

  return (
    <div>
      <div id="headerContainer">
        {/* Button to toggle the view of the side canvas to add items */}
        <Button
          color="success"
          onClick={() => {
            offCanvas === true ? setOffCanvas(false) : setOffCanvas(true);
          }}
        >
          Add Item
        </Button>

        {/* Side canvas with a form to add materials/items to the inventory table */}
        <Offcanvas
          isOpen={offCanvas}
          toggle={() => {
            setOffCanvas(false);
          }}
        >
          {/* The button to close the side canvas */}
          <Button
            close
            onClick={() => {
              setOffCanvas(false);
            }}
            style={{ marginLeft: "auto", padding: "10px" }}
          />
          <OffcanvasHeader>Add Item:</OffcanvasHeader>
          <OffcanvasBody>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form>
                <FormGroup>
                  <div>
                    <Input
                      type="name"
                      className="itemForm"
                      placeholder="Item name"
                      value={itemName}
                      onChange={(e) => {
                        setItemName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="number"
                      className="itemForm"
                      placeholder="Quantity"
                      value={itemQuantity}
                      onChange={(e) => {
                        setItemQuantity(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="select"
                      className="itemForm"
                      value={itemLocation}
                      onClick={(e) => {
                        setItemLocation(e.target.value);
                      }}
                      required
                    >
                      <option>Brightwood</option>
                      <option>Cleave's Point</option>
                      <option>Cutlass Keys</option>
                      <option>Eastburn</option>
                      <option>Ebonscale Reach</option>
                      <option>Everfall</option>
                      <option>First Light</option>
                      <option>Last Stand</option>
                      <option>Monarch's Bluffs</option>
                      <option>Mountainhome</option>
                      <option>Mountainrise</option>
                      <option>Reekwater</option>
                      <option>Restless Shore</option>
                      <option>Valor Hold</option>
                    </Input>
                  </div>
                </FormGroup>
              </Form>
              <div>
                <Button
                  onClick={() => {
                    dispatch(
                      addMaterials({
                        name: itemName,
                        quantity: itemQuantity,
                        location: itemLocation,
                      })
                    ) && setItemName("");
                    setItemQuantity(0);
                    setItemLocation("Brightwood");
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </OffcanvasBody>
        </Offcanvas>
      </div>
      <div id="bodyContainer">
        {/* Sets conditional rendering based on the inventory state's length */}

        <InventoryTable bagFilter={bagFilter} setBagFilter={setBagFilter} />
        {state.length === 0 ? (
          <h4 style={{ marginBottom: "50px" }}>
            There are no materials in your inventory...
          </h4>
        ) : (
          ""
        )}

        <Skills
          modal={modal}
          setModal={setModal}
          tradeFilter={tradeFilter}
          setTradeFilter={setTradeFilter}
          skillName={skillName}
          setSkillName={setSkillName}
          newLevel={newLevel}
          setNewLevel={setNewLevel}
        />
      </div>
    </div>
  );
}

export default App;
