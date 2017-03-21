
///BY Sunil Paul
///Defining class in typescript with property and constructor
/// 21-03-2017


class Engine {

    constructor(public horsePower: number, public engineType: string)
    {
    }
}

class Car
{
    private _engine: Engine;


    constructor(engine: Engine)
    {
        this._engine = engine;
    } 

    get engine(): Engine
    {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value == undefined) throw 'Please set engine value';
        else this._engine = value;
    }

    start(): void
    {
        alert('Car engine Started ' + this._engine.engineType);
    }
    
}

window.onload = function ()
{
    var engine = new Engine(300, 'Maruti v8');
    var c = new Car(engine);
    c.start();
    
}

