import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string): string {
    let parsedPassword = value[0]+value[1]+value[2]+value[3]+"...";
    return parsedPassword;
  }

}
