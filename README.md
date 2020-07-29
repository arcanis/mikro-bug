- Run `yarn install` (npm won't work)

- Run `yarn ts-node ./x`

```
DriverException: insert into `story` (`pages`, `uid`) values ({"initialized":true,"dirty":false}, 'foo') - SQLITE_ERROR: table story has no column named pages
    at SqliteExceptionConverter.convertException (/tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-core-virtual-5ea3ffef23/0/cache/@mikro-orm-core-npm-4.0.0-alpha.9-3132ec5780-681623c021.zip/node_modules/@mikro-orm/core/platforms/ExceptionConverter.js:8:16)
    at SqliteExceptionConverter.convertException (/tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-sqlite-virtual-e434e11246/0/cache/@mikro-orm-sqlite-npm-4.0.0-alpha.9-91b55cff37-2c095690e5.zip/node_modules/@mikro-orm/sqlite/SqliteExceptionConverter.js:46:22)
    at SqliteDriver.convertException (/tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-core-virtual-5ea3ffef23/0/cache/@mikro-orm-core-npm-4.0.0-alpha.9-3132ec5780-681623c021.zip/node_modules/@mikro-orm/core/drivers/DatabaseDriver.js:144:54)
    at /tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-core-virtual-5ea3ffef23/0/cache/@mikro-orm-core-npm-4.0.0-alpha.9-3132ec5780-681623c021.zip/node_modules/@mikro-orm/core/drivers/DatabaseDriver.js:148:24
    at SqliteDriver.nativeInsert (/tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-knex-virtual-d103a17370/0/cache/@mikro-orm-knex-npm-4.0.0-alpha.9-495fbc51d0-d35e1315bd.zip/node_modules/@mikro-orm/knex/AbstractSqlDriver.js:141:21)
    at ChangeSetPersister.persistEntity (/tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-core-virtual-5ea3ffef23/0/cache/@mikro-orm-core-npm-4.0.0-alpha.9-3132ec5780-681623c021.zip/node_modules/@mikro-orm/core/unit-of-work/ChangeSetPersister.js:33:19)
    at ChangeSetPersister.persistToDatabase (/tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-core-virtual-5ea3ffef23/0/cache/@mikro-orm-core-npm-4.0.0-alpha.9-3132ec5780-681623c021.zip/node_modules/@mikro-orm/core/unit-of-work/ChangeSetPersister.js:20:9)
    at UnitOfWork.commitChangeSet (/tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-core-virtual-5ea3ffef23/0/cache/@mikro-orm-core-npm-4.0.0-alpha.9-3132ec5780-681623c021.zip/node_modules/@mikro-orm/core/unit-of-work/UnitOfWork.js:266:9)
    at UnitOfWork.persistToDatabase (/tmp/tmp.CwgEwnrvEc/.yarn/$$virtual/@mikro-orm-core-virtual-5ea3ffef23/0/cache/@mikro-orm-core-npm-4.0.0-alpha.9-3132ec5780-681623c021.zip/node_modules/@mikro-orm/core/unit-of-work/UnitOfWork.js:394:13)

previous Error: insert into `story` (`pages`, `uid`) values ({"initialized":true,"dirty":false}, 'foo') - SQLITE_ERROR: table story has no column named pages
```
