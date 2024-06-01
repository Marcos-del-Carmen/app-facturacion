import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice'; // clase padre
import { invoiceData } from '../data/invoice.data'; // api = donde esta la informacion 

@Injectable({
  providedIn: 'root'
})
export class IvoiceService {
  private invoice: Invoice = invoiceData;
  constructor() { }
  
  getInvoice(): Invoice {
    const total = this.calcularTotal();
    return {... this.invoice, total}; // Spread: se dempaquetan las propiedades del objeto para crear uno nuevo con las mismas propiedades 
  }

  recalcularTotal(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);   // lo que sea difente del id que se recive como parametro en el método es verdadero en caso contrario es falsooo 
    const total = this.calcularTotal();
    return {... this.invoice, total};
  }

  /* 
    id:3 != id:1 igual a true 
    id:3 != id:2 igual a true 
    id:3 != id:3 igual a false 
  */
  calcularTotal() {
    // let total = 0; 
    // this.invoice.items.forEach(item => {
    //   total = total + item.total();
    // });
    // return total; 
    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
