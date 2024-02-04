import { CHAVE_PIX_TYPES } from "./chavePixUtils"

export type ChavePixProps = {
  value:string
}

/**
 * 
 * @class ChavePix
 * @classdesc Base class that guarantees basic validation premisses.
 * See https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Regulamento_Pix/X_ManualOperacionaldoDICT.pdf#page=14 and https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html
 * Should be extended and implemented by specific Chave pix types
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export abstract class ChavePix {

  abstract value: string // Value of the chave
  abstract type: CHAVE_PIX_TYPES // Type of the cgave
}
