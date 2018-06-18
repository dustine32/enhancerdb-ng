import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { NoctuaContentComponent } from 'app/main/content/content.component';
import { NoctuaWelcomeModule } from 'app/main/content/welcome/welcome.module';

@NgModule({
    declarations: [
        NoctuaContentComponent
    ],
    imports: [
        RouterModule,

        NoctuaSharedModule,
        NoctuaWelcomeModule,
    ],
    exports: [
        NoctuaContentComponent
    ]
})
export class NoctuaContentModule {
}
