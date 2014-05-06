var hello_world = function() {
    var name;
    name = "roofimon";

    var reverse_name = function() {
        var e, name;
        e = name;
        console.log("hello " + e + "!");
        name = "juacompe";
        console.log("inner scope: name = " + name + "!");
    };

    reverse_name();
    console.log("outter scope: name = " + name + "!");
};
