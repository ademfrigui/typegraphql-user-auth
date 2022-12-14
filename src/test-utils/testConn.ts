import { createConnection } from 'typeorm';

export const testConn = (drop: boolean = false) => {
    return createConnection({
        name: "default",
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "aazdazd858",
        database: "typegraphql-example-test",
        synchronize: drop,
        dropSchema: drop,
        logging: true,
        entities: [
            __dirname + "../entity/*.*"
        ]
    })
}