import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goods',
  imports: [CommonModule, FormsModule, HttpClientModule],
  standalone: true,
  templateUrl: './goods.html',
  styleUrl: './goods.css'
})
export class Goods implements OnInit {
  goodsList: any[] = [];
  colors = ['Red', 'Blue', 'Green'];
  widths = ['Small', 'Medium', 'Large'];
  packages = ['Box', 'Bag', 'Packet'];
  units = ['Piece', 'Kg', 'Meter'];
  
  // Form properties
  articleNo!: string;
  color!: string;
  width!: string;
  package!: string;
  unit!: string;
  weight!: number;
  gsm!: number;
  isAvailable: boolean = false;
  
  // API endpoint
  private apiUrl = 'https://your-api-endpoint.com/api/goods';
  
  // Constructor with HttpClient injection
  constructor(private http: HttpClient) {}

  // Initialize component and load data
  ngOnInit(): void {
    this.loadGoods();
  }

  // Method to load goods from API
  loadGoods(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.goodsList = data;
        console.log('Goods loaded successfully:', data);
      },
      error: (error) => {
        console.error('Error loading goods:', error);
        // Handle error (e.g., show user-friendly message)
      }
    });
  }

  // Method to add new goods via API
  onSubmit(): void {
 const newGoods = {
  tableName: "Goods",
  columnNames: "ArticleNo,Color,Width,Package,Unit,Weight,Gsm,IsAvailable",
  queryParams: 
    `ArticleNo=${this.articleNo},` +
    `Color=${this.color},` +
    `Width=${this.width},` +
    `Package=${this.package},` +
    `Unit=${this.unit},` +
    `Weight=${this.weight},` +
    `Gsm=${this.gsm},` +
    `IsAvailable=${this.isAvailable}`,
  whereParams: "" }
const headers = { 
  'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiVXNlck5hbWUiOiJ2bGluayIsImp0aSI6IjhiMTAzZjA0LTYwNzMtNDFmNy05NjE4LTBkNjkwMTY0NGQ1OCIsIm5iZiI6MTc1NjM2NjU0MiwiZXhwIjoxNzU2NDA5NzQyLCJpc3MiOiJzaHV2YS5jb20iLCJhdWQiOiJzaHV2YS5jb20ifQ.3VzMQ2adAAC5sNsOyaqnBSVPG8K3accelgZzmbmFKMQ`,
  'Content-Type': 'application/json'
};
    this.http.post("http://localhost:5077/api/MasterEntry/Insert", newGoods, { headers }).subscribe({
      
      
      
      next: (response) => {
        console.log('Goods added successfully:', response);
        // Add the new item to the local list
        this.goodsList.push(response);
        // Reset the form
        this.resetForm();
      },
      error: (error) => {
        console.error('Error adding goods:', error);
        // Handle error (e.g., show user-friendly message)
      }
    });
  }

  // Method to update existing goods
  updateGoods(id: string, updatedGoods: any): void {
    const updateUrl = `${this.apiUrl}/${id}`;
    
    this.http.put(updateUrl, updatedGoods).subscribe({
      next: (response) => {
        console.log('Goods updated successfully:', response);
        // Update the item in the local list
        const index = this.goodsList.findIndex(item => item.id === id);
        if (index !== -1) {
          this.goodsList[index] = response;
        }
      },
      error: (error) => {
        console.error('Error updating goods:', error);
        // Handle error
      }
    });
  }

  // Method to delete goods
  deleteGoods(id: string): void {
    const deleteUrl = `${this.apiUrl}/${id}`;
    
    this.http.delete(deleteUrl).subscribe({
      next: () => {
        console.log('Goods deleted successfully');
        // Remove the item from the local list
        this.goodsList = this.goodsList.filter(item => item.id !== id);
      },
      error: (error) => {
        console.error('Error deleting goods:', error);
        // Handle error
      }
    });
  }

  // Method to reset the form
  resetForm(): void {
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