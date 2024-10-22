import { NativeDateAdapter, DateAdapter } from '@angular/material/core';

export class CustomDateAdapter extends NativeDateAdapter {
  override parse(value: any): Date | null {
    if (typeof value === 'string') {
      const parts = value.split('/');
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Mês é zero-indexado
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
      }
    }
    return super.parse(value);
  }

  // Exibir no formato desejado
  override format(date: Date, displayFormat: Object): string {
    const day = this._to2digit(date.getDate());
    const month = this._to2digit(date.getMonth() + 1); // Mês é zero-indexado
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private _to2digit(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }
}
