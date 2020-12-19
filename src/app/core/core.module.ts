import { LOCALE_ID, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationModule } from './translation.module';
import { BaseModule } from './base.module';


@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    TranslationModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: LOCALE_ID, useValue: 'de-DE' },
      ]
    };
  }
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
