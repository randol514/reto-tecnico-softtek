//Validations
import { isValidTelephone, onlyNumbers, isValidDNI, isValidRUC, isValidPassport } from '../../../lib/validations/validationRules'
import { ERROR_MESSAGES } from '../../../lib/validations/errorMessages'

export const formHomeValidation = (form) => {
  let errors = {}

  if (!form.typeDocument.trim()) {
    errors.typeDocument = ERROR_MESSAGES.required
  } else {
    if (form.typeDocument === "DNI" && !isValidDNI(form.document)) {
      errors.document = ERROR_MESSAGES.maxLength(8)
    }
    if (form.typeDocument === "RUC" && !isValidRUC(form.document)) {
      errors.document = ERROR_MESSAGES.maxLength(11)
    }
    if (form.typeDocument === "Pasaporte" && !isValidPassport(form.document)) {
      errors.document = "El pasaporte debe tener entre 6 y 12 caracteres"
    }
  }

  if (form.typeDocument.trim()) {
    if (!form.document.trim()) {
      errors.document = ERROR_MESSAGES.required
    } else if (!onlyNumbers(form.document)) {
      errors.document = ERROR_MESSAGES.invalidNumeric
    }
  }

  if (!form.telephone.trim()) {
    errors.telephone = ERROR_MESSAGES.required
  } else if (!isValidTelephone(form.telephone)) {
    errors.telephone = ERROR_MESSAGES.invalidTelephone
  }



  if (!form.politiesPrivacy) {
    errors.politiesPrivacy = ERROR_MESSAGES.requiredCheckbox
  }

  if (!form.politiesCommunications) {
    errors.politiesCommunications = ERROR_MESSAGES.requiredCheckbox
  }

  return errors
}
