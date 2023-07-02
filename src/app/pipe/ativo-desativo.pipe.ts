import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ativoDesativo'
})
export class AtivoDesativoPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Ativo' : 'Inativo';
  }
}
