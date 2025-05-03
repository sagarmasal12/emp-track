import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPdfComponent } from './print-pdf.component';

describe('PrintPdfComponent', () => {
  let component: PrintPdfComponent;
  let fixture: ComponentFixture<PrintPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
