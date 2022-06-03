import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list',
})
export class ListPipe implements PipeTransform {
  transform(value: { id: any; name: string }[], ...args: unknown[]): string {
    return (
      value
        ?.map((item) => item.name)
        .slice(0, 1)
        .join(', ') || ''
    );
  }
}
