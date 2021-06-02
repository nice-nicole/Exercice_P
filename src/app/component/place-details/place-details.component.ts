import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  message = '';
  currentPlace: any;


  constructor(

    private placeService: PlaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {   }

  ngOnInit(): void {
    this.message= '';
    this.getPlace(this.route.snapshot.paramMap.get('id'));
  }

  getPlace(id: string | null):void{
    this.placeService.getOnePlace(id)
    .subscribe(
      place => {
        this.currentPlace =  place;
        console.log(place);
      },
      error => {
        console.log(error);
      });

  }

  updatePlace(): void {
    this.placeService.edit(this.currentPlace.id, this.currentPlace)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'the place have been updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePlace(): void {
    this.placeService.removeOnePlace(this.currentPlace.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/places']);
        },
        error => {
          console.log(error);
        });
  }

}
