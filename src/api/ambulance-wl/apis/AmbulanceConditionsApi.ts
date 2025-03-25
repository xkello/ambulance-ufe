/* tslint:disable */
/* eslint-disable */
/**
 * Waiting List Api
 * Ambulance Waiting List management for Web-In-Cloud system
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xkello@stuba.sk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Condition,
} from '../models';
import {
    ConditionFromJSON,
    ConditionToJSON,
} from '../models';

export interface GetConditionsRequest {
    ambulanceId: string;
}

/**
 * AmbulanceConditionsApi - interface
 * 
 * @export
 * @interface AmbulanceConditionsApiInterface
 */
export interface AmbulanceConditionsApiInterface {
    /**
     * By using ambulanceId you get list of predefined conditions
     * @summary Provides the list of conditions associated with ambulance
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceConditionsApiInterface
     */
    getConditionsRaw(requestParameters: GetConditionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Condition>>>;

    /**
     * By using ambulanceId you get list of predefined conditions
     * Provides the list of conditions associated with ambulance
     */
    getConditions(requestParameters: GetConditionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Condition>>;

}

/**
 * 
 */
export class AmbulanceConditionsApi extends runtime.BaseAPI implements AmbulanceConditionsApiInterface {

    /**
     * By using ambulanceId you get list of predefined conditions
     * Provides the list of conditions associated with ambulance
     */
    async getConditionsRaw(requestParameters: GetConditionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Condition>>> {
        if (requestParameters.ambulanceId === null || requestParameters.ambulanceId === undefined) {
            throw new runtime.RequiredError('ambulanceId','Required parameter requestParameters.ambulanceId was null or undefined when calling getConditions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/waiting-list/{ambulanceId}/condition`.replace(`{${"ambulanceId"}}`, encodeURIComponent(String(requestParameters.ambulanceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ConditionFromJSON));
    }

    /**
     * By using ambulanceId you get list of predefined conditions
     * Provides the list of conditions associated with ambulance
     */
    async getConditions(requestParameters: GetConditionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Condition>> {
        const response = await this.getConditionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
