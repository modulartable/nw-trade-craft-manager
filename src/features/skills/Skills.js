import React from "react";
import "./Skills.css";
import { SkillsFilter } from "../filter/SkillsFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { SkillCard } from "./SkillCard";
import { updateSkill } from "./skillsSlice";

const Skills = (props) => {
  //Select the skills state
  const state = useSelector((state) => state.skills);

  const dispatch = useDispatch();

  //Set props to variable for easier-to-read code
  let tradeFilter = props.tradeFilter;
  let setTradeFilter = props.setTradeFilter;
  let modal = props.modal;
  let setModal = props.setModal;
  let newLevel = props.newLevel;
  let setNewLevel = props.setNewLevel;
  let skillName = props.skillName;
  let setSkillName = props.setSkillName;

  //The skillcard components are passed a name and level based upon a given index
  //Of the inventory state so when the state is filtered the cards will adjust accordingly
  return (
    <div>
      <div id="skillsHeader">
        <div>
          <h3>Trade skills:</h3>
        </div>
        <div>
          <SkillsFilter
            tradeFilter={tradeFilter}
            setTradeFilter={setTradeFilter}
          />
        </div>
        <div style={{ margin: "5px" }}>
          <Button
            color="success"
            onClick={() => {
              modal ? setModal(false) : setModal(true);
            }}
          >
            Update Level
          </Button>
        </div>
        <Modal
          centered
          isOpen={modal}
          toggle={() => {
            setModal(false);
          }}
        >
          <ModalHeader>
            <h3>Update Skill Level</h3>
          </ModalHeader>
          <ModalBody>
            <Label for="skill">Trade Skill</Label>
            <Input
              name="skill"
              type="select"
              value={skillName}
              onChange={(e) => {
                setSkillName(e.target.value);
              }}
              required
            >
              {
                //Map's the trade skill state into options on the dropdown input box
                state.map((el) => (
                  <option>{el.name}</option>
                ))
              }
            </Input>
            <Label for="newLevel">New level (0 to 200)</Label>
            <Input
              name="newLevel"
              type="number"
              value={newLevel}
              onChange={(e) => {
                setNewLevel(e.target.value);
              }}
              required
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => {
                  //Checks to make sure the new level inputted is between 0 and 200
                  //If it's not a window alert is created
               if (newLevel > 0 && newLevel < 20) {
                dispatch(updateSkill({ name: skillName, level: newLevel }));
                setModal(false);
                setSkillName("Arcana");
                setNewLevel(0);
               }
               else {
                window.alert("Please enter a new level between 0 and 200")
                setNewLevel(0);
            }
            
              }}
            >
              Submit
            </Button>
            <Button
              color="danger"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div id="skillsContainer">
        {
          //Maps each trade skill to a skillcard component
          state.map((el) => (
            <SkillCard name={el.name} level={el.level} />
          ))
        }
      </div>
    </div>
  );
};

export { Skills };
