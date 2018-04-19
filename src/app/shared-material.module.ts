import { NgModule } from "@angular/core";
import { MatTableModule, 
    MatButtonModule, 
    MatCheckboxModule,
     MatRadioModule, 
     MatDialogModule,
      MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatInputModule
    ],
    exports: [MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatInputModule]
})
export class SharedMaterialModule {
}