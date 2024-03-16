import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

    private colors: string[] = ['red', 'green'];
  private currentColorIndex: number = 0;

  constructor(private el: ElementRef) {
    this.setBackgroundColor(this.colors[this.currentColorIndex]);
  }

  @HostListener('click') onClick() {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.setBackgroundColor(this.colors[this.currentColorIndex]);
  }

  private setBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
