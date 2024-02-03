import { v4 as uuid } from "uuid";
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    OneToMany,
    JoinColumn,
} from "typeorm";

@Entity("order")
export class OrderProduct {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @CreateDateColumn({ name: "created_at" })
    createAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor() {
        if (!this.id){
            this.id = uuid()
        }
    }
}