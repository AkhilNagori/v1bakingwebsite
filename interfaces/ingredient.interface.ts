/**
 * A ingredient represents an ingredient of a recipe
 */
export interface Ingredient {
    /** Amount of type */
    amount?: number;

    /** Type of amount (e.q. 'EL') */
    type: string;

    /** Name of ingredient */
    name: string;

    /** Ref-link url of ingredient */
    ref?: string;

    /** Reference url of ingredient (e.q. 'carrot') */
    to?: string;
}