import { bootstrapApplication } from "@angular/platform-browser";
import { provideAuth0 } from "@auth0/auth0-angular";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-l7rpbrdb8ujbce0w.us.auth0.com',
      clientId: 'fLe8lsFAAXTBoeeCpeOiZm4APck0hS6K',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideHttpClient(),
    appConfig.providers
  ]
}).catch((err) => console.error(err));
