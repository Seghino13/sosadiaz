import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  isConnected: boolean = true;
  showMessage: boolean = false;

  constructor(){
    this.getStatusNetwork();
    this.initializeNetworkListener();
  }

  async getStatusNetwork(){
    this.isConnected =  (await Network.getStatus()).connected;
  }


  async initializeNetworkListener() {
    Network.addListener('networkStatusChange', (status) => {
      this.showMessage = true;
      this.isConnected = status.connected;
      if (this.isConnected) {
        setTimeout(() => {
          this.isConnected = true;
          this.showMessage = false;
        }, 2000);
      }
    });
  }

}
