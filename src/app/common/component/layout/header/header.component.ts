import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderInfoSectionComponent } from './header-info-section/header-info-section.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderInfoSectionComponent, NgOptimizedImage],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
