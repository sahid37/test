import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNull',
})
export class ReplaceNullPipe implements PipeTransform {
  /**
   * Function to replace null values
   * @param { string } value value
   * @param { string } replacementText replacement text
   * @returns { string | null }
   */
  transform(value: any, replacementText: string = ''): any {
    if (typeof value == undefined || value === null) {
      return replacementText;
    }
    return value;
  }
}
