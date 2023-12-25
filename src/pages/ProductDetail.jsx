import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getById(id)
      .then((result) => setProduct(result.data.data));
  },[]);
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="small"
              src="https://www.markakalem.com/productimages/127360/big/4250278613419_1.jpg"
            />
            <Card.Header>{product.productId}</Card.Header>
            <Card.Meta>Ürün Adı: {product.productName}</Card.Meta>
            <Card.Meta>Ürün Stok Bilgisi: {product.unitsInStock}</Card.Meta>
            <Card.Meta>Ürün Fiyatı: {product.unitPrice}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
