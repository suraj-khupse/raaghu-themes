import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdsThemesService implements OnInit {

  public static defaultThemeMode = 'light';
  // public readonly style: HTMLLinkElement;

  public get selectedThemeMode(): string {
    return RdsThemesService.defaultThemeMode;
  }

  public set selectedThemeMode(value: string) {
    RdsThemesService.defaultThemeMode = value;
    this.style.href = `./styles/${value}.scss`;
  }

  constructor(
    public style: HTMLLinkElement
  ) { }

  ngOnInit() {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    this.style.href = `./styles/${this.selectedThemeMode}.scss`;
    document.head.appendChild(this.style);
  }


  setThemeMode(name: any) {
    RdsThemesService.defaultThemeMode = name;
    document.documentElement.setAttribute('theme', name);
  }
}

