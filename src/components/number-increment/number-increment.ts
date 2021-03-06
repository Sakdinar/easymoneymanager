import { Component, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
//import { IONIC_DIRECTIVES } from 'ionic-angular';

/*
  Generated class for the NumberIncrement component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'nbrInc',
  templateUrl: 'number-increment.html'
})
export class NumberIncrement implements OnChanges{

  @Input() inputData: any;
  solde:number = 0;

  constructor(
    private cdRef:ChangeDetectorRef
  ) {
    //this.increment();
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log('simple change')
    this.solde = -0; // reset solde if input data === 0
    this.increment();
  }

  increment(){

    if(this.inputData){
      let fps = 1000 / 60,
          increment = (this.inputData / 1000) * fps;
      let timer = setInterval(() => {
        if(this.solde <= this.inputData-1) {
          this.solde += Math.round(increment);
        } else {
          if(Number.isInteger(parseFloat(this.inputData))){
            this.solde = parseFloat(this.inputData.toFixed(2))
          }
          else {
            this.solde = this.inputData.toFixed(2)
          }
          clearInterval(timer);
        }
        //  console.log(this.solde, this.inputData)
        /* Fix bug detect propreties Changes with setInterval */
        // this.cdRef.detectChanges() /*  detectChanges() cause error on longin user ??? */
        this.cdRef.markForCheck() // this on don't mek troubles..
      }, 1);
    }
  }

}
