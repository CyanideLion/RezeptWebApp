import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ThemeToggleComponent} from "./theme-toggle/theme-toggle.component";
import {ThemeService} from "./theme.service";
import {LoginButtonComponent} from "./login-button/login-button.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, ThemeToggleComponent, LoginButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'recipeCollection';

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.themeService.setDarkMode(prefersDark);
  }
}
