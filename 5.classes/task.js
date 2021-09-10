class PrintEditionItem {
    name

    constructor(name,releaseDate,pagesCount,state,type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        this.state*=1.5;
    }
    set state (val) {
        return val;
    }
}
let ss = new PrintEditionItem("HP",2005,100,1,1)
ss.state
