import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Media
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderLeader(props) {
  return (
    <div key={props.leader.id} className="col-12 mt-5">
      <Media tag="li">
        <Media left middle>
          <Media object src={props.leader.image} alt={props.leader.name} />
        </Media>
        <Media body className="ml-5">
          <Media heading>{props.leader.name}</Media>
          <Media subheading>{props.leader.designation}</Media>
          <p>{props.leader.description}</p>
        </Media>
      </Media>
    </div>
  );
}

export default RenderLeader;
