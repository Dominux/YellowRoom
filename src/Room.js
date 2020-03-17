Rooms = {
  rooms: [],
  createRoom() {
    const newRoom = BABYLON.MeshBuilder.CreateBox("roomTheFirst", { height: 10, width: 10, depth: 10 }, this.scene)
    newRoom.flipFaces(true)
    this.rooms.push(newRoom)
  }
}