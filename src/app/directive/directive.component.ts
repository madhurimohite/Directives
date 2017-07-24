import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
 xyz: boolean;
  pqr: boolean;
name:string;
  a;
  b;
  constructor() { 
    this.a=true
    this.b=true
  }

  ngOnInit() {
  }

  otherFun() {
    this.xyz = !this.xyz;
    this.pqr = !this.pqr;
  }
}
