import { ChavePix, ChavePixProps } from "../chavePix";
import { CHAVE_PIX_TYPES } from "../chavePixUtils";

/**
 * 
 * @class ChavePixEmail
 * @classdesc Implements Email chave pix, validates based on https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key Email regex.
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixEmail implements ChavePix {

  value: string;
  type = CHAVE_PIX_TYPES.EMAIL

  //Email validation regex. Note: Bacen's documentation show's incomplete regex.
  static EMAIL_PATTERN = new RegExp(/^(?=.{1,77}$)[a-z0-9.!#$&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*$/)

  /**
   * @param {ChavePixProps} props 
   * Creates valdated email chave pix
   */
  constructor(props: ChavePixProps) {
    const validatedProps = ChavePixEmail.validate(props)
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

    //Aplly genreal validation

    // Check pattern according to DICT's regulations
    const regexCheck = this.EMAIL_PATTERN.test(treatedValue)

    if (!regexCheck) {
      throw new Error("Given Email isn't vallid.")
    }

    return {value: treatedValue}
  }

}
