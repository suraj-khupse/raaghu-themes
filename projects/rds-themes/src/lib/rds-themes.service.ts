import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdsThemesService  {

  public static defaultThemeMode = 'light';

  public get selectedThemeMode(): string {
    return RdsThemesService.defaultThemeMode;
  }

  public set selectedThemeMode(value: string) {
    RdsThemesService.defaultThemeMode = value;
    this.style.href = `./styles/${value}.scss`;
  }

  private readonly style: HTMLLinkElement;

  constructor(   
  ) {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    // if(RdsThemesService.defaultThemeMode!==undefined){
    //   this.style.href = `./styles/${this.selectedThemeMode}.scss`;
    // } 
   }

 

  set setThemeMode(name: any) {
    // RdsThemesService.defaultThemeMode = name;
    document.documentElement.setAttribute('theme', name);
  }
}

