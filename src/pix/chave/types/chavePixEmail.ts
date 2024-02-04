import { ChavePix, ChavePixProps } from "../chavePix";

/**
 * 
 * @class ChavePixEmail
 * @classdesc Implements Email chave pix, validates based on https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key Email regex.
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixEmail extends ChavePix {

  //Email validation regex. Note: Bacen's documentation show's incomplete regex.
  static EMAIL_PATTERN = new RegExp(/^[a-z0-9.!#$&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*$/)

  /**
   * @param {ChavePixProps} props 
   * Requires user to use validated create method
   */
  private constructor(props: ChavePixProps) {
    super(props)
  }

  /**
   * @param {ChavePixProps} props 
   * @returns {ChavePixProps} 
   *
   * Applies domain specific validation to input
   */
  private static domainSpecificValidation(props: ChavePixProps): ChavePixProps {

    // Strip all spaces
    const treatedValue = props.value.replace(/\s/g, '')

    //Aplly genreal validation
    this.validate({value: treatedValue})

    // Check pattern according to DICT's regulations
    const regexCheck = this.EMAIL_PATTERN.test(treatedValue)

    if (!regexCheck) {
      throw new Error("Given Email isn't vallid.")
    }

    return {value: treatedValue}
  }

  /**
   * @param {ChavePixProps} props 
   * @returns {ChavePixEmail}
   *
   * Creates chave pix Email, with validation input
   */
  public static create(props: ChavePixProps): ChavePixEmail {

    //Apply validation logic
    const treatedProps = this.domainSpecificValidation(props)
    return new ChavePixEmail(treatedProps)
  }

}
