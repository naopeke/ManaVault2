export interface Card  {
    card_id?: number,
    id?: string,
    user_id?: number,
    image_uris?: string,
    name?: string,
    printed_name?: string,
    type_line?: string,
    oracle_text?: string,
    printed_text?: string,
    color_identity?: string[],
    legalities?: any,
    prices?: number,
    set_name?: string,
    set_type?: string,
    quantity?: number,
    deckCard_id?: number
  }