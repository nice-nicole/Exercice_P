import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.css']
})
export class PlaceCreateComponent implements OnInit {
  place = {
    name: '',
    address: '',
    telephone: '',
    description: ''
  };
  placeCreated = false;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
  }

createDb(): void {
  const data = {
    name:this.place.name,
    address: this.place.address,
    telephone: this.place.telephone,
    description: this.place.description

  };

  this.placeService.createDb(data)
  .subscribe(
    response => {
      console.log(response);
      this.placeCreated=true;
    },
    error => {
      console.log(error);
    }
  );
}

newPlace():void{
  this.placeCreated = false;
  this.place = {
    name:'',
    address:'',
    telephone:'',
    description:''
  }
}

}
