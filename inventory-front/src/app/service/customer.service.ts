import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  constructor() { }

  addCustomer(customer: any) {
    this.customers.push(customer);
  }

  get getAllCustomers() {
    return this.customers;
  }
}
