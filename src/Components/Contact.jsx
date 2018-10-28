import React from 'react';
import { Media, Row, Col, Image } from 'react-bootstrap';

export default function Contact(props) {
  return (
    <div class="container">
      <Media id="contactCard">
        <Media.Left align="top">
          <img
            className="img-circle"
            responsive
            width={128}
            height={128}
            src="/pimg.jpg"
            alt="thumbnail"
          />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Top aligned media</Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}
