# October

Features: 


@ngrx/store             v6.1.2

@ngrx/effects           v6.1.2

@ngrx/entities          v6.1.2

@ngrx/router            v6.1.2

@ngrx/store-devtools    v6.1.2



@ngx-translate/core

@ngx-translate/http-loader


@angular/core           v7.1.0

@angular/forms          v7.1.0

  (ReactiveFormsModule)

@angular/material       v7.1.0

@angular/cli            v7.1.0


rxjs                    v6.3.3

typescript              v3.1.6


## Namespaces

Project is separated for structure:

```javascript
  "extension": {
     "feature": {
        "intention": {
          ["component[]"]
        }
      } 
  }
```


## Store 

For clear store purposes, all state parametres have to be done with @ngrx/entity. Every entity can be modified from extension component, or feature component.


## Development server

Clone and run API from Bosper [express-rest-api](https://github.com/Bosper/express-rest-api) and run `npm run dev`

After startup API, run October application `ng serve` for a dev server. Navigate to `http://localhost:4300/`.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Not implemented.
