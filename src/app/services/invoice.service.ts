import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice'; // clase padre
import { invoiceData } from '../data/invoice.data'; // api = donde esta la informacion 
import { Items } from '../models/items';

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

  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);   // lo que sea difente del id que se recive como parametro en el método es verdadero en caso contrario es falsooo 
    const total = this.calcularTotal();
    return {... this.invoice, total};
  }

  save(item: Items) {
    this.invoice.items = [... this.invoice.items, item]
    const total = this.calcularTotal();
    return {... this.invoice, total};
  }

  calcularTotal() {
    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
