import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Order } from "../orders/orders.entity";


@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column({ name: "is_active", default: true })
    isActive: boolean;

    @OneToMany(() => Order, (order) => order.user)
    @JoinColumn()
    order: Order;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor(){
        if(!this.id) {
            this.id = uuid()
        }
    }

}