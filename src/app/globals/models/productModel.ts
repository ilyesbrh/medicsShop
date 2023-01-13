/**
 * ATOM
 * ATOM project backned api specification
 *
 * OpenAPI spec version: 1.0.8
 * Contact: ilies.bourouh@groupehydrapharm.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ProductModel { 
    id?: string;
    price?: number;
    category?: ProductModel.CategoryEnum;
    brand?: string;
    therapeuticClass?: string;
    imageUrl?: string;
    tags?: Array<string>;
}
export namespace ProductModel {
    export type CategoryEnum = 'invoices' | 'transactions' | 'assets';
    export const CategoryEnum = {
        Invoices: 'invoices' as CategoryEnum,
        Transactions: 'transactions' as CategoryEnum,
        Assets: 'assets' as CategoryEnum
    };
}