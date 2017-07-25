import { Directive,
         Input,
         HostBinding,
         HostListener
 } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective {

@Input('sizer')
@HostBinding('style.width')
// color:string;
size:string;

@HostListener('click')
onEnter()
{
 this.size='200px';
}

@HostListener('mouseleave')
onLeave()
{
 this.size='500px';
}
 
  constructor() {
    this.size='900px';
    // this.color='red';
   }

}
