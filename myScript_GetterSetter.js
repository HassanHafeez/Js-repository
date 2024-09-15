let attendance={
    _list:[],
    set addName(name){
        this._list.push(name)
    },
    get list(){
        return this._list.join(", ");
    }
};

attendance.addName="John Star";
attendance.addName="John Mar";
attendance.addName="John Moon";
console.log(attendance.list);

//class
class Displacement {
    constructor(velocity, time) {
        this.velocity = velocity;
        this.time = time;
    }

    calDisPlace() {
        return this.velocity * this.time;
    }

    get Displace() {
        return `${this.calDisPlace()} m.`;
    }
}

const Point = new Displacement(10, 2);
console.log(Point.Displace);
