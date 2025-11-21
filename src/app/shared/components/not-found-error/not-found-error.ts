import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'not-found-error',
  imports: [],
  templateUrl: './not-found-error.html',
})
export class NotFoundError {
  location=inject(Location)

  goBack(){
    this.location.back();
  }
}
