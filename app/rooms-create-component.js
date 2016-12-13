var db = require('./firebase-db')
var Vue = require('vue')
var VueFire = require('vuefire')

Vue.use(VueFire)

var rooms = [
    {_id: '001', name: 'PHP', description: 'Entusiasta do PHP'},
    {_id: '002', name: 'Java', description: 'Developer experts'},
    {_id: '003', name: 'C#', description: 'Os caras do C#'},
    {_id: '004', name: 'C++', description: 'Fissurados por programação'},
    {_id: '005', name: 'Javascript', description: 'Olha a web aí!'},
    {_id: '006', name: 'Vue.js', description: 'Chat dos caras do data-binding'},
]

module.exports = {
    template: `
    <ul>
        <li v-for="o in rooms">
            {{o._id}} - {{o.name}}
        </li>
    </ul>
`,
    firebase: {
        rooms: db.ref('chat/rooms')
    },
    ready: function () {
        var chatRef = db.ref('chat')
        var roomsChildren = chatRef.child('rooms')
        rooms.forEach(function(room){
            roomsChildren.child(room._id).set({
                _id: room._id,
                name: room.name,
                description: room.description
            })
        })
    }
}
