export class ScenesManager{
    constructor(stage, scenesConfigs) {
        const scenesSelector = document.getElementById("sceneSelect");

        this._allScenes = [];

        scenesConfigs.forEach(sceneConfig => {
            const scene = new sceneConfig.constructor(stage);

            this[sceneConfig.id] = scene;
            this._allScenes.push(scene);

            scenesSelector.innerHTML += `<option value=${sceneConfig.id}>${sceneConfig.label}</option>`
        });

        this.hideAll();
    }

    hideAll(){
        this._allScenes.forEach(scene =>{
            scene.visible = false;
            scene.update()
        });
    }

    showScene(sceneName){
        this[sceneName].visible = true;
    }

    getSceneUpdateFunc(sceneName){
        const scene = this[sceneName];

        return scene.update.bind(scene);
    }
}