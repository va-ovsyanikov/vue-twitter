
export interface TrendType{
        name:string,
        count:number
}

export interface TrendsStateType{
        trends:Array<TrendType>,
        loading:boolean,
}