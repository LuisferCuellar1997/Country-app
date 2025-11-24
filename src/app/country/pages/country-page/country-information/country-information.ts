import { Component, inject, input, signal, AfterViewInit } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as L from 'leaflet';
import { count } from 'rxjs';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-information.html',
})
export class CountryInformation {
  country = input.required<Country>();
  location = inject(Location);

  ngAfterViewInit(): void {
    const rawCoords: number[] | undefined = this.country().latLong as [number, number];
    console.log(rawCoords);

    if (!rawCoords || rawCoords.length !== 2) {
      console.error('Coordenadas inválidas');
      return;
    }

    const coords = rawCoords as [number, number];

    const map = L.map('map').setView(coords, 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 18,
    }).addTo(map);

    L.marker(coords).addTo(map).bindPopup('Ubicación seleccionada').openPopup();
  }

  goBack() {
    this.location.back();
  }
}
