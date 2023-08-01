import { InMemoryScrollingFeature, InMemoryScrollingOptions, Route, withInMemoryScrolling } from "@angular/router";
import { LandingComponent } from "./layouts/landing/landing.component";
import { AboutComponent } from "./layouts/about/about.component";

export const routes: Route[] = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

export const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
