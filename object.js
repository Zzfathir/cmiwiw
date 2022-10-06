
const hello = new String("shalom")
hello.nama = "akhe"
hello.print = function() {

    console.log(this + " "+this.nama)
}

hello.print()