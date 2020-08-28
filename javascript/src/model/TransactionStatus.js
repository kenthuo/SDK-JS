/**
 * Trulioo_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TransactionStatus model module.
 * @module model/TransactionStatus
 * @version 1.0.0
 */
class TransactionStatus {
    /**
     * Constructs a new <code>TransactionStatus</code>.
     * Transaction Status
     * @alias module:model/TransactionStatus
     */
    constructor() { 
        
        TransactionStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionStatus} obj Optional instance to populate.
     * @return {module:model/TransactionStatus} The populated <code>TransactionStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionStatus();

            if (data.hasOwnProperty('TransactionId')) {
                obj['TransactionId'] = ApiClient.convertToType(data['TransactionId'], 'String');
            }
            if (data.hasOwnProperty('TransactionRecordId')) {
                obj['TransactionRecordId'] = ApiClient.convertToType(data['TransactionRecordId'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('UploadedDt')) {
                obj['UploadedDt'] = ApiClient.convertToType(data['UploadedDt'], 'Date');
            }
            if (data.hasOwnProperty('IsTimedOut')) {
                obj['IsTimedOut'] = ApiClient.convertToType(data['IsTimedOut'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Transaction ID of the transaction.
 * @member {String} TransactionId
 */
TransactionStatus.prototype['TransactionId'] = undefined;

/**
 * Transaction Record ID of the transaction available once the transaction has finished processing.
 * @member {String} TransactionRecordId
 */
TransactionStatus.prototype['TransactionRecordId'] = undefined;

/**
 * Status of the transaction. Possible Values: Uploading, Processing, Completed, InProgress, Failed, WaitAsync, ToBeResumed, Canceled, TimeoutCanceled. Call GetTransactionRecord when status changes to Completed, Failed, Canceled or TimeoutCanceled to get the verification results.
 * @member {String} Status
 */
TransactionStatus.prototype['Status'] = undefined;

/**
 * Uploaded date for transaction.
 * @member {Date} UploadedDt
 */
TransactionStatus.prototype['UploadedDt'] = undefined;

/**
 * Set to true when transaction has timed out.
 * @member {Boolean} IsTimedOut
 */
TransactionStatus.prototype['IsTimedOut'] = undefined;






export default TransactionStatus;
