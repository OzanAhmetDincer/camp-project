import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            {/* Route işlemi yapabilmek için yönlendirme yapılacak komponent "react-router-dom" içerisinde olan aşağıda olduğu gibi "Route" içerisinde tanımlanır. path ile hangi sayfaya gidildiğinde bilgisi verilir yani şuan bizim yaptığımız da ana sayfaya(/) giderse veya herhangi bir bilgi yazarasa(localhost/3000/asdasfasf)  "ProductList" komponentini göster demiş olduk ve değişiklik olduğu zamanda buraya yansıtılacak. Farklı sayfalarda da bunu göstermemesi için "exact" ekleriz. */}
            <Routes>
              <Route exact path="/" Component={ProductList} />
              <Route exact path="/products" Component={ProductList} />
              <Route path="/products/:id" Component={ProductDetail} />
              <Route path="/cart" Component={CartDetail} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
