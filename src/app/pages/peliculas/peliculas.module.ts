import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PeliculasPageRoutingModule } from './peliculas-routing.module';
import { PeliculasPage } from './peliculas.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasApiService } from 'src/app/services/peliculas-api.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PeliculasPage],
  providers: [PeliculasApiService]
})
export class PeliculasPageModule {}
