import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdsThemesService implements OnInit {

  public static defaultTheme = 'default';
  public static defaultThemeMode = 'light';
  private readonly style: HTMLLinkElement;

  public get selectedTheme(): string {
    return RdsThemesService.defaultTheme;
  }

  public set selectedTheme(value: string) {
    RdsThemesService.defaultTheme = value;
  }

  public get selectedThemeMode(): string {
    return RdsThemesService.defaultThemeMode;
  }

  public set selectedThemeMode(value: string) {
    RdsThemesService.defaultThemeMode = value;
  }

  constructor() {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);
    console.log("Themes constructor: ", this.selectedTheme, this.selectedThemeMode);
  }

  public ngOnInit(): void {
    if (this.selectedTheme !== undefined) {
      this.style.href = `./styles/${this.selectedTheme}.scss`;
    }
    document.documentElement.setAttribute('theme', this.selectedThemeMode);
    console.log("Themes ngOnInit: ", this.selectedTheme, this.selectedThemeMode);
  }

  public setThemeMode(mode: any): void {
    this.selectedThemeMode = mode;
    document.documentElement.setAttribute('theme', mode);
    console.log("Themes setThemeMode: ", this.selectedTheme, this.selectedThemeMode);
  }

  public setTheme(theme: string): void {
    this.selectedTheme = theme;
    if (this.selectedTheme !== undefined) {
      this.style.href = `./styles/${this.selectedTheme}.scss`;
    }
    console.log("Themes setTheme: ", this.selectedTheme, this.selectedThemeMode);
  }

}

