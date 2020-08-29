/**
 * Trulioo SDK
 * Trulioo SDK 
 *
 * The version of the OpenAPI document: 1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Address model module.
 * @module model/Address
 * @version 1.5
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * @alias module:model/Address
     */
    constructor() { 
        
        Address.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('UnitNumber')) {
                obj['UnitNumber'] = ApiClient.convertToType(data['UnitNumber'], 'String');
            }
            if (data.hasOwnProperty('BuildingNumber')) {
                obj['BuildingNumber'] = ApiClient.convertToType(data['BuildingNumber'], 'String');
            }
            if (data.hasOwnProperty('BuildingName')) {
                obj['BuildingName'] = ApiClient.convertToType(data['BuildingName'], 'String');
            }
            if (data.hasOwnProperty('StreetName')) {
                obj['StreetName'] = ApiClient.convertToType(data['StreetName'], 'String');
            }
            if (data.hasOwnProperty('StreetType')) {
                obj['StreetType'] = ApiClient.convertToType(data['StreetType'], 'String');
            }
            if (data.hasOwnProperty('City')) {
                obj['City'] = ApiClient.convertToType(data['City'], 'String');
            }
            if (data.hasOwnProperty('Suburb')) {
                obj['Suburb'] = ApiClient.convertToType(data['Suburb'], 'String');
            }
            if (data.hasOwnProperty('StateProvinceCode')) {
                obj['StateProvinceCode'] = ApiClient.convertToType(data['StateProvinceCode'], 'String');
            }
            if (data.hasOwnProperty('PostalCode')) {
                obj['PostalCode'] = ApiClient.convertToType(data['PostalCode'], 'String');
            }
            if (data.hasOwnProperty('Address1')) {
                obj['Address1'] = ApiClient.convertToType(data['Address1'], 'String');
            }
            if (data.hasOwnProperty('AddressType')) {
                obj['AddressType'] = ApiClient.convertToType(data['AddressType'], 'String');
            }
            if (data.hasOwnProperty('StateProvince')) {
                obj['StateProvince'] = ApiClient.convertToType(data['StateProvince'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Flat/Unit/Apartment number of address
 * @member {String} UnitNumber
 */
Address.prototype['UnitNumber'] = undefined;

/**
 * House / Civic / Building number of address
 * @member {String} BuildingNumber
 */
Address.prototype['BuildingNumber'] = undefined;

/**
 * Name of building
 * @member {String} BuildingName
 */
Address.prototype['BuildingName'] = undefined;

/**
 * Street name
 * @member {String} StreetName
 */
Address.prototype['StreetName'] = undefined;

/**
 * Street type of address (Typically St, Rd etc)
 * @member {String} StreetType
 */
Address.prototype['StreetType'] = undefined;

/**
 * City
 * @member {String} City
 */
Address.prototype['City'] = undefined;

/**
 * Suburb / Subdivision / Municipality
 * @member {String} Suburb
 */
Address.prototype['Suburb'] = undefined;

/**
 * State or province of address. US sources expect 2 characters. Australian sources expect 2 or 3 characters.
 * @member {String} StateProvinceCode
 */
Address.prototype['StateProvinceCode'] = undefined;

/**
 * ZIP Code or Postal Code
 * @member {String} PostalCode
 */
Address.prototype['PostalCode'] = undefined;

/**
 * It can be used to pass a compiled address field instead of sending individual address attributes (such as UnitNumber, BuidlingNumber, BuildingName, StreetName and StreetType)
 * @member {String} Address1
 */
Address.prototype['Address1'] = undefined;

/**
 * Type of address
 * @member {String} AddressType
 */
Address.prototype['AddressType'] = undefined;

/**
 * State or province of address
 * @member {String} StateProvince
 */
Address.prototype['StateProvince'] = undefined;






export default Address;

