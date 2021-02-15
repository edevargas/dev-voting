/**
 * Chek value min length
 * @param {string} value
 * @param {number} minValue  Min value
 */
export const checkMinLength = (value: string, minValue: number) => {
    return !(value.length <= minValue)
}
/**
 * Check value max length
 * @param {string} value
 * @param {number} maxValue Max value
 */
export const checkMaxLength = (value: string, maxValue: number) => {
    return !(value.length >= maxValue)
}
/**
 * Check valid pattern
 * @param {string} value
 * @param {RegExp} pattern
 */
export const checkPattern = (value: string, pattern: RegExp) => {
    return pattern.test(value)
}
