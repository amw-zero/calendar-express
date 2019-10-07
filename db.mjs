import { makeSqlRepository } from 'calendar-behavior/mod.babel.mjs';
import pgp from 'pg-promise';

let db = pgp()('postgres://alexweisberger:@localhost:5432/calendar');

let postgresDatastore = {
  async setup(query) {
    await db.none(query);
  },
  execute(query) {
    return db.any(query);
  }
};

let postgresRepository = makeSqlRepository(postgresDatastore);

export { postgresRepository };