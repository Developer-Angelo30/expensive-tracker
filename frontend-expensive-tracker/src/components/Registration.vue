<template>
    <section class="t-h-screen t-w-screen t-bg-slate-100 t-relative t-select-none t-overflow-hidden" > 
        <span class="t-absolute t-h-[400px] t-top-[-100px] t-left-[-80px] t-w-[400px] t-rounded-[50%] t-bg-green-300/80 t-grid t-place-content-center" >
            <span class=" t-h-[300px] t-w-[300px] t-bg-green-200/80 t-rounded-[50%]" ></span>
        </span>
        <span class="t-absolute t-h-[150px] t-bottom-[-10%] t-left-[20%] t-w-[150px] t-rounded-[50%] t-bg-green-300/80 t-grid t-place-content-center" >
            <span class=" t-h-[115px] t-w-[115px] t-bg-green-200/80 t-rounded-[50%]" ></span>
        </span>
        <div class=" t-w-full t-h-full t-absolute t-z-10 t-py-5 t-px-7 t-overflow-auto" >
            <router-link to="/" class="" >
                <fa icon="arrow-left" class="t-text-black/80 t-cursor-pointer t-py-2 t-text-[20px]" ></fa>
            </router-link>
            <span>
                <h2 class="t-capitalize t-font-bold t-mt-3 t-text-center t-text-black/80 t-p-0 t-m-0" >Let Get Started!</h2>
                <p class="t-text-[12px] t-text-center t-italic t-text-black/80 t-font-extralight" >Let us track your all expenses.</p>
            </span>
            <form>
                <div class="mb-3" >
                    <div class="t-h-[40px] t-shadow-sm t-bg-white t-rounded-[20px] t-grid t-grid-cols-[50px,1fr]" >
                        <div class="t-grid t-place-content-center"  >
                            <fa icon="envelope" class="t-text-black/60" ></fa>
                        </div>
                        <input placeholder="Email" class="t-w-full t-h-full t-outline-none t-border-none t-rounded-[20px] t-pr-5" >
                    </div>
                    <small class="t-text-red-400" >error message</small>
                </div>
                <div class="mb-3" >
                    <div class="t-h-[40px] t-shadow-sm t-bg-white t-rounded-[20px] t-grid t-grid-cols-[50px,1fr]" >
                        <div class="t-grid t-place-content-center"  >
                            <fa icon="lock" class="t-text-black/60" ></fa>
                        </div>
                        <input placeholder="New Password" class="t-w-full t-h-full t-outline-none t-border-none t-rounded-[20px] t-pr-5" >
                    </div>
                    <small class="t-text-red-400" >error message</small>
                </div>
                <div class="mb-3" >
                    <div class="t-h-[40px] t-shadow-sm t-bg-white t-rounded-[20px] t-grid t-grid-cols-[50px,1fr]" >
                        <div class="t-grid t-place-content-center"  >
                            <fa icon="lock" class="t-text-black/60" ></fa>
                        </div>
                        <input placeholder="Confirm Password" class="t-w-full t-h-full t-outline-none t-border-none t-rounded-[20px] t-pr-5" >
                    </div>
                    <small class="t-text-red-400" >error message</small>
                </div>
                <button class="btn btn-primary w-100" >
                    <fa icon="sign-out" ></fa>&nbsp;
                    <span class="t-text-[14px]" >SIGN UP</span>
                </button>
            </form>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
</script>