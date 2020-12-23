import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Restaurant } from '../../types/restaurant';
import { APIService } from '../API.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  /* declare restaurants variable */
  restaurants: Array<Restaurant>;

  constructor(private api: APIService, public dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListRestaurants().then(event => {
      this.restaurants = event.items;
      this.cd.detectChanges();
    });

    /* subscribe to new restaurants being created */
    this.api.OnCreateRestaurantListener.subscribe( (event: any) => {
      const newRestaurant = event.value.data.onCreateRestaurant;
      this.restaurants = [newRestaurant, ...this.restaurants];
    });

    /* subscribe to new restaurants being updated */
    this.api.OnUpdateRestaurantListener.subscribe( (event: any) => {
      const updatedRestaurant = event.value.data.onUpdateRestaurant;
      this.restaurants = this.restaurants.map((restaurant) =>
        (restaurant.id === updatedRestaurant.id) ? updatedRestaurant : restaurant);
    });

    /* subscribe to new restaurants being deleted */
    this.api.OnDeleteRestaurantListener.subscribe( (event: any) => {
      const deletedRestaurant = event.value.data.onDeleteRestaurant;
      this.restaurants = this.restaurants.filter(({id}) => id !== deletedRestaurant.id);
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Create Restaurant'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.onCreate(result);
      }
    });
  }

  openEditDialog({ id, city, description, name }: Restaurant) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Edit Restaurant',
        city,
        description,
        name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.onUpdate({...result, id});
      }
    });
  }

  private onCreate(restaurant: Restaurant) {
    this.api.CreateRestaurant(restaurant).then(event => {
      console.log('item created!');
    })
    .catch(e => {
      console.log('error creating restaurant...', e);
    });
  }

  private onUpdate(restaurant: Restaurant) {
    this.api.UpdateRestaurant(restaurant).then(event => {
      console.log('item updated!');
    })
    .catch(e => {
      console.log('error updating restaurant...', e);
    });
  }

  public onDelete({id}: Restaurant) {
    const confirmed = confirm('Are you sure you want to delete the restaurant ?');

    if (confirmed) {
      this.api.DeleteRestaurant({ id }).then(event => {
        console.log('item updated!');
      })
      .catch(e => {
        console.log('error deleting restaurant...', e);
      });
    }
  }
}
