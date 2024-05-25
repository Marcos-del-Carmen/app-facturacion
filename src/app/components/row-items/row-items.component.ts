import { Component, Input } from '@angular/core';
import { Items } from '../../models/items';

@Component({
  selector: 'tr [app-row-items]',
  standalone: true,
  imports: [],
  templateUrl: './row-items.component.html'
})
export class RowItemsComponent {
  @Input() item!: Items;
}
