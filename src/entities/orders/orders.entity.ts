import { v4 as uuid } from "uuid";
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    OneToMany,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { User } from "../user/user.entity";
import { Products } from "../products/product.entity";

@Entity("order")
export class Order {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @ManyToOne(() => User, { eager: true })
    user: User;

    @ManyToOne(() => Products, (product) => product.order, { eager: true })
    @JoinColumn()
    products: Products;

    @CreateDateColumn({ name: "created_at" })
    createAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}