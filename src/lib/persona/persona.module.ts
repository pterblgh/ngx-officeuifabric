import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricPersonaComponent } from './persona.component';
import { FabricPersonaPillComponent } from './persona-pill.component';
import { FabricPersonaService } from './persona.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FabricPersonaComponent,
    FabricPersonaPillComponent,
  ],
  exports: [
    FabricPersonaComponent,
    FabricPersonaPillComponent,
  ],
  providers: [
    FabricPersonaService,
  ],
})
export class FabricPersonaModule {
}
