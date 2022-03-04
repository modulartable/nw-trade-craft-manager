import React from "react";
import {
  CardGroup,
  Card,
  CardTitle,
  CardText,
  Progress,
  CardSubtitle,
} from "reactstrap";
import "./SkillCard.css";


const SkillCard = (props) => {


  return (
    <div>
      <CardGroup>
        <Card className="cards">
         
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle>Level:</CardSubtitle>
          <CardText>
            <Progress
              animated
              color="success"
              striped
              min="0"
              max="200"
              value={props.level}
            >
              {props.level}/200
            </Progress>
          </CardText>
        </Card>
      </CardGroup>
    </div>
  );
};

export { SkillCard };
