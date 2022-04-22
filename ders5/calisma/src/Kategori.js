import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Kategori extends Component {
    constructor(props){
        super(props);
        this.state={
            Kategoriler:[
                {kategoriId:1,KategoriIsim:"Bilgisayar"},
                {kategoriId:2,KategoriIsim:"Harddisk"},
                {kategoriId:3,KategoriIsim:"Masa"},
                {kategoriId:4,KategoriIsim:"CD"}
            ],
            
        }
    }

  render() {
    return (
      <div>
          <h3>{this.props.bilgiKategori.baslik}</h3>
          <h4>{this.props.bilgiKategori.ilave}</h4>
        <ListGroup>
            {this.state.Kategoriler.map(Kategoriler=>(
                <ListGroupItem 
                onClick={()=>this.props.kategoriDegistir(Kategoriler)}
                key={Kategoriler.kategoriId}>{Kategoriler.KategoriIsim}</ListGroupItem>
            ))}          
        </ListGroup>
        <h4>{this.props.seciliKategori}</h4>
      </div>
    );
  }
}
