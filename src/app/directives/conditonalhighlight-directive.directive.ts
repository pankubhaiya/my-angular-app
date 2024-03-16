import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConditonalhighlightDirective]',
  standalone: true
})
export class ConditonalhighlightDirectiveDirective {
  @Input() isVisible: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnChanges() {
    this.toggleVisibility();
  }

  private toggleVisibility() {
    if (this.isVisible) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}
