import { ChavePix, ChavePixProps } from "../chavePix";
import { CHAVE_PIX_TYPES } from "../chavePixUtils";

/**
 * 
 * @class ChavePixPhone
 * @classdesc Implements phone numbers chave pix. Follow E.164 convention, and assumes that every coutry phone number can register in DICT.
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixPhone implements ChavePix {
  
  value: string;
  type = CHAVE_PIX_TYPES.PHONE

  //According https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html#tag/Key
  static E164_PATTERN = new RegExp(/^\+[1-9]\d{6,12}$/)

  /**
   * Creates validated phone chave pix 
   */
  constructor(props: ChavePixProps){
    const validatedProps = ChavePixPhone.validate(props)
    this.value = validatedProps.value
  }

  /**
   * Apply domain specific validation
   */
  private static validate(props: ChavePixProps): ChavePixProps {

    //Replace all non numeric values, and adds + att the beggining of the number
    const treatedValue = "+" + props.value.replace(/\D/g, "")
    const regexResult = this.E164_PATTERN.test(treatedValue)

    if (!regexResult) {
      throw new Error(`Chave pix of type phone is invalid ${treatedValue}`)
    }


    return {value: treatedValue}
  }

}
