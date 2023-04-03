import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../services/country-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public title: string = "Angular Country List"; 
  countries:any;
  constructor(private countryData:CountryDataService) { 
    this.countryData.countries().subscribe((data)=>{
      this.countries=data; 
    })
   }

  ngOnInit(): void {
  }

}
