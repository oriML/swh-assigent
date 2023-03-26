import { ModuleWithProviders, NgModule } from "@angular/core";
import { EnvironmentConfig, ENV_CONFIG } from "src/environments/environment-config.interface";

// http.module.ts
@NgModule({
  imports: []
})
export class HttpModule {
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,
      providers: [
        {
          provide: ENV_CONFIG,
          useValue: config
        }
      ]
    };
  }
}