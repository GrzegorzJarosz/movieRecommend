import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatToolbarModule, MatMenuModule} from '@angular/material';

@NgModule({
    imports:[ MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatToolbarModule, MatMenuModule],
    exports:[ MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatToolbarModule, MatMenuModule]
})

export class MaterialModule{}
