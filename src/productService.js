export function getData(page){

    if(page==1)
        return [
            {id:1,name:'Keyboard Farasoo',price:50000,quantity:2},
            {id:2,name:'LG LCD',price:17000000,quantity:1},
            {id:3,name:'Samsung A32',price:32000000,quantity:5},
        ]

    if(page=2)
        return [
            {id:4,name:'Logitech Mouse',price:50000,quantity:2},
            {id:5,name:'Gigabyte Motherboard',price:17000000,quantity:1},
            {id:6,name:'Maxtor HDD',price:32000000,quantity:5},
        ]
}

export function GetTotalPage(){
    return 2;
}