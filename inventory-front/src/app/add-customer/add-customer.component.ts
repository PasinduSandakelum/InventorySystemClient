import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }
  onSubmit(customer) {
    this.customerService.addCustomer(customer.value);
    // console.log(customer.value);
  }
}
