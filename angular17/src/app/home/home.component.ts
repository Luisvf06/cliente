import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Use styleUrls instead of styleUrl
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Initialization logic here
  }
}


