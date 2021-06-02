import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
})
export class PlaceListComponent implements OnInit {
  places: any;
  currentPlace = null;
  index = -1;
  name = '';



  constructor(private placeService: PlaceService) {}

  totalLength: any;
  page:number=1;

  ngOnInit(): void {
    this.findAll();
  }



  findAll(): void {
    this.placeService.getPlaces().
      subscribe(
        places => {
          this.places = places;
          this.totalLength= places.length;
          console.log(places);
        },
        error => {
          console.log(error);
        }
      );
  }

  refresh():void{
    this.findAll();
    this.currentPlace = null;
    this.index= -1;

  }
  setCurrentPlace(place: null, index: any): void {
    this.currentPlace = place;
    this.index = index;
  }

  deleteAll(): void {
    this.placeService.remove()
      .subscribe(
        response => {
          console.log(response);
          this.findAll();
        },
        error => {
          console.log(error);
        });
  }

  searchPlace():void{
    this.placeService.searchByName(this.name)
    .subscribe(
      places=>{
        this.places = places;
        // console.log(places);
      },
      error => {
        console.log(error);
      }
    );
  }
}
