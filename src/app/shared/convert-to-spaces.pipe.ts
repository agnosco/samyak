import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertToSpacesPipe'
})

export class ConvertToSpacesPipe implements PipeTransform{

  transform(stringToTranform, characterToReplace){
      return stringToTranform.replace(characterToReplace, ' ');
  }
}
