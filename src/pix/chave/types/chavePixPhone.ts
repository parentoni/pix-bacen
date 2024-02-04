import { ChavePix, ChavePixProps } from "../chavePix";

/**
 * 
 * @class ChavePixPhone
 * @classdesc Implements phone numbers chave pix. Follow E.164 convention, and assumes that every coutry phone number can register in DICT.
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixPhone extends ChavePix {

  static E164_PATTERN = new RegExp(/^\+[1-9]\d{1,14}$/)

  /**
   * Ensures that Chave pix is created by create method
   */
  private constructor(props: ChavePixProps){
    super(props)
  }

  /**
   * Apply domain specific validation
   */
  private static domainSpecificValidation(props: ChavePixProps): ChavePixProps {

    this.validate(props) // General validation

    //Replace all non numeric values, and adds + att the beggining of the number
    const treatedValue = "+" + props.value.replace(/\D/g, "")

    const regexResult = this.E164_PATTERN.test(treatedValue)

    if (!regexResult) {
      throw new Error("Chave pix of type phone is invalid")
    }


    return {value: treatedValue}
  }
  /**
   * Create Chave Pix Phone with validation
   * */
  static create(props: ChavePixProps): ChavePixPhone {
    //Apply validation
    const treatedProps = this.domainSpecificValidation(props)

    return new ChavePixPhone(treatedProps)
  }

}
