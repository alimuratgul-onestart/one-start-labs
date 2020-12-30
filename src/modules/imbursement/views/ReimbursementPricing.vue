<template>
    <v-col cols="12" md="6" class="mx-auto mt-16">
        <v-list-item-title class="display-1 font-weight-light text-center mb-10 primary--text">
            Pricing
        </v-list-item-title>
        <h1 class="display-1 font-weight-regular text-center mb-10">
            Nothing upfront !
        </h1>
        <p class="subheader fw300">
            Straightforward Pricing: You don't pay us until you get paid by Amazon. After Amazon credits your
            account,
            then we charge a 25% commission on the refunded amount.
        </p>
        <h1 class="display-1 font-weight-thin text-center font-italic mt-8">
            “Put simply, we only make money when you make money.”
        </h1>
        <v-col cols="12" sm="6" class="mx-auto mt-8">
            <v-card flat outlined class="pt-10 pb-7">
                <h3 class="text-center font-weight-regular primary--text">OneStart Reimbursement</h3>
                <v-card-text>
                    <div>
                        <div class="sub-item fw300 text-center">
                            Accurate & Detailed Reports
                        </div>
                        <div class="sub-item fw300 text-center">
                            Manual Case Filing & Follow Up Until Reimbursement Earned
                        </div>
                        <div class="sub-item fw300 text-center">
                            Amazon TOS Compliant Service You Can Trust
                        </div>
                        <div class="sub-item fw300 text-center">
                            Affordable, No-risk Pricing
                        </div>
                        <div class="sub-item fw300 text-center">
                            Dedicated Account Manager
                        </div>
                    </div>
                    <div class="text-center">
                        <v-btn
                            class="mt-7"
                            color="primary"
                            outlined
                            rounded
                            @click="goToHomePageContact"
                        >
                            Start Now
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-col>
</template>

<script>
export default {
    name: "ReimbursementPricing",
    methods: {
        goToHomePageContact() {
            this.$router.push({name: 'ImbursementHome', query: {contact: 'true'}});
        }
    },
}
</script>

<style scoped>
.fw300 {
    font-weight: 300;
}

.sub-item {
    line-height: 2rem;
}
</style>
