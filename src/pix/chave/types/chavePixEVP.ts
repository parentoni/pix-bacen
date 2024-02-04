import { ChavePix, ChavePixProps } from "../chavePix";

/**
 * 
 * @class ChavePixEVP
 * @classdesc Implements EVP (AKA: random) chave pix, validates based on https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key EVP regex.
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixEVP extends ChavePix {

  //EVP validation regex. Note: Bacen's documentation show's incomplete regex.
  static EVP_PATTERN = new RegExp(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)

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
    const regexCheck = this.EVP_PATTERN.test(treatedValue)

    if (!regexCheck) {
      throw new Error("Given EVP isn't vallid.")
    }

    return {value: treatedValue}
  }

  /**
   * @param {ChavePixProps} props 
   * @returns {ChavePixEVP}
   *
   * Creates chave pix EVP, with validation input
   */
  public static create(props: ChavePixProps): ChavePixEVP {

    //Apply validation logic
    const treatedProps = this.domainSpecificValidation(props)
    return new ChavePixEVP(treatedProps)
  }

}
