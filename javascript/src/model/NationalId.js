/**
 * Trulioo SDK
 * Trulioo SDK 
 *
 * The version of the OpenAPI document: 1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NationalId model module.
 * @module model/NationalId
 * @version 1.4
 */
class NationalId {
    /**
     * Constructs a new <code>NationalId</code>.
     * @alias module:model/NationalId
     * @param _number {String} 
     * @param type {String} Supported Types: NationalID, Health, SocialService, TaxIDNumber.
     */
    constructor(_number, type) { 
        
        NationalId.initialize(this, _number, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _number, type) { 
        obj['Number'] = _number;
        obj['Type'] = type;
    }

    /**
     * Constructs a <code>NationalId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NationalId} obj Optional instance to populate.
     * @return {module:model/NationalId} The populated <code>NationalId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NationalId();

            if (data.hasOwnProperty('Number')) {
                obj['Number'] = ApiClient.convertToType(data['Number'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
            if (data.hasOwnProperty('DistrictOfIssue')) {
                obj['DistrictOfIssue'] = ApiClient.convertToType(data['DistrictOfIssue'], 'String');
            }
            if (data.hasOwnProperty('CityOfIssue')) {
                obj['CityOfIssue'] = ApiClient.convertToType(data['CityOfIssue'], 'String');
            }
            if (data.hasOwnProperty('ProvinceOfIssue')) {
                obj['ProvinceOfIssue'] = ApiClient.convertToType(data['ProvinceOfIssue'], 'String');
            }
            if (data.hasOwnProperty('CountyOfIssue')) {
                obj['CountyOfIssue'] = ApiClient.convertToType(data['CountyOfIssue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Number
 */
NationalId.prototype['Number'] = undefined;

/**
 * Supported Types: NationalID, Health, SocialService, TaxIDNumber.
 * @member {String} Type
 */
NationalId.prototype['Type'] = undefined;

/**
 * District that issued the ID.
 * @member {String} DistrictOfIssue
 */
NationalId.prototype['DistrictOfIssue'] = undefined;

/**
 * City that issued the ID.
 * @member {String} CityOfIssue
 */
NationalId.prototype['CityOfIssue'] = undefined;

/**
 * Province that issued the ID.
 * @member {String} ProvinceOfIssue
 */
NationalId.prototype['ProvinceOfIssue'] = undefined;

/**
 * County that issued the ID.
 * @member {String} CountyOfIssue
 */
NationalId.prototype['CountyOfIssue'] = undefined;






export default NationalId;

