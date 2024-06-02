import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-item.component.html'
})
export class FormItemComponent {
  activo: boolean = true;
  @Output() addItemEventEmitter = new EventEmitter();
  // Esto permite que un componente hijo envíe datos o eventos a su componente padre.
  private counterId = 4;

  item: any = {
    product: '', 
    price: '', 
    quantity: ''
  }

  onSumit(itemForm: NgForm) {
    if(itemForm.valid){
      this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
      this.counterId++;
  
      this.item = {
        product: '', 
        price: '', 
        quantity: ''
      }
  
      itemForm.reset()
      itemForm.resetForm()
    }
  }

  btnActivo() {
    if(this.activo == true){
      this.activo = false;
    } 
    if(this.activo == false) {
      this.activo = true
    }
  }
}
