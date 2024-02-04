import { ChavePix, ChavePixProps } from "../chavePix";
import { CHAVE_PIX_TYPES } from "../chavePixUtils";

/**
 * 
 * @class ChavePixEVP
 * @classdesc Implements EVP (AKA: random) chave pix, validates based on https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key EVP regex.
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixEVP implements ChavePix {

  value: string;
  type = CHAVE_PIX_TYPES.EVP;
  //EVP validation regex. Note: Bacen's documentation show's incomplete regex.
  static EVP_PATTERN = new RegExp(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)

  /**
   * @param {ChavePixProps} props 
   * Create validated EVP key
   */
  constructor(props: ChavePixProps) {
    const validatedProps = ChavePixEVP.validate(props)
    this.value = validatedProps.value
  }

  /**
   * @param {ChavePixProps} props 
   * @returns {ChavePixProps} 
   *
   * Applies domain specific validation to input
   */
  private static validate(props: ChavePixProps): ChavePixProps {

    // Strip all spaces
    const treatedValue = props.value.replace(/\s/g, '')

    // Check pattern according to DICT's regulations
    const regexCheck = this.EVP_PATTERN.test(treatedValue)

    if (!regexCheck) {
      throw new Error("Given EVP isn't vallid.")
    }

    return {value: treatedValue}
  }


}
