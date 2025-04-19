import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appAutoError]'
})
export class AutoErrorDirective implements OnInit {
  @Input('appAutoError') formGroup!: FormGroup;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.addErrorMessages();
  }

  private addErrorMessages() {
    if (!this.formGroup) return;

    Object.keys(this.formGroup.controls).forEach((key) => {
      const control = this.formGroup.get(key);
      if (control) {
        const inputField = this.el.nativeElement.querySelector(`[formControlName="${key}"]`);

        if (inputField) {
          const errorDiv = this.renderer.createElement('div');
          this.renderer.setStyle(errorDiv, 'color', 'red');
          this.renderer.setStyle(errorDiv, 'fontSize', '12px');
          this.renderer.setStyle(errorDiv, 'marginTop', '4px');

          this.renderer.listen(control, 'statusChanges', () => {
            if (control.invalid && (control.dirty || control.touched)) {
              const errorMessage = this.getErrorMessage(control);
              errorDiv.innerHTML = errorMessage;
              if (!inputField.parentNode.contains(errorDiv)) {
                this.renderer.appendChild(inputField.parentNode, errorDiv);
              }
            } else {
              if (inputField.parentNode.contains(errorDiv)) {
                this.renderer.removeChild(inputField.parentNode, errorDiv);
              }
            }
          });
        }
      }
    });
  }

  private getErrorMessage(control: AbstractControl): string {
    if (control.errors?.['required']) return 'This field is required.';
    if (control.errors?.['pattern']) return 'Invalid format.';
    if (control.errors?.['minlength']) return 'Minimum length not met.';
    return '';
  }
}
