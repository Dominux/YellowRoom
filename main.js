window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('renderCanvas')

  const engine = new BABYLON.Engine(canvas, true)

  const createScene = () => {
    const scene = new BABYLON.Scene(engine)

    const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene)

    return scene
  }

  let scene = createScene()

  camera = createCamera(scene, canvas)

  Rooms.scene = scene
  Rooms.createRoom()

  engine.runRenderLoop(() => {
    scene.render()
  })

  window.addEventListener('resize', () => {
    engine.resize()
  })
})