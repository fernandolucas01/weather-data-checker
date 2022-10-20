import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { WeatherPanelComponent } from './weather-panel.component';

describe('WeatherPanelComponent', () => {
  let component: WeatherPanelComponent;
  let fixture: ComponentFixture<WeatherPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatProgressSpinnerModule,
        FormsModule
      ],
      declarations: [ WeatherPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
