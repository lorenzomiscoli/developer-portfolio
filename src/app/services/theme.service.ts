import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Mode } from "../components/theme-switcher/theme-options";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  public currentValue = new BehaviorSubject<Mode>(this.getThemePreference());

  private isDarkPreference(): boolean {
    const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
    if (deviceMode.matches) {
      return true;
    }
    return false;
  }

  private setLightTheme(): void {
    document.body.classList.remove(Mode.DARK);
    document.body.classList.add(Mode.LIGHT);
  }

  private setDarkTheme(): void {
    document.body.classList.remove(Mode.LIGHT);
    document.body.classList.add(Mode.DARK);
  }

  private setTheme(name: Mode) {
    if (this.checkTheme(name) === Mode.LIGHT) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
    this.currentValue.next(name);
  }

  public checkTheme(name: Mode): Mode {
    if (name === Mode.AUTO) {
      if (this.isDarkPreference()) {
        return Mode.DARK;
      } else {
        return Mode.LIGHT;
      }
    }
    else if (name === Mode.DARK) {
      return Mode.DARK;
    } else {
      return Mode.LIGHT;
    }
  }

  public initTheme(): void {
    const mode = this.getThemePreference();
    this.setTheme(mode);
  }

  public saveThemePreference(name: Mode): void {
    this.setTheme(name);
    localStorage.setItem('theme', name);
  }

  public getThemePreference(): Mode {
    let theme: string | null = localStorage.getItem('theme');
    if (!theme) {
      if (this.isDarkPreference()) {
        return Mode.DARK;
      } else {
        return Mode.LIGHT;
      }
    }
    return theme as Mode;
  }

}
