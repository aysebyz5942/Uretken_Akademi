import React, { Component } from "react";
import { ListGroup, ListGroupItem, Alert,CardTitle,Button,CardText,Card } from "reactstrap";
export default class UrunListesi extends Component {
  render() {
    return (
      <div>
        <div>
            <h3>{this.props.baslik}</h3>
            <h4>{this.props.seciliKategori}</h4> 
          <Alert>
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
        </div>
        <div>
          <p>
            The <code>numbered</code> prop can be used to opt into numbered list
            group items.
          </p>
          <ListGroup numbered>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </div>
        <div>
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Button</Button>
          </Card>
          <Card body color="primary" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Button</Button>
          </Card>
          <Card body color="success" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Button</Button>
          </Card>
          <Card body color="info" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Button</Button>
          </Card>
          <Card body color="warning" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Button</Button>
          </Card>
          <Card body color="danger" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Button</Button>
          </Card>
        </div>
      </div>
    );
  }
}
