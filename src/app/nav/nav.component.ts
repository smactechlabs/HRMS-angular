import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('mySidenav') mySidenavRef: ElementRef;
  mySidenav: Element;

  constructor() { }

  ngOnInit() {
    this.mySidenav = this.mySidenavRef.nativeElement;
    if (window.screen.availWidth < 768) {
      this.mySidenav.classList.remove("open");
      const wrappers = document.querySelectorAll('.wrapper');
      Array.from(wrappers).forEach(wrapper => wrapper.classList.remove("m250"));
    }
  }

  toggleNav() {
    this.mySidenav.classList.toggle("open");
    const wrappers = document.querySelectorAll('.wrapper');
    Array.from(wrappers).forEach(wrapper => wrapper.classList.toggle("m250"));
  }

}
