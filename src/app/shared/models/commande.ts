export interface Commande{
    id? : number
    numero: string
    date: Date
    zone?: string
    telephone?:string
    montant?:number
    etat?:string
}