import { ChavePix, ChavePixProps } from "../chavePix";

/**
 * 
 * @class ChavePixCNPJ
 * @classdesc Implements CNPJ chave pix, validates based on https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key CNPJ regex
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixCNPJ extends ChavePix {

  //CNPJ validation regex
  static CNPJ_PATTERN = new RegExp(/^[0-9]{14}$/)

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

    //Filter all non numeric values
    const treatedValue = props.value.replace(/\D/g, '')

    //Aplly genreal validation
    this.validate({value: treatedValue})

    // Check pattern according to DICT's regulations
    const regexCheck = this.CNPJ_PATTERN.test(treatedValue)

    if (!regexCheck) {
      throw new Error("Given CNPJ isn't vallid.")
    }

    return {value: treatedValue}
  }

  /**
   * @param {ChavePixProps} props 
   * @returns {ChavePixCNPJ}
   *
   * Creates chave pix CNPJ, with validation input
   */
  public static create(props: ChavePixProps): ChavePixCNPJ {

    //Apply validation logic
    const treatedProps = this.domainSpecificValidation(props)
    return new ChavePixCNPJ(treatedProps)
  }

}
