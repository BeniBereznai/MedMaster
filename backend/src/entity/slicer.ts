import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Slicer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Taj: number

    @Column()
    lungscreen: Date

    @Column()
    prostatescreen: Date

    @Column()
    mamografScreen: Date

    @Column()
    CommonScreen: Date

}
