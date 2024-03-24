import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'

})
export class AppComponent implements OnInit {
  title = 'InPay | A fintech feita para você';

  ngOnInit(): void {

  }
}
