# Employee API

This is my pet-project for store data about employees and departments with authorization for users.

## Database



#### Create schema
```
yarn create:db
```

#### Create tables
```
yarn migrate
```

To migrate database I use sequelize-cli library. More docs:
https://www.npmjs.com/package/sequelize-cli

To perform changes in db:

1. Edit/Add ./models.
2. To create migration files `yarn generate:migration <name_for_migration>`

### Use API

For start server `yarn start`
