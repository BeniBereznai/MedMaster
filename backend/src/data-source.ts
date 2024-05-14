import "reflect-metadata"
import { DataSource } from "typeorm"
import { Patient } from "./entity/patient"
import { Medrec } from "./entity/medrec"
import { Slicer } from "./entity/slicer"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "docdb",
    synchronize: true,
    logging: false,
    entities: [Patient,Medrec,Slicer],
    migrations: [],
    subscribers: [],
})
