<template>
    <section class="t-h-screen t-w-screen t-bg-slate-100 t-p-5 t-grid t-place-content-center" >
        <form>
            <span class="t-grid t-justify-center" >
                <img src="@/assets/otp-verification.svg" class="t-h-[200px]" >
                <h4 class="t-p-0 t-m-0 t-text-center t-font-extrabold t-text-green-400" >Verification Code</h4>
                <p class="t-text-[12px] t-text-center t-font-extralight" >Please enter code sent to <br> <span class="t-font-semibold t-text-green-400" >angeloreyes@gmail.com</span> </p>
            </span>
            <div class="t-grid t-grid-cols-6 t-gap-2" >
                <input type="number" placeholder="0" class="t-rounded-[10px] t-shadow t-border-none t-outline-none t-h-[70px] t-font-bold t-text-center t-text-[40px]" min="0" max="9" >
                <input type="number" placeholder="0" class="t-rounded-[10px] t-shadow t-border-none t-outline-none t-h-[70px] t-font-bold t-text-center t-text-[40px]" min="0" max="9" >
                <input type="number" placeholder="0" class="t-rounded-[10px] t-shadow t-border-none t-outline-none t-h-[70px] t-font-bold t-text-center t-text-[40px]" min="0" max="9" >
                <input type="number" placeholder="0" class="t-rounded-[10px] t-shadow t-border-none t-outline-none t-h-[70px] t-font-bold t-text-center t-text-[40px]" min="0" max="9" >
                <input type="number" placeholder="0" class="t-rounded-[10px] t-shadow t-border-none t-outline-none t-h-[70px] t-font-bold t-text-center t-text-[40px]" min="0" max="9" >
                <input type="number" placeholder="0" class="t-rounded-[10px] t-shadow t-border-none t-outline-none t-h-[70px] t-font-bold t-text-center t-text-[40px]" min="0" max="9" >
            </div>
            <div class="t-mt-5" >
                <button class="btn btn-success t-font-bold t-w-full" >Verify</button>
            </div>
            <div class="t-mt-2 t-flex t-justify-center" >
                <router-link to="/" class="text-decoration-none t-text-green-500" >
                Resend Code
            </router-link>
            </div>
        </form>
    </section>
</template>