import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormComponent,
    PageComponent,
    ErrorComponent,
    ItemsComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
