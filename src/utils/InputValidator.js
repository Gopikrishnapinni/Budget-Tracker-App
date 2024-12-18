export class InputValidator {
  static isValidAmount(amount) {
    return !isNaN(amount) && amount > 0;
  }

  static isValidDescription(description) {
    return description && description.trim().length > 0;
  }
}