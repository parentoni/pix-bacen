import { ChavePix, ChavePixProps } from "../chavePix";
import { CHAVE_PIX_TYPES } from "../chavePixUtils";

/**
 * 
 * @class ChavePixCNPJ
 * @classdesc Implements CNPJ chave pix, validates based on https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key CNPJ regex
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixCNPJ implements ChavePix {

  value:string
  type = CHAVE_PIX_TYPES.CNPJ

  //CNPJ validation regex
  static CNPJ_PATTERN = new RegExp(/^[0-9]{14}$/)

  /**
   * @param {ChavePixProps} props 
   * Validate and creates new CNPJ pix chave
   */
  constructor(props: ChavePixProps) {
    
    const treatedProps = ChavePixCNPJ.validate(props)

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
    const regexCheck = this.CNPJ_PATTERN.test(treatedValue)

    if (!regexCheck) {
      throw new Error("Given CNPJ isn't vallid.")
    }

    return {value: treatedValue}
  }

}
