import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FoodInterface } from '../../models/food.interface';
import { QuickLunchService } from '../../services/quick-lunch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = [
    { title: "Burgers", cols: 2, rows: 1, type: 'burger' },
    { title: "Galettes/crêpes", cols: 2, rows: 1, type: 'galette' },
    { title: "Pizza", cols: 2, rows: 1, type: 'pizza' }
  ];

  burgers: FoodInterface[];
  pizzas: FoodInterface[];
  galettes: FoodInterface[];

  constructor(private quickLunchService: QuickLunchService) {}

  ngOnInit(): void {
    this.burgers = this.quickLunchService.getBurgers();
    this.pizzas = this.quickLunchService.getPizzas();
    this.galettes = this.quickLunchService.getGalettes();
  }


}


