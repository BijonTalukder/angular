import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-goods',
 imports: [CommonModule, FormsModule],
    standalone: true,
  templateUrl: './goods.html',
  styleUrl: './goods.css'
})
export class Goods {
   goodsName = '';
onSubmit() {
  //  event.preventDefault();
  let name = this.goodsName ;
  console.log('Goods calling!',name);
  }
}
