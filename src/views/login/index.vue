<template>
    <div class='login' ref="login">
        <div class="loginBox">
            <h5>登录</h5>
            <div class="from">
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize"
                    status-icon>
                    <el-form-item prop="account">
                        <span class="label">账号:</span>
                        <el-input v-model="ruleForm.account" placeholder="请输入账号" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <span class="label">密码:</span>
                        <el-input v-model="ruleForm.password" placeholder="请输入密码" />
                    </el-form-item>
                    <div class="submitBox">
                        <el-button type="primary" @click="submitForm">
                            确定
                        </el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script >
import { defineComponent, ref, reactive, toRefs, onMounted, } from 'vue'
import { useRouter } from 'vue-router';
export default {
    name: '',
    props: {
    },
    components: {

    },
    setup(props, ctx) {
        const router=useRouter()
        const login = ref();
        const ruleFormRef = ref();
        const ruleForm = reactive({
            account: "",
            password: ""
        })
        const rules = reactive({
            account: [
                { required: true, message: '请填写账号', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请填写密码', trigger: 'blur' },
            ],
        })
        const submitForm = async () => {

            await ruleFormRef.value.validate((valid, fields) => {
                if (valid) {
                    router.push("/home")
                } else {
                    console.log('error submit!', fields)
                }
            })
        }
        // 创建应用
        const handleInitBg = () => {
            const app = new PIXI.Application({
                width: login.value.offsetWidth,
                height: login.value.offsetHeight,
                backgroundColor: 0x000000,

                antialias: true, // 抗锯齿
            });
            console.log(login.value.getBoundingClientRect())
            // 将应用画布添加到DOM中
            login.value.appendChild(app.view);
            // 创建一个纹理
            const texture = PIXI.Texture.from("./textures/loginbg.png");
            // 创建一个精灵
            const sprite = new PIXI.Sprite(texture);
            sprite.width = app.screen.width;
            sprite.height = app.screen.height;
            // 创建容器
            const container = new PIXI.Container();
            // 将精灵添加到容器中
            container.addChild(sprite);
            // 将容器添加到舞台
            app.stage.addChild(container);
            // 添加置换滤镜
            const displacementSprite = PIXI.Sprite.from("./textures/displacement.jpg");
            displacementSprite.scale.set(0.5);
            displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
            const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
            container.addChild(displacementSprite);
            // 添加震波滤镜
            const shockwaveFilter1 = new PIXI.filters.ShockwaveFilter(
                [Math.random() * app.screen.width, Math.random() * app.screen.height],
                {
                    radius: 80, //半径
                    waveLength: 40, //波长
                    amplitude: 40, //振幅
                    speed: 200,
                },
                0
            );


            container.filters = [
                displacementFilter,
                shockwaveFilter1,

            ];
            app.ticker.add((delta) => {
                displacementSprite.x += 0.5;
                displacementSprite.y += 0.5;
                shockwaveFilter1.time += 0.01;
            });
            app.view.addEventListener("click", (e) => {

                shockwaveFilter1.center = [e.clientX, e.clientY];
                shockwaveFilter1.time = 0;

            });

        }

        onMounted(() => {
            handleInitBg()
        })
        return {
            /**变量 */
            login,
            ruleForm,
            rules,
            ruleFormRef,
            /**函数 */
            submitForm
        }
    },
}
</script>

<style scoped lang='scss'>
.login {
    width: 100%;
    height: 100%;
    overflow: hidden;
  background-color: black;
    position: relative;

    .loginBox {
        width: 300px;
        height: 340px;
        background: rgba(20, 20, 20, 0.3);
        border-radius: 10px;
        border: 1px solid rgba(20, 20, 20, 0.8);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        padding: 0 40px;

        h5 {
            color: rgba(255, 255, 255, 1);
            font-size: 28px;
            text-align: center;
            padding: 20px 0;
        }

        .submitBox {
            text-align: center;
        }
        .from{
            .label{
                color:aliceblue;
                font-size: 16px;
            }
        }
        
        :deep(.el-input__wrapper){
            background :rgba(255,255,255,0);
            outline: none;
            box-shadow: none;
            border-radius: 0;
            border-bottom: 1px solid #ffffff;
           
        }
        :deep(.el-input__inner){
            color:aliceblue;

            ::-webkit-input-placeholder{
                color:#fff;
            }
        }

        :deep(.el-button) {
            // 此时css解析的为 .outer[data-v-xxxx] .el-input__inner 样式生效
           width:100%;
           margin-top:20px;
           background :rgba(21, 89, 236, 0.3);
           border :1px solid rgba(21, 89, 236,0.8);
        }
    }
}

canvas {
    width: 100%;
    height: 100%;
}
</style>