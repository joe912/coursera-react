import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

function RenderComments({ comments }) {
  const commentsOutput = comments.map(comment => {
    return (
      <li key={comment.id} className="list-unstyled">
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format(new Date(Date.parse(comment.date)))}
        </p>
      </li>
    );
  });

  return commentsOutput;
}

function RenderDish({ dish }) {
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5">
        <h2>Comments</h2>
        <RenderComments comments={dish.comments} />
      </div>
    </div>
  );
}

const DishDetail = props => {
  if (props.selectedDish != null) {
    return (
      <div className="container">
        <RenderDish dish={props.selectedDish} />
        <RenderComments comments={props.selectedDish.comments} />
      </div>
    );
  } else {
    return <div>No dish selected</div>;
  }
};

export default DishDetail;
