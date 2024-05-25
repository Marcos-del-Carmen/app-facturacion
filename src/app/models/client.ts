import { Address } from "./address";
import { Company } from "./company";
import { Items } from "./items";

export class Client {
    name!: string;
    lastname!: string;
    address!: Address;
    company!: Company;
    items!: Items[];
}