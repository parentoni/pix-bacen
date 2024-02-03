export type ChavePixProps = {
  value: string
}

/**
 * 
 * @class ChavePix
 * @classdesc Base class that guarantees basic validation premisses.
 * See https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Regulamento_Pix/X_ManualOperacionaldoDICT.pdf#page=14
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export abstract class ChavePix {

  value: string
  /**
   * Chave pix constructor. Should be only be called by create method, thus, ensuring validation
   * */
  private constructor (props:ChavePixProps) {
    this.value = props.value
  }

  /*
  * Perfoms general validation on pix key.
  * */
  private validate(props: ChavePixProps): void {
    
    if (typeof props.value === 'undefined'){
      throw new Error("The chave pix cannot be undefined")
    }

    //Ensures that chave pix is between 1 and 77 chars. note: Bacen specification
    if (props.value.length > 0 && props.value.length <= 77) {
      throw new Error("The chave pix must be between 1 and 77 chars.")
    }

  }

  /**
   * Performs domain specific validation on pix key. (ex: Ensure that email is valid, etc.)
   * */
  abstract domainSpecificValidation(props: ChavePixProps) : void

  /**
   * Method to be called to create a pix key. SHOULD perform validation using validate and domainSpecificValidation.
   * */
  abstract create(props:ChavePixProps):void
}
