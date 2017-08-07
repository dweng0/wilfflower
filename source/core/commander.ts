/**
 * @classdesc Welcome to the commander class, this is actually the avatar, this class will hold the mesh set, dictate the speed, physics, textures
 * and all that jazz, the 'character' class will create an instance of this class and any 'physical' interactions will need to be piped through the character class
 */
import * as BABYLON from 'babylonjs';

/**
 * Import the necessary IInterface
 */
import { ICommander } from '../interface/assets/commander';

export class Commander {
    private _stats: ICommander;
    private _mesh: BABYLON.Mesh;
    constructor() { }

    createMesh(scene: BABYLON.Scene) {
        this._mesh = BABYLON.Mesh.CreateSphere("sphere1", 4, 2, scene);
        // Move the sphere upward 1/2 its height
        this._mesh.position.y = 20;
        this._mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this._mesh, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.2, friction: 0.9 }, scene);
    }
    fetchMesh() {
        return this._mesh;
    }
}