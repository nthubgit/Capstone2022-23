# Capstone2022-23

Name: Tyler Nelson

## Capstone project for Software Development course.

This product demonstrates a PoC e-commerce website with mock functionality.
The purpose of the project is to enable me to get acquainted with the popular React and Spring Boot frameworks,
allowing me to bolster my portfolio and give me an edge in the job market. In addition, it is a culmination of my studies
where I will build a fully-functional full-stack web application.

### Main Features:

- Login
- Logout
- Register
- Authentication (JWT)
- Viewing products retrieved from an external API
- Searching for product retrieved from an external API
- Filtering products retrieved from an external API
- Product CRUD (mock)
- Review CRUD (mock)
- Viewing shopping cart (mock)
- Checking out shopping cart (mock)
- Sharing on social media
- ... and more


### User Interface:

The web application uses a simple design powered by Material UI. 
The application went through many iterations over 9 weeks, going from Bootstrap, Sass, react-strap,
elements of which of still persist in some parts of the design.


### Product Schedule:

With zero knowledge any of the frameworks I planned to use at the start of the project,
a great deal of time was spent learning the basics of each through lengthy Udemy courses, tutorials,
and mini projects before I understood enough of each to create the project I had in mind. In retrospect,
learning just React alone would have been a more time efficient approach.

#### Preparation Phase: 11/07/2022 ~ 12/16/2022

Learn basics of React using "The Complete React Developer Course (w Hooks and Redux)" course
Learn basics of Spring Boot using "The Complete Spring Boot Development Bootcamp" course
Various other YouTube tutorials, website tutorials, and learning resources

#### Execution Phase: 12/16/2022 ~ 1/13/2023

Pause to learn Firebase over holidays
Switch back to Spring Boot
Bring everything learned together while learning and integrating new techniques

#### User Stories:

1. As a user, I want to be able to register to create an account to view the website.
2. As a user, I want to be able to login to view the website so that I can access the content.
3. As a user, I want to be able to logout from the website so that I can end my session.
4. As a user, I want to be able to get a preview of the website without having to login.
5. As a user, I want to be able to browse through products so that I can see what I want to buy.
6. As a user, I want to be able to see product ratings so that I know what is popular.
7. As a user, I want to be able to filter products by category so that I can specify my interest.
8. As a user, I want to be able to search products by name so that I can specify my interest.
9. As a user, I want to be able to sort products by price so that I can find a bargain.
10. As a user, I want to be able to sort products by rating so that I know what is the most popular.
11. As a user, I want to be able to view product reviews to learn more about each product.
12. As a user, I want to be able to write product reviews so that I can tell others about a product.
13. As a user, I want to be able to edit my product review so that I can change my opinion.
14. As a user, I want to be able to delete my product review so that I can take back what I said.
15. As a user, I want to be able to add products to my shopping cart so that I can purchase them.
16. As a user, I want my information to persist through sessions.
17. As a user, I want to be able to view my shopping cart so that I see what I have added to it.
18. As a user, I want to be able to see the subtotal of the products in my shopping card so I know how much I have to pay.
19. As a user, I want to be able to remove products from my shopping cart so I don't have to buy them.
20. As a user, I want to be able to checkout the products in my shopping cart so that I can obtain them.
21. As a user, I want to be able to view my account details so that I can confirm them.
22. As a user, I want to be able to change my password so that I can be my secure.
23. As a user, I want to be able to delete my account so that I can protect my privacy.
24. As an admin, I want to be able to add new products to the site so that I can sell them.
25. As an admin, I want to be able to update products on the the site so that I can have sales.
26. As an admin, I want to be able to delete products on the site so that I don't sell what is out of production/stock.
27. As an admin, I want to be able to see reviews by a user so that I can moderate them.
28. As an admin, I want to be able to manage other users so that I can keep the site secure.
29. As an admin, I want to see statistics so that I can track trends.
30. As a user, I want to be able to share on social media so that I can share my experience.

Early layout, UML mockup: https://puu.sh/Jwzi4/5bf01c4f93.png



### Frameworks:

Spring Boot 2
Spring Security
React 14 -> 17


### Installation:

Download and extract.
Run command "yarn-start-dev" from the Powershell in the root "frontend" folder to run the frontend side at http://localhost:3000.
See "package.json" for a list of dependencies.
Run the backend side via your IDE of choice (I used IntelliJ), and it will run at http://localhost:8080.
PostgreSQL is used for the database. Import "capstoneDB_2023_01_13.json" for some sample data, or start anew.


### API: 

This project uses both the API from Spring Boot, and an external API known as DummyJSON for dummy product and cart data.
For DummyJSON API calls, refer to https://dummyjson.com/docs/products.

For the Local API, only requests made from http://localhost:3000 will be accepted by the server. 
To disable this, change http://localhost:3000 to * in the CrossOrigin params of each controller.
The system uses JWT tokens for authentication, and you must login to use most requests.

All local requests return a JSON.

POST /api/users/{userId}/reviews
Creates a review using userId as a foreign key.

GET /api/reviews/item/{itemId}
Retrieves all reviews with the matching itemId.

PUT /api/reviews/{id}
Updates a review with the given id. Can update reviewText and rating.

DELETE /reviews/{id}
Deletes a review with the given id.

POST /api/auth/signin
Logs a user in and gives them authentication. Takes username and password params.

POST /auth/signup
Registers a new user. Takes username, password, and email params. Automatically gives User role.

GET /api/users/{id}
Gets user by given ID.

PUT /api/users/{id}/
Updates the password of a user at the given id. Takes password param.

DELETE /api/users/{id}
Deletes the user at the given id.


### Known Bugs:

- Upon building the front end, dependency-related warnings will show in Powershell, but this does not hinder operation.
- Warnings regarding forwardRef or render updating will occasionally display, but they do not hinder operation.
- Trying to update password or delete user from the MyAccount page will result in a CORS policy error.
- Attempting to access a non-authorized page while logged out may not result in a successful redirect to /login due to some lifecycle processes.



### Roadmap:

- Fix up design, perhaps use a paid template.
- Consolidate design to only use MUI components wherever possible.
- Add pagination to Shop page.
- Remove redundant dependencies.
- Try to divide current React components into smaller components, and aim for more reuseability.
- Implement Swagger documentation.
- Implement front end, integration testing.
- Implement more backend-based validations to improve testing quality.
