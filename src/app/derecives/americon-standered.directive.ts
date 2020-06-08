import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAmericonStandered]'
})
export class AmericonStanderedDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') makeAmericanPhoneNo(){
    let val;
    const value = this.el.nativeElement.value;
    if (!Number.parseInt(value)){
      console.log('not a number');
      val = '';
    }else{
    val = '(' + value.slice(0, 3) + ')-' + value.slice(3, value.length);
    }
    this.el.nativeElement.value = val;
  }

}
