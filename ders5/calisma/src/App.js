import React, { Component } from "react";
import Kategori from "./Kategori";
import Navigate from "./Navigate";
import UrunListesi from "./UrunListesi";
import { Container, Row, Col } from "reactstrap";
//seciliKategori:""

class App extends Component {
  state={seciliKategori:""};
  kategoriDegistir = (Kategoriler) => {
    this.setState({ seciliKategori: Kategoriler.KategoriIsim });
  };

  render() {
    let bilgiKategori = { baslik: "Kategori", ilave: "ilave Bilgi" };

    return (
      <div>
        <Container>
          <Row>
            <Navigate />
          </Row>
          <Row>
            <Col xs="5">
              <Kategori seciliKategori={this.state.seciliKategori}
              kategoriDegistir={this.kategoriDegistir} bilgiKategori={bilgiKategori} />
            </Col>
            <Col xs="7">
              <UrunListesi seciliKategori={this.state.seciliKategori} baslik="Ürün Listesi" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
