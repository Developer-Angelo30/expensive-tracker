<template>
    <section class="t-bg-white t-h-screen t-w-screen t-relative t-overflow-hidden t-select-none" >
        <div class="" >
            <span class="t-flex t-justify-center" >
                <img src="@/assets/welcome.svg" class="t-h-[250px]" >
            </span>
            <h4 class="t-font-bold t-text-black/70 t-text-center t-p-0 t-m-0" >WELCOME BACK</h4>
            <form class="t-p-5" >
                <div class="mb-3" >
                    <div class="input-group">
                        <input v-model="email" type="text" class="form-control" placeholder="Email">
                        <span class="input-group-text" id="basic-addon2">
                            <fa icon="envelope"  class="t-text-black/80" ></fa>
                        </span>
                    </div>
                    <small v-if="error_email != ''" class="t-text-red-400" >{{ error_email }}</small>
                </div>
                <div class="mb-3" >
                    <div class="input-group">
                        <input v-model="password" :type="passwordField.field" class="form-control" placeholder="Password">
                        <span class="input-group-text" id="basic-addon2">
                            <fa @click="passwordShow" :icon="passwordField.icon" class="t-text-black/80 t-cursor-pointer" ></fa>
                        </span>
                    </div>
                    <small v-if="error_password != ''" class="t-text-red-400" >{{ error_password }}</small>
                </div>
                <button class="btn btn-success w-100 t-uppercase t-font-bold" >
                    SIGN IN
                </button>
                <div class="t-text-[13px] t-text-center t-mt-1" >
                    Don't have an account?
                    <router-link to="" class="text-decoration-none t-font-semibold" >Sign Up</router-link>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const email = ref<string>("");
const password = ref<string>("");
const error_email = ref<string>("");
const error_password = ref<string>("");

const passwordField = ref<{ icon: string; field: string }>({
  icon: "eye",
  field: "password"
});

const passwordShow = () => {
    if(passwordField.value.icon === "eye" && passwordField.value.field === "password"){
        passwordField.value.field = "text";
        passwordField.value.icon = "eye-slash"
    }else{
        passwordField.value.field = "password";
        passwordField.value.icon = "eye"
    }
};
</script>