import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './invoicedemo.component.html'
})
export class InvoiceDemoComponent implements OnInit {

    invoice: any;

    ngOnInit(): void {
        this.invoice = {
            number: 'I041987-12',
            customerId: 'C042009-03',
            date: new Date(2019, 8, 30),
            discount: 179.84,
            tax: 80.93,
            notes: 'Please pay within 30 days using the link in your invoice email.',
            billing: {
                name: 'Philip Sherman',
                line1: '42 Wallaby Way',
                line2: 'Sydney NSW 2774, Australia'
            },
            items: [
                { title: 'Services', description: 'Cost of various services.', quantity: 10, price: 55.00 },
                { title: 'Consulting', description: 'Consultant for your business.', quantity: 15, price: 75.00 },
                { title: 'Materiais', description: 'Cost of materials and supplies to complete job.', quantity: 1, price: 123.39 },
                { title: 'Fishbowl', description: '', quantity: 1, price: 8.00 }
            ]
        }
    }

    get subtotal() {
        return this.invoice.items.reduce((v: any, x: any) => v + x.quantity * x.price, 0);
    }

    get total() {
        return this.subtotal + this.invoice.tax - this.invoice.discount;
    }

}
