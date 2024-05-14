import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Medrec {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Taj: number

    @Column()
    MedicalRecords: string;

}
