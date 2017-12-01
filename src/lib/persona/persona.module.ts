import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FabricPersonaComponent } from "./persona.component";
import { FabricPersonaPillComponent } from "./persona-pill.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricPersonaComponent,
    FabricPersonaPillComponent
  ],
  exports: [
    FabricPersonaComponent,
    FabricPersonaPillComponent
  ]
})
export class FabricPersonaModule { }
