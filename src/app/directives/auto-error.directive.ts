import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';
import { FormGroup, NgControl } from '@angular/forms';

@Directive({
  selector: '[appAutoError]'
})
export class AutoErrorDirective implements AfterViewInit {
  @Input('appAutoError') formGroup!: FormGroup;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.formGroup) {
      console.error('appAutoError: No FormGroup provided!');
      return;
    }

    // Find all form controls inside the form
    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      if (control) {
        const inputElement = this.el.nativeElement.querySelector(`[formControlName="${field}"]`);

        if (inputElement) {
          const errorDiv = this.renderer.createElement('div');
          this.renderer.setStyle(errorDiv, 'color', 'red');

          control.statusChanges.subscribe(() => {
            errorDiv.innerHTML = '';

            if (control.invalid && (control.dirty || control.touched)) {
              const errors = control.errors;
              if (errors?.['required']) {
                errorDiv.innerHTML = 'This field is required';
              }
              if (errors?.['pattern']) {
                errorDiv.innerHTML = 'Invalid format';
              }
              if (errors?.['minlength']) {
                errorDiv.innerHTML = `Minimum length: ${errors['minlength'].requiredLength}`;
              }
            }
          });

          this.renderer.appendChild(inputElement.parentNode, errorDiv);
        }
      }
    });
  }
}
