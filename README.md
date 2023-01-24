# metamedland.com angular web application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Standalone Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Docker Build
Run `sudo docker build -t mml_app -f Dockerfile .'

#
## Project Rules
#
## Add New App Page (for example: sample)

### 1: creating expected page `module`:
`ng g m pages/sample --routing`
### 2: creating expected page view `component`:
`ng g c pages/sample/sample-view`
### 3: add corresponding route as `lazy` to `app.routes.ts` file like below.
`{
        path: 'sample',
        loadChildren: () => import('./pages/sample/sample.module').then(mod => mod.SampleModule)
}`

#
## notes:
add `encapsulation: ViewEncapsulation.None` to each component is `@Component` directive to work `TailwindCSS` correctly 
