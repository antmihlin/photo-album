# Mini photos app

It is Angular based photo collection application. It works with a mock api.
The API lacks such functionalities as search, pagination, count. Therefore these functionalities are implemented through Angular.

## Functionalities

 - Filter users
 - Chose user
 - Chose albums
 - Create new album - sends request to an API, though it is a fake API
 - Sort photos
 - Paginate photos - Angular pagination. In production should be paginated the request to an API.
 - View full size photo

## Structure

 --features
 ----albums.component
 ----album-create.component - album creation dialog
 ----users.component
 ----users-item.component
 ----photos.component
 ----photos-item.component
 ----photo-full.component - full photo dialog
 --services
 --pipes
 --models
 --pages

## Getting started

The application uses [Angular CLI](https://cli.angular.io/). Therefore it is easy to manage with a help of CLI commands. For more details refer to the docs.

Clone the repository. Then start terminal in the repository's directory.

    npm install
    ng serve
    

## Resources

 - [Angular](https://angular.io/)
 - [Angular CLI](https://cli.angular.io/)
 - [Angular Material](https://material.angular.io/components/categories)
 - [Angular Flex Layout](https://github.com/angular/flex-layout/wiki/API-Documentation)
 - [NGX Pagination](https://www.npmjs.com/package/ngx-pagination)
 - [JsonPlaceholder](http://jsonplaceholder.typicode.com/) - Mock API
