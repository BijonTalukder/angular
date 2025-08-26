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
   goodsList: any[] = [];

  colors = ['Red', 'Blue', 'Green'];
  widths = ['Small', 'Medium', 'Large'];
  packages = ['Box', 'Bag', 'Packet'];
  units = ['Piece', 'Kg', 'Meter'];

  articleNo!: string;
  color!: string;
  width!: string;
  package!: string;
  unit!: string;
  weight!: number;
  gsm!: number;
  isAvailable: boolean = false;

  onSubmit() {
    const newGoods = {
      articleNo: this.articleNo,
      color: this.color,
      width: this.width,
      package: this.package,
      unit: this.unit,
      weight: this.weight,
      gsm: this.gsm,
      isAvailable: this.isAvailable,
    };

    this.goodsList.push(newGoods);
    // Reset form
    this.articleNo = '';
    this.color = '';
    this.width = '';
    this.package = '';
    this.unit = '';
    this.weight = 0;
    this.gsm = 0;
    this.isAvailable = false;

  
  }
}
