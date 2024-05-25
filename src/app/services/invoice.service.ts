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
    return this.invoice;
  }
}
