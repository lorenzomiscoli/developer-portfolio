import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ThemeService } from "../../services/theme.service";
import { ThemeOption, Mode, themeOptions } from "./theme-options";
import { THEME_SWITCHER_DEPS } from "./theme-switcher.dependencies";

@Component({
  selector: "app-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.scss"],
  standalone: true,
  imports: [THEME_SWITCHER_DEPS]
})
export class ThemeSwitcherComponent implements OnInit, OnDestroy {
  public isMenuVisible = false;
  public selectedOption!: ThemeOption;
  public themeOptions!: ThemeOption[];
  @Input() togglerLabel!: string;
  private subscription!: Subscription;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeOptions = themeOptions;
    this.subscription = this.themeService.currentValue.subscribe((mode: Mode) => {
      this.selectedOption = this.getThemeOption(mode);
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  public updateTheme(name: Mode): void {
    this.selectedOption = this.getThemeOption(name);
    this.themeService.saveThemePreference(name);
    this.toggleMenu();
  }

  private getThemeOption(name: Mode): ThemeOption {
    return themeOptions.filter(value => value.name == name)[0];
  }

  public onClickOutside(): void {
    this.isMenuVisible = false;
  }

}
