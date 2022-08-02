import { Produit } from "./produit"

export interface Catalogue {
    burger: Produit[]
    menu: Produit[]
    produits: Produit[]
    // "hydra:member"?: [
    //     {
    //         menus: Produit[]
    //     },
    //     {
    //         burgers: Produit[]
    //     }
    // ]
}