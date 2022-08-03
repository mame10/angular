import { Produit } from "./produit";

export interface DetailsProduit{
    produit: Produit
    boissons: Produit[]
    portions: Produit[]
    details: Produit[]
}

