import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
    </Card>
  );
}
export default ProjectCards;