<template>
    <div class="main">
        <div class="home"></div>
    </div>
</template>


<script>
import * as THREE from 'three'
// 这样引入一下灯光和材质 也可以使用 THREE.的方式
import { HemisphereLight, SphereGeometry } from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
    name: "index",
    data() {
        return {
            renderer: null,
            // camera 相机
            camera: null,
            // Scene场景
            scene: null,
            // 灯光
            light: null,
            // 形状 球形
            sphereGeometry: null,
            // 材质
            material: null,
            // 网格
            sphereMesh: null,
            // 控制器
            control: null
        }
    },
    methods: {
        /**
         * 初始化方法
         */
        init() {
            /*
            * 1. 渲染器 WebGLRendererf
            * 2. 相机
            * 3. 场景
            * 4. Mesh 简单理解为渲染对象
            *   4.1 Mesh 几何体 （形状等）
            *   4.2 材质
            * 5. 渲染器不断的刷新 requestFrame
            * 6. 控制相机的运动需要一个控制器
            * */
            // antialias:true抗锯齿
            this.renderer = new THREE.WebGLRenderer({ antialias: true })
            // 设置渲染器的大小和页面大小一样大
            this.renderer.setSize(window.innerWidth, window.innerHeight)
            // 切换背景颜色
            this.renderer.setClearColor(0x464546)
            // 将canvas装载在主体的模型上
            document.body.appendChild(this.renderer.domElement)

            // 相机
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, window.innerWidth / window.innerHeight, 1000)
            // 监听窗口大小
            window.addEventListener('resize', () => {
                this.renderer.setSize(window.innerWidth, window.innerHeight)
                // 相机的宽高比
                this.camera.aspect = window.innerWidth / window.innerHeight
                // 设置了Aspect 之后必须更新相机的投影矩阵
                this.camera.updateProjectionMatrix()
            })
            // 设置相机的位置
            this.camera.position.set(0, 0, 50)

            // 创建一个场景
            this.scene = new THREE.Scene()

            // 灯光
            this.light = new HemisphereLight(0x00ff00, 0xff0000)
            // 将灯光添加到场景中
            this.scene.add(this.light)

            // 创建形状
            this.sphereGeometry = new SphereGeometry(5, 12, 12)
            // 创建材质
            this.material = new THREE.MeshPhongMaterial()
            // 根据形状和材质创建网格
            this.sphereMesh = new THREE.Mesh(this.sphereGeometry, this.material)
            this.scene.add(this.sphereMesh)

            // 渲染场景和相机
            this.renderer.render(this.scene, this.camera)
            // 控制器 第一个参数是相机第二个参数是渲染器
            this.control = new OrbitControls(this.camera, this.renderer.domElement)
            this.update()
        },

        /**
         * 定义一个刷新函数
         */
        update() {
            // 需要不断的进行渲染更新
            this.renderer.render(this.scene, this.camera)
            requestAnimationFrame(this.update)
        }
    },
    created() {
        this.init()
    }
}
</script>

<style  scoped>
</style>
