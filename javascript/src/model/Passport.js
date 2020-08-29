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
 * The Passport model module.
 * @module model/Passport
 * @version 1.5
 */
class Passport {
    /**
     * Constructs a new <code>Passport</code>.
     * @alias module:model/Passport
     */
    constructor() { 
        
        Passport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Passport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Passport} obj Optional instance to populate.
     * @return {module:model/Passport} The populated <code>Passport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Passport();

            if (data.hasOwnProperty('Mrz1')) {
                obj['Mrz1'] = ApiClient.convertToType(data['Mrz1'], 'String');
            }
            if (data.hasOwnProperty('Mrz2')) {
                obj['Mrz2'] = ApiClient.convertToType(data['Mrz2'], 'String');
            }
            if (data.hasOwnProperty('Number')) {
                obj['Number'] = ApiClient.convertToType(data['Number'], 'String');
            }
            if (data.hasOwnProperty('DayOfExpiry')) {
                obj['DayOfExpiry'] = ApiClient.convertToType(data['DayOfExpiry'], 'Number');
            }
            if (data.hasOwnProperty('MonthOfExpiry')) {
                obj['MonthOfExpiry'] = ApiClient.convertToType(data['MonthOfExpiry'], 'Number');
            }
            if (data.hasOwnProperty('YearOfExpiry')) {
                obj['YearOfExpiry'] = ApiClient.convertToType(data['YearOfExpiry'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Line 1 of the passport MRZ.
 * @member {String} Mrz1
 */
Passport.prototype['Mrz1'] = undefined;

/**
 * Line 2 of the passport MRZ.
 * @member {String} Mrz2
 */
Passport.prototype['Mrz2'] = undefined;

/**
 * Passport Number.
 * @member {String} Number
 */
Passport.prototype['Number'] = undefined;

/**
 * Passport's Licence day of expiry of the individual to be verified.
 * @member {Number} DayOfExpiry
 */
Passport.prototype['DayOfExpiry'] = undefined;

/**
 * Passport's Licence month of expiry of the individual to be verified.
 * @member {Number} MonthOfExpiry
 */
Passport.prototype['MonthOfExpiry'] = undefined;

/**
 * Passport's Licence year of expiry of the individual to be verified.
 * @member {Number} YearOfExpiry
 */
Passport.prototype['YearOfExpiry'] = undefined;






export default Passport;

