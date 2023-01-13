import { AuthManagerService } from './../globals/services/auth-manager.service';
import { PaginationModel } from './../globals/models/paginationModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductModel, ResponseModel } from '../globals/models/models';
import { map, timeout, catchError } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  categories = Object.values(ProductModel.CategoryEnum);

  selectedType = this.categories[0];

  search = '';

  pagination: PaginationModel = {
    limit: 10,
    page: 0
  }

  products: ResponseModel = {
    page: {
      limit: 10,
      page: 0,
      totalElements: 20,
      totalPages: 2
    },
    data: [
      { id: '1', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '2', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '3', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '4', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '5', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '6', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '7', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '8', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '9', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
      { id: '10', brand: 'DOLIPRANE', category: 'medicament', price: 200, therapeuticClass: 'General', imageUrl: '/assets/doliprane.jpg' },
    ]
  };

  constructor(private httpClient: HttpClient, private auth: AuthManagerService) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {

    this.products = await this.httpClient.post(environment.api + 'products' + this.selectedType, { search: this.search, }).pipe(timeout(2000)).toPromise().catch(v => this.products);
  }

  logout() {
    this.auth.logout();
  }

}
