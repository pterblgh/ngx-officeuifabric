import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FabricPersonaComponent } from "./persona.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricPersonaComponent
  ],
  exports: [
    FabricPersonaComponent
  ]
})
export class FabricPersonaModule {}
