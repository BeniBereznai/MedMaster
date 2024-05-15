import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Slicer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Taj: number

    @Column({type:'date'})
    lungscreen: Date

    @Column({type:'date'})
    prostatescreen: Date

    @Column({type:'date'})
    mamografScreen: Date

    @Column({type:'date'})
    CommonScreen: Date

}
