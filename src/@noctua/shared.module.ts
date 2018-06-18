import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { NoctuaDirectivesModule } from '@noctua/directives/directives';
import { NoctuaPipesModule } from '@noctua/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        NoctuaDirectivesModule,
        NoctuaPipesModule,
        MaterialModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        NoctuaDirectivesModule,
        NoctuaPipesModule,
        MaterialModule
    ]
})
export class NoctuaSharedModule
{
}
