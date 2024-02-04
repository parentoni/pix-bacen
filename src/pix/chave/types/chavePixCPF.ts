import { ChavePix, ChavePixProps } from "../chavePix";
import { CHAVE_PIX_TYPES } from "../chavePixUtils";

/**
 * 
 * @class ChavePixCPF
 * @classdesc Implements CPF chave pix, validates based on https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key cpf regex
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixCPF implements ChavePix {

  value: string
  type = CHAVE_PIX_TYPES.CPF
  //Cpf validation regex
  static CPF_PATTERN = new RegExp(/^[0-9]{11}$/)

  /**
   * @param {ChavePixProps} props 
   * Cretes valdiated cpf chave pix
   */
  constructor(props: ChavePixProps) {
    const treatedProps = ChavePixCPF.validate(props)
    this.value = treatedProps.value
  }

  /**
   * @param {ChavePixProps} props 
   * @returns {ChavePixProps} 
   *
   * Applies domain specific validation to input
   */
  private static validate(props: ChavePixProps): ChavePixProps {

    //Filter all non numeric values
    const treatedValue = props.value.replace(/\D/g, '')


    // Check pattern according to DICT's regulations
    const regexCheck = this.CPF_PATTERN.test(treatedValue)

    if (!regexCheck) {
      throw new Error("Given cpf isn't vallid.")
    }

    return {value: treatedValue}
  }

}
