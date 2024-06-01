import { Component, OnInit } from '@angular/core';
import { IvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemsComponent } from '../row-items/row-items.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [ClientViewComponent, CompanyViewComponent, InvoiceViewComponent, ListItemsComponent, RowItemsComponent, TotalComponent],
  templateUrl: './invoice.component.html'
})

export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  constructor(private _invoiceService: IvoiceService) {}  

  ngOnInit(): void {
    this.invoice = this._invoiceService.getInvoice();
  }

  removeItem(id: number){
    this.invoice = this._invoiceService.recalcularTotal(id);
  }
}
