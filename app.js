var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile("musicgen.proto"),
    Entertain = builder.build("Entertain"),
    Music = Entertain.Musics.Music;

// Construct with arguments list in field order:

// OR: Construct with values from an object, implicit message creation (address) and enum values as strings:
var music = new Music({
    "singer": "Rusty",
    "Singer": {
        "name": "Iron Inc.",
        "feat": "sia",

    },
    //"speed": "SUPERFAST" // also equivalent to "speed": 2
});

// OR: It's also possible to mix all of this!

// Afterwards, just encode your message:
var buffer = car.encode();
console.log(buffer);
var dbuffer = Car.decode(buffer);
console.log(dbuffer);
