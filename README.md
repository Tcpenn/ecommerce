# E-commerce Back End

## Description
    This is a RESTful api that uses express.js along with a MySQL database and the sequelize ORM. The database is populated with data associated with an E-commerce store. This application allows the user to preform crud routes to all databases. 
## Table of Contents

* [Installation and Setup](#installation)
* [License](#license)
* [Credits](#credits)
* [Authors](#authors)
* [Questions](#questions)

## Installation and usage <a id = "installation"></a>
    Since this application is not deployed to the web it will need to run off the server in your local machine. 

    First things first, you will need to install which you can do with the link [here](https://nodejs.org/en/). this application also requires MySQL installed, which you can do [here](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide). Then in the command line go to the cloned repo and install all the required dependencies with the command 'npm install'. Then to test the api routes its recommended to have the application Insomnia installed which can be installed [here](https://insomnia.rest/download).

    Then when all of the required installation is done you'll need to create a filed called .env, then enter the following values with your own credentials:

    * DB_NAME='ecommerce_db'
    * DB_USER='*your MySql username here*'
    * DB_PW='*your MySql password here*'
## Routes 

    These routes make use if the core application to preform the CRUD  

### Category Routes
    
    * `GET /categories` - Returns a list of all categories.

    * `GET /categories/:id` - Returns a single category with the id passed as a parameter.

    * `POST /categories` - Creates a new category with the id passed as a parameter.
    
    * `PUT /categories/:id` - Updates an existing category. The request body should be formatted the same as `POST /categories`.

    * `DELETE /categories/:id` - Deletes a category with the id passed as a parameter.

### Product Routes

    * `GET /products` - Returns a list of all products.

    * `GET /products/:id` - Returns a single product with the id passed as a parameter.

    * `POST /products` - Creates a new Product with the id passed as a parameter.

    * `PUT /products/:id` - Updates an existing product. The request body should be formatted the same as `POST /products`.

    * `DELETE /products/:id` - Deletes a product with the id passed as a parameter.

### Tag routes

    * `GET /tags` - Returns a list of all tags.

    * `GET /tags/:id` - Returns a single tag with the id passed as a parameter.

    * `POST /tags` - Creates a new tag with the id passed as a parameter. 

    * `PUT /tags/:id` - Updates an existing tag. The request body should be formatted the same as `POST /tags`.

    * `DELETE /tags/:id` - Deletes a tag with the id passed as a parameter.

## License

    [MIT](./LICENSE.txt)

## Credits

Starter Code 

    * [UCF Coding Bootcamp](https://github.com/coding-boot-camp/fantastic-umbrella)

Technologies

    * [Node.js](https://nodejs.org/en/)
    * [MySQL](https://www.mysql.com/)

Dependencies

    * [Express](https://www.npmjs.com/package/express)
    * [Sequelize](https://sequelize.org/)
    * [Node MySQL 2](https://www.npmjs.com/package/mysql2?__cf_chl_captcha_tk__=pmd_D_9ZYQ1MY_s2zyp9_cyigjzi9F6rp.HQGrKz3R3K9gA-1632161698-0-gqNtZGzNAuWjcnBszQfR)
    * [dotenv](https://www.npmjs.com/package/dotenv)

## Authors

    Tyler Pennington

## Questions

    * [GitHub](https://github.com/tcpenn)
    * [Email](mailto:tcpenn1026@gmail.com)

## Road-map

    My plans for this project is to fix any bugs their may be and create the walk-through video to better explain how the program works
