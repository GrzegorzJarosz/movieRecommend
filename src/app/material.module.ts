import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatToolbarModule, MatMenuModule, MatSnackBarModule} from '@angular/material';

@NgModule({
    imports:[ MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatToolbarModule, MatMenuModule, MatSnackBarModule],
    exports:[ MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatToolbarModule, MatMenuModule, MatSnackBarModule]
})

export class MaterialModule{}
