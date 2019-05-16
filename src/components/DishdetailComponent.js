import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

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
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} />
      </div>
    );
  } else {
    return <div />;
  }
};

export default DishDetail;
