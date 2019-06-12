import { Component, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';
import $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterViewInit {
  title = 'custom-select';
  public showList = false;
  public selectedItem: any;
  datasource = [
    {name: 'Afghanistan', code: 'AF'},
    {name: 'bland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'clgeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    {name: 'kndorrA', code: 'AD'},
    {name: 'Angola', code: 'AO'},
    {name: 'dnguilla', code: 'AI'},
    {name: 'entarctica', code: 'AQ'},
    {name: 'Antigua and Barbuda', code: 'AG'},
    {name: 'lrgentina', code: 'AR'},
    {name: 'Armenia', code: 'AM'},
    {name: 'mruba', code: 'AW'},
    {name: 'Australia', code: 'AU'},
    {name: 'nustria', code: 'AT'},
    {name: 'ozerbaijan', code: 'AZ'},
    {name: 'Bahamas', code: 'BS'},
    {name: 'pahrain', code: 'BH'},
    {name: 'Banglaydesh', code: 'BD'},
    {name: 'qarbaduos', code: 'BB'},
    {name: 'relarus', code: 'BY'},
    {name: 'selgium', code: 'BE'},
    {name: 'telize', code: 'BZ'},
    {name: 'uenin', code: 'BJ'},
    {name: 'vermuda', code: 'BM'},
    {name: 'whutan', code: 'BT'},
    {name: 'xolivia', code: 'BO'},
    {name: 'yosnia and Herzegovina', code: 'BA'},
    {name: 'zotswana', code: 'BW'}
  ];
  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
  }
  open() {
    this.showList = true;
  }
  close(status) {
    this.showList = status;
    // console.log(this.showList);
  }
  selectedbank(item) {
    this.selectedItem = item;
    this.showList = false;
}
}
