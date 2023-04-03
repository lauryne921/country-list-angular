import { Component } from '@angular/core';
import { CountryDataService } from './services/country-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-list';
  countries:any; 
  constructor(private countryData:CountryDataService)
  {
    this.countryData.countries().subscribe((data) => {
      console.warn("data", data); 
      this.countries=data; 
    })
  }
}
