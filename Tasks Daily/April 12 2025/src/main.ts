import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { MyModuleModule } from './app/my-module/my-module.module';

platformBrowserDynamic()
  .bootstrapModule(MyModuleModule)
  .catch((err) => console.error(err));
