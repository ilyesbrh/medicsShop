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
import { UserModel } from './userModel';

/**
 * login success response
 */
export interface LoginResponse { 
    jwt?: string;
    user: UserModel;
}