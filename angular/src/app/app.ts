import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // নতুন যোগ

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,HttpClientModule],
   standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
