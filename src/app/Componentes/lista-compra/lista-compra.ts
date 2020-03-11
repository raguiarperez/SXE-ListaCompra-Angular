import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.html',
  styleUrls: ['./lista-compra.scss']
})
export class ListaProductos implements OnInit {

  productos: any[];
  // creo un array llamado productos; en él creo cada uno de los productos, con sus datos.
  // estos productos serán los que se mostrarán.
  constructor() {
    const producto1 = {
      titulo: 'Nombre Producto 1',
      cuerpo: `Whisky Irlandés`,
      precio: `25$ `,
      img: 'assets/image/whisky2.png',
    };
    const producto2 = {
      titulo: 'Nombre Producto 2',
      cuerpo: `Whisky Escocés`,
      precio: `23$ `,
      img: 'assets/image/whisky1.png',
    };
    const producto3 = {
      titulo: 'Nombre Producto 3',
      cuerpo: `Vino Gallego`,
      precio: `20$ `,
      img: 'assets/image/wine.png',
    };
    const producto4 = {
      titulo: 'Nombre Producto 4',
      cuerpo: `Vodka Ruso Imp.`,
      precio: `15$`,
      img: 'assets/image/vodka.png',
    };
    this.productos = [];
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
    this.productos.push(producto4);
  }

  ngOnInit() {
  }

  seleccionarCompra(index) {
    // EN VARIAS LINEAS
    /*
    if (this.productos[index].comprado) {
      this.productos[index].comprado = false;
    } else {
      this.productos[index].comprado = true;
    }
     */
    // EN UNA LINEA
    this.productos[index].comprado = !this.productos[index].comprado;
  }
}

