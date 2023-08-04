import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, Route, provideRouter, withInMemoryScrolling } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { AboutComponent } from './layouts/about/about.component';
import { ServicesComponent } from './layouts/services/services.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

export const APP_DEPS = [CommonModule, HeaderComponent, LandingComponent, AboutComponent, ServicesComponent, ScrollTopComponent];

const routes: Route[] = [];

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature), importProvidersFrom([BrowserModule, BrowserAnimationsModule])],
};
