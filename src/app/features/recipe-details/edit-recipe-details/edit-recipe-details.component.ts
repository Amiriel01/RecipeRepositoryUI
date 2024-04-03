import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-recipe-details',
  templateUrl: './edit-recipe-details.component.html',
  styleUrls: ['./edit-recipe-details.component.css']
})
export class EditRecipeDetailsComponent implements OnInit, OnDestroy{

  id: string | null = null;
  routeSubscription?: Subscription;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
