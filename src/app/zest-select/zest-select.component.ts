import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';
import $ from 'jquery';
@Component({
  selector: 'app-zest-select',
  templateUrl: './zest-select.component.html',
  styleUrls: ['./zest-select.component.scss']
})
export class ZestSelectComponent implements OnInit {
  @Input() title;
  @Input() show: boolean;
  @Input() dataSource: any;
  @Input() colName: any;
  @Output() selectedBank = new EventEmitter();
  @Output() closecusModal = new EventEmitter();
  public activeModal = false;
  searchString: any = '';
  selectedItem: any = '';
  indexvalue = -1;
  height = 0;
  lHeight = 0;
  uHeight = 0;
  currentBanksList = [];
  // isMobile =  false;
  constructor() { }

  ngOnInit() {
    this.currentBanksList = this.dataSource;
    console.log(this);
    if (this.show) {
      this.opencusModal();
    }
    // if (window.screen.width <= 600) {
    //   this.isMobile = true;
    // }
  }

  filterList() {
      this.currentBanksList = _.filter(this.dataSource, (o) => {
        return o[this.colName].toLowerCase().indexOf(this.searchString.toLowerCase()) > -1;
        // return _.includes(o.name.toLocaleLowerCase(), this.searchString.toLocaleLowerCase());
       })
   }
   selectedFunc(cuntry, index) {
     this.selectedItem = cuntry;
    //  this.show = !this.show;
     this.selectedBank.emit(this.selectedItem);
     console.log(this.selectedItem);
     this.indexvalue = index;
     this.activeModal = false  ;
     document.getElementById('searchText').focus();
   }
   arrowFunc(e) {
    // let containerHeight: any;
    // containerHeight = document.getElementsByClassName('bank-list')[0].clientHeight;
    // let listHeight: any;
    // listHeight = document.getElementsByClassName('list-item')[0].clientHeight;
    // if (e.keyCode === 40) {
    //   this.height = this.height + listHeight;
    //   if (this.height > containerHeight) {
    //     this.lHeight = this.lHeight + listHeight;
    //     document.getElementsByClassName('bank-list')[0].scrollTo(0, this.lHeight);
    //   }
    //   if (this.indexvalue >= (this.currentBanksList.length - 1) ) {
    //     this.indexvalue = this.currentBanksList.length - 1;
    //   } else {
    //     this.indexvalue++;
    //   }
    // } else if (e.keyCode === 38) {
    //   this.height = this.height - listHeight;
    //   if (this.height < containerHeight) {
    //     this.uHeight = this.uHeight - listHeight;
    //     document.getElementsByClassName('bank-list')[0].scrollTo(0, this.height - this.uHeight);
    //   }
    //   if ((this.indexvalue <= (this.currentBanksList.length - 1)) && (this.indexvalue !== 0) && this.currentBanksList.length !== 0) {
    //     this.indexvalue--;
    //   } else {
    //     this.indexvalue = 0;
    //   }
    // }



     let totalheight;
     let colheight;
     colheight = document.getElementsByClassName('list-item')[0].clientHeight;
     totalheight = document.getElementsByClassName('bank-list')[0].scrollHeight;
     if (e.keyCode === 40) {
       if (this.height < totalheight) {
        document.getElementsByClassName('bank-list')[0].scrollTo(0, this.height);
        this.height = this.height + colheight;
       }
       console.log(e.keyCode, this.indexvalue);
       if (this.indexvalue >= (this.currentBanksList.length - 1) ) {
        this.indexvalue = this.currentBanksList.length - 1;
       } else {
        this.indexvalue++;
       }
     } else if (e.keyCode === 38) {
      if (this.height >= 0) {
        document.getElementsByClassName('bank-list')[0].scrollTo(0, this.height);
        this.height = this.height - colheight;
       }
      console.log(e.keyCode, this.indexvalue);
      if ((this.indexvalue <= (this.currentBanksList.length - 1)) && (this.indexvalue !== 0) && this.currentBanksList.length != 0) {
        this.indexvalue--;
       } else {
        this.indexvalue = 0;
       }
     } else if (e.keyCode === 13) {
      this.selectedItem = document.querySelectorAll('.active')[0].innerHTML;
      this.selectedBank.emit(this.selectedItem);
      this.activeModal = false;
     }

   }
   opencusModal() {
    this.activeModal = true;
    setTimeout(() => {
      document.getElementById('searchText').focus();
    } , 0);
  }
  closecusmodal()   {
    this.activeModal = false;
    this.searchString = '';
    this.currentBanksList = this.dataSource;
    this.closecusModal.emit(this.activeModal);
  }

}
