import { Component, Input } from '@angular/core';
import { Items } from '../../models/items';
import { RowItemsComponent } from '../row-items/row-items.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [RowItemsComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {
  @Input() items: Items[] = [];
}
