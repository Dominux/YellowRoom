window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('renderCanvas')

    const engine = new BABYLON.Engine(canvas, true)

    const createScene = () => {
        const scene = new BABYLON.Scene(engine)

        const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, .1, BABYLON.Vector3.Zero(), scene)
        camera.attachControl(canvas, true)

        const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene)

        return scene
    }

    let scene = createScene()

    const roomTheFirst = BABYLON.MeshBuilder.CreateBox("roomTheFirst", { height: 1, width: 0.75, depth: 0.25 }, scene)
    roomTheFirst.flipFaces(true)

    console.log(roomTheFirst)
    for (const key in roomTheFirst.scaling) {
        if (roomTheFirst.scaling.hasOwnProperty(key)) {
            roomTheFirst.scaling[key] *= 10
        }
    }

    engine.runRenderLoop(() => {
        scene.render()
    })

    window.addEventListener('resize', () => {
        engine.resize()
    })
})