import { Component } from '@angular/core';
import { ProductionLinePageComponent } from './page/production-line-page/production-line-page.component';
import { NavigationComponent } from './common/component/layout/navigation/navigation.component';
import { HeaderComponent } from './common/component/layout/header/header.component';

@Component({
  imports: [HeaderComponent, NavigationComponent, ProductionLinePageComponent],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {}
