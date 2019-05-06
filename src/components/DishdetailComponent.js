import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dish = this.props.selectedDish;

    if (dish != null) {
      const comments = this.props.selectedDish.comments.map(comment => {
        return (
          <li key={comment.id} className="list-unstyled">
            <p>{comment.comment}</p>
            <p>
              -- {comment.author} {comment.date}
            </p>
          </li>
        );
      });

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
            {comments}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DishdetailComponent;
