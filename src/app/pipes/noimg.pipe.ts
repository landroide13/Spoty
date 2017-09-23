import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg'
})
export class NoimgPipe implements PipeTransform {

  transform(value: any[]): string {

    let noimage:string = "assets/img/noimage.png";

    if(!value){
      return noimage;
    }

      return (value.length > 0) ? value[1].url : noimage;
  }

}
