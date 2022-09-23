import {Ingredient} from "./ingredient.interface";

/**
 * A recipe represents cooking or baking recipe returned by the API
 */
export interface Recipe {
    /** Unique id (e.q. 'spaghetti') */
    id: string;

    /** Defines the type of the recipe */
    type: RecipeType.cooking | RecipeType.baking | RecipeType.other;

    /** Title for h1 */
    title: string;

    /** Recipe author */
    author: string;

    /** Date of video upload */
    date: Date;

    /** TikTok video id */
    idTiktok: string;

    /** Instagram video id */
    idInstagram: string;

    /** YouTube video id */
    idYoutube: string;

    /** Short description of recipe */
    description: string;

    /** Tags for search */
    tags: (RecipeTag.swabian | RecipeTag.vegetarian | RecipeTag.vegan | RecipeTag.lactosefree | RecipeTag.meat | RecipeTag.fish)[];

    /** Cooking time */
    durationCook: number;

    /** Working time */
    durationWork: number;

    /** Difficulty of recipe */
    difficulty: RecipeDifficulty.easy | RecipeDifficulty.medium | RecipeDifficulty.hard;

    /** Portions of recipe */
    portions: number;

    /** Needed ingredients for recipe */
    ingredients: Ingredient[];

    /** Content includes the preparation of the recipe and tips */
    content: string;

}
/**
 * A Type represents the type of the recipe whether it is a baking or a cooking recipe
 */
export enum RecipeType {
    cooking = 'cooking-recipe',
    baking = 'baking-recipe',
    other = 'other-recipe',
}

/**
 * A Tag represents categories or search-terms of the recipe
 */
export enum RecipeTag {
    swabian = 'schwäbisch',
    vegetarian = 'vegetarisch',
    vegan = 'vegan',
    lactosefree = 'laktosefrei',
    meat = 'fleisch',
    fish = 'fisch',
}

export enum RecipeDifficulty {
    easy = 'Einfach',
    medium = 'Mittel',
    hard = 'Schwer',
}
