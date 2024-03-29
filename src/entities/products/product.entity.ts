import { v4 as uuid } from "uuid";
import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
} from "typeorm";
import { Order } from "../orders/orders.entity";


@Entity("products")
export class Products {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    description: string;

    @OneToMany(() => Order, (order) => order.products)
    order: Order;

    @Column("decimal", { precision: 7, scale: 2 })
    price: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}