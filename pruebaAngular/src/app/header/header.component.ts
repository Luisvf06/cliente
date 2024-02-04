import {Component, AfterContentInit, AfterViewChecked, AfterViewInit,  OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterContentInit,AfterViewInit, OnDestroy{

  constructor(){
    console.log('constructor ejecutado')
  }

  ngOnInit(): void {
    console.log('NgOnInit ejecutado')
  }

  ngAfterContentInit(): void {
    console.log('nGAfterContentInit ejecutado')
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit ejecutado')
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy ejecutado')
  }
}
