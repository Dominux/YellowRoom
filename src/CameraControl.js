const rotateAccuracy = 0.1
const keys = {
  'rotate': { 'KeyA': -rotateAccuracy, 'KeyD': rotateAccuracy },
  'go': { 'W': 87 }
}

function createCamera(scene, canvas) {
  const camera = new BABYLON.GamepadCamera("GamepadCamera", new BABYLON.Vector3(0, 0, 0), scene)
  camera.attachControl(canvas, true)

  console.log(camera)

  // Contol reorganisation
  camera.keysUp = [keys.go.W] // W
  camera.keysLeft = [] // None
  camera.keysRight = [] // None
  camera.keysDown = [] // None

  // Rotation
  document.addEventListener('keydown', event => {
    if (Object.keys(keys.rotate).includes(event.code)) {
      camera.rotation.z += keys.rotate[event.code]
      console.log(camera.rotation.z)
    }
  })

  return camera
}