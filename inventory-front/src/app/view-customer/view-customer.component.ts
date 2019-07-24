import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getAllCustomers;
    console.log(this.customers);
  }

}
