<template>
    <section class="t-bg-slate-100 t-h-screen t-w-screen t-relative t-overflow-hidden t-select-none" >
        <div class="t-flex t-items-center t-w-full t-h-full" >
            <div class="t-w-full" >
                <span class="t-flex t-justify-center" >
                    <img src="@/assets/welcome.svg" class="t-h-[250px]" >
                </span>
                <h4 class="t-font-bold t-text-black/70 t-text-center t-p-0 t-m-0" >WELCOME BACK</h4>
                <form class="t-p-5" >
                    <div class="mb-3" >
                        <div class="t-h-[40px] t-shadow-sm t-bg-white t-rounded-[20px] t-grid t-grid-cols-[1fr,50px]" >
                            <input v-model="email"  placeholder="Email" type="text" class="t-w-full t-h-full t-outline-none t-border-none t-rounded-[20px] t-pl-5" >
                            <div class="t-grid t-place-content-center"  >
                                <fa icon="envelope" class="t-text-black/60" ></fa>
                            </div>
                        </div>
                        <small v-if="error_email != ''" class="t-text-red-400" >{{ error_email }}</small>
                    </div>
                    <div class="mb-3" >
                        <div class="t-h-[40px] t-shadow-sm t-bg-white t-rounded-[20px] t-grid t-grid-cols-[1fr,50px]" >
                            <input v-model="password" placeholder="Password" :type="passwordField.field" class="t-w-full t-h-full t-outline-none t-border-none t-rounded-[20px] t-pl-5" >
                            <div class="t-grid t-place-content-center"  >
                                <fa @click="passwordShow" :icon="passwordField.icon" class="t-text-black/60 t-cursor-pointer" ></fa>
                            </div>
                        </div>
                        <small v-if="error_password != ''" class="t-text-red-400" >{{ error_password }}</small>
                    </div>
                    <button class="btn btn-success w-100 t-uppercase t-font-bold" >
                        <fa icon="sign-in" ></fa>
                        SIGN IN
                    </button>
                    <div class="t-text-[13px] t-text-center t-mt-1" >
                        Don't have an account?
                        <router-link to="/sign-up" class="text-decoration-none t-font-semibold" >Sign Up</router-link>
                    </div>
                </form>
            </div>
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
        passwordField.value.icon = "eye";
    }
};
</script>