<template>
    <section class="t-h-screen t-w-screen t-bg-slate-100 t-grid t-place-content-center" >
        <div class="t-flex t-justify-center" >
            <img src="@/assets/verified.png" >
        </div>
        <span class="t-text-center t-text-green-400 t-font-semibold t-text-[20px]" >Verified</span>
        <span>
            <p class="t-text-[14px] t-text-center t-font-extralight" >
                Thank you, Your email successfuly verified.<br>
                Please
                <router-link to="/" >sign in</router-link>
            </p>
        </span>
    </section>
</template>