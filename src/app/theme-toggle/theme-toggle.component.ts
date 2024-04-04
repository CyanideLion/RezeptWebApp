import {Component} from '@angular/core';
import {ThemeService} from '../theme.service';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton
  ],
  template: `
    <button mat-icon-button (click)="toggleTheme()">
      <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
    </button>
  `,
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit() {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
}
