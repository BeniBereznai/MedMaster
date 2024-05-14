import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Medrec } from "./medrec"
import { Slicer } from "./slicer"

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    BirthDate: Date

    @Column()
    Taj: number

    @Column()
    Gender: string

    @OneToMany(type => Patient, Patient => Patient.Taj)
    medrec: Medrec[];

    @OneToMany(type => Patient, Patient => Patient.Taj)
    slicer: Slicer[];

}
