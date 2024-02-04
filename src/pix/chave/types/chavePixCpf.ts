import { ChavePix, ChavePixProps } from "../chavePix";

/**
 * 
 * @class ChavePixCpf
 * @classdesc Implements CPF chave pix, validates based on https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key cpf regex
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixCPF extends ChavePix {

  //Cpf validation regex
  static CPF_PATTERN = new RegExp(/^[0-9]{11}$/)

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
    const regexCheck = this.CPF_PATTERN.test(treatedValue)

    if (!regexCheck) {
      throw new Error("Given cpf isn't vallid.")
    }

    return {value: treatedValue}
  }

  /**
   * @param {ChavePixProps} props 
   * @returns {ChavePixCPF}
   *
   * Creates chave pix cpf, with validation input
   */
  public static create(props: ChavePixProps): ChavePixCPF {

    //Apply validation logic
    const treatedProps = this.domainSpecificValidation(props)
    return new ChavePixCPF(treatedProps)
  }

}
