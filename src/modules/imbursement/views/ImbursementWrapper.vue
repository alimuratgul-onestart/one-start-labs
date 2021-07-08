<template>
    <div class="landing-page-wrapper">
        <div id="home" v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.5, 1.0]
            }
          }"/>
        <!--HEADER-->
        <header class="header-holder">
            <div class="menu-wrapper relative center-relative">
                <div class="header-logo d-flex" @click="scrollToComponent('home')">
                    <v-img src="@/assets/logo.png" class="logo"/>
                    <h2>One Start</h2>
                </div>
                <div class="menu-icon">
                    <v-btn icon dark large @click="drawer=true">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                    <v-navigation-drawer
                        v-model="drawer"
                        color="#060606"
                        app
                        temporary
                    >
                        <ul class="main-menu">
                            <li
                                v-for="({text, href}, mi) in menuItems"
                                :key="mi"
                                class="menu-item"
                                :class="{'active': isIntersecting === href}"
                            >
                                <a @click="scrollToComponent(href)">
                                    {{ text }}
                                </a>
                            </li>
                        </ul>
                    </v-navigation-drawer>
                </div>
                <div class="menu">
                    <nav class="menu-container">
                        <ul class="main-menu">
                            <li
                                v-for="({text, href}, mi) in menuItems"
                                :key="mi"
                                class="menu-item"
                                :class="{'active': isIntersecting === href}"
                            >
                                <a @click="scrollToComponent(href)">
                                    {{ text }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="clear"></div>
            </div>
        </header>
        <!--CONTENT-->
        <div class="site-content">
            <!--FULL_HEIGHT_IMG-->
            <div class="first-section first-section-cover"
                 :style="{ backgroundImage: 'url(\'' + require('@/assets/bg.jpg') + '\')' }">
                <div class="first-section-content mb-12 mx-auto">
                    <div class="first-section-logo mx-auto">
                        One Start
                    </div>
                    <h3 class="first-section-light-text">Start Finding Simple Solutions For Complex Problems</h3>
                </div>
            </div>
            <!--BOOKZ PRO-->
            <div id="bookzpro" class="section second-section"

                 v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.5, 1.0]
            }
          }">
                <div class="section-wrapper second-section-content mx-auto content-1170">
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="section-small-bold">Products & Services</p>
                            <p class="section-title">Bookz Pro</p>
                            <p class="section-text">A professional tool set for book sellers on Amazon</p>
                        </v-col>
                        <v-col cols="12" md="6">
                            <img
                                src="@/assets/bookzpro.png"
                                style="width: 100%"
                                alt=""/>
                        </v-col>
                    </v-row>
                    <div class="section-detail text-center pt-10">
                        <v-btn
                            x-large
                            rounded
                            dark
                            href="https://www.bookzpro.com/"
                            target="_blank"
                        >
                            More Info
                        </v-btn>
                    </div>
                </div>
            </div>
            <!--REIMBURSEMENT-->
            <div id="reimbursement" class="section sixth-section"
                 v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.5, 1.0]
            }
          }"
            >
                <div class="section-wrapper sixth-section-content mx-auto content-1170">
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="section-small-bold">Products & Services</p>
                            <p class="section-title">Reimbursement</p>
                            <p class="section-text">Get reimbursements from Amazon</p>
                        </v-col>
                        <v-col cols="12" md="6">
                            <img
                                src="@/assets/images/reimbursement.png"
                                style="width: 100%"
                                alt=""/>
                        </v-col>
                    </v-row>
                    <div class="section-detail mt-8">
                        <v-row>
                            <v-col cols="12" sm="12">
                                <p class="section-text detail-p">
                                    We help you get reimbursements from Amazon by analyzing your FBA inventory and
                                    opening cases on your behalf for your lost and damaged items. Unlike other services,
                                    ours is not an automated software. We open cases manually with your Dedicated
                                    Account Manager and follow up until you are treated fairly. 100% TOS compliant is
                                    guaranteed.
                                </p>
                            </v-col>
                        </v-row>
                        <v-row class="mt-8">
                            <v-col cols="12" sm="3">
                                <v-card flat class="card-rounded">
                                    <v-card-text>
                                        <v-img
                                            class="mx-auto"
                                            width="100"
                                            height="100"
                                            src="@/assets/images/icon1.png"
                                        />
                                    </v-card-text>
                                    <v-card-text class="card-text">
                                        Each account is assigned a Reimbursement Manager that submits your claims on
                                        your behalf and keep track of your eligible refunds.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-card flat class="card-rounded">
                                    <v-card-text>
                                        <v-img
                                            class="mx-auto"
                                            width="100"
                                            height="100"
                                            src="@/assets/images/icon2.png"
                                        />
                                    </v-card-text>
                                    <v-card-text class="card-text">
                                        We make money when you make money. There are no monthly fees or long term
                                        commitments.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-card flat class="card-rounded">
                                    <v-card-text>
                                        <v-img
                                            class="mx-auto"
                                            width="100"
                                            height="100"
                                            src="@/assets/images/icon3.png"
                                        />
                                    </v-card-text>
                                    <v-card-text class="card-text">
                                        As your account synced, our software goes to work. Our Reimbursement Manager
                                        starts Manual case filing immediately.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-card flat class="card-rounded">
                                    <v-card-text>
                                        <v-img
                                            class="mx-auto"
                                            width="100"
                                            height="100"
                                            src="@/assets/images/icon4.png"
                                        />
                                    </v-card-text>
                                    <v-card-text class="card-text">
                                        Unlike other services, OneStart Reimbursement is non-automated when submitting
                                        cases and <br class="hidden-sm-and-down"> 100% TOS compliant. With us your
                                        account is safe.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row class="mt-8">
                            <v-col>
                                <h1 class="white--text mb-8">Services;</h1>
                                <ul class="mt-5">
                                    <li class="arrow-bullet">Accurate & Detailed Reports</li>
                                    <li class="arrow-bullet">Manual Case Filing & Follow Up Until Reimbursement Earned
                                    </li>
                                    <li class="arrow-bullet">Amazon TOS Compliant Service You Can Trust</li>
                                    <li class="arrow-bullet">Affordable, No-risk Pricing</li>
                                    <li class="arrow-bullet">Dedicated Account Manager</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row class="mt-8">
                            <v-col>
                                <h1 class="white--text mb-8">Pricing;</h1>
                                <p class="section-text detail-p mt-8">
                                    <u>Straightforward Pricing:</u> You don't pay us until you get paid by Amazon. After
                                    Amazon
                                    credits your account, then we charge a 25% commission on the refunded amount.
                                </p>
                            </v-col>
                        </v-row>
                        <v-row class="mt-8">
                            <v-col class="text-center">
                                <v-btn
                                    x-large
                                    rounded
                                    dark
                                    @click="scrollToComponent('contact', true)"
                                >
                                    Start Now
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
            <!--ABOUT US-->
            <div id="about-us" class="section ninth-section"
                 v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.5, 1.0]
            }
          }"
            >
                <div class="section-wrapper ninth-section-content mx-auto content-1170">
                    <v-row>
                        <v-col cols="12" md="5" class="d-flex align-content-center">
                            <div class="align-self-center">
                                <p class="section-title mt-0">About Us</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="7">
                            <p class="section-text">
                                One Start is a professional software development company based in Saint Louis, Missouri,
                                specialized in understanding the needs of Amazon Sellers and the provision of the
                                greatest software solutions for them.
                            </p>
                        </v-col>
                    </v-row>
                    <div class="section-detail">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-card flat dark color="transparent">
                                    <v-card-text class="text-center">
                                        <div
                                            class="avatar elevation-12"
                                        >
                                            <v-img
                                                src="@/assets/team/lo.png"
                                            />
                                        </div>
                                    </v-card-text>
                                    <v-card-title class="text-center">
                                        <div class="w-100 text-center">Levent Ozturk</div>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <div class="w-100 text-center">CEO</div>
                                    </v-card-subtitle>
                                    <v-card-text class="text-center">
                                        Levent is a software engineer, eCommerce Business Consultant and originator of
                                        BookzPro. He has a vast experience on eCommerce. He is highly organized and
                                        detail oriented with strong leadership and project supervisory skills. Levent
                                        has his BS degree in Computer Science from
                                        University of Missouri.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-card flat dark color="transparent">
                                    <v-card-text class="text-center">
                                        <div
                                            class="avatar elevation-12"
                                        >
                                            <v-img
                                                src="@/assets/team/job.jpeg"
                                            />
                                        </div>
                                    </v-card-text>
                                    <v-card-title class="text-center">
                                        <div class="w-100 text-center">John O. Balsoy</div>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <div class="w-100 text-center">Board Member</div>
                                    </v-card-subtitle>
                                    <v-card-text class="text-center">
                                        John is an experienced entrepreneur and brings in his years of technology and
                                        business experience to the Company. He founded his first company, ASE Inc., as a
                                        consulting firm in 2009. John received his BS degree in computer engineering
                                        from <br class="hidden-sm-and-down"> Ege University and an MS degree in computer
                                        science from Syracuse
                                        University.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-card flat dark color="transparent">
                                    <v-card-text class="text-center">
                                        <div
                                            class="avatar elevation-12"
                                        >
                                            <v-img
                                                src="@/assets/team/ssc.jpeg"
                                            />
                                        </div>
                                    </v-card-text>
                                    <v-card-title class="text-center">
                                        <div class="w-100 text-center">S. Sam Celepoglu</div>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <div class="w-100 text-center">Board Member</div>
                                    </v-card-subtitle>
                                    <v-card-text class="text-center">
                                        S. Sam Celepoglu is a software development engineer in test. Sam has a deep
                                        understanding of SDLC methodologies. He has
                                        worked on Bayer, Enterprise, and currently working at Equifax.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" class="ml-auto">
                                <v-card flat dark color="transparent">
                                    <v-card-text class="text-center">
                                        <div
                                            class="avatar elevation-12"
                                        >
                                            <v-img
                                                src="@/assets/team/uyt.jpg"
                                            />
                                        </div>
                                    </v-card-text>
                                    <v-card-title class="text-center">
                                        <div class="w-100 text-center">Umut Y. Tontus</div>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <div class="w-100 text-center">CTO</div>
                                    </v-card-subtitle>
                                    <v-card-text class="text-center">
                                        As a CTO, Umut leads Onestarts's long-term technology vision. He has brought
                                        many years of enterprise experience along with his mobile development knowledge
                                        to ensure that Onestart's software is scalable and enterprise-ready. <br
                                        class="hidden-sm-and-down"> Umut has a
                                        degree in Computer Engineering at <br class="hidden-sm-and-down"> Yıldız
                                        Technical University.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="4" class="mr-auto">
                                <v-card flat dark color="transparent">
                                    <v-card-text class="text-center">
                                        <div
                                            class="avatar elevation-12"
                                        >
                                            <v-img
                                                src="@/assets/team/bec.jpeg"
                                            />
                                        </div>
                                    </v-card-text>
                                    <v-card-title class="text-center">
                                        <div class="w-100 text-center">Bilal E. Celik</div>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <div class="w-100 text-center">Strategist</div>
                                    </v-card-subtitle>
                                    <v-card-text class="text-center">
                                        Bilal is an experienced strategist, entrepreneur and startup enthusiast with a
                                        passion for building businesses. 8+ year track-record of defining new business
                                        strategies, launching new brands and delivering operational impact, both as a
                                        strategist and management consultant.
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
            <!--CONTACT-->
            <div id="contact" class="section seventh-section"
                 v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.5, 1.0]
            }
          }"
            >
                <div class="section-wrapper seventh-section-content mx-auto content-1170">
                    <v-row>
                        <v-col cols="12" md="6" class="d-flex align-content-center">
                            <div class="align-self-center">
                                <p class="section-title mt-0">Contact</p>
                                <p class="section-text mt-5">
                                    <v-icon dark class="mr-3">mdi-map-marker</v-icon>
                                    2242 Zumbehl Rd, Saint Charles, MO 63301
                                </p>
                                <p class="section-text">
                                    <v-icon dark class="mr-4">mdi-email</v-icon>
                                    <a href="mailto:info@onestartlabs.com">info@onestartlabs.com</a>
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="outlined-container">
                                <p class="section-text text-center">Contact Form</p>
                                <v-form
                                    v-model="formValid"
                                    ref="landingContactForm"
                                    @submit.prevent="contactRequest"
                                    lazy-validation
                                >
                                    <v-text-field
                                        id="contactName"
                                        v-model="form.contactName"
                                        label="Contact Name"
                                        dark
                                        color="white"
                                        :rules="[requiredRule]"
                                    />
                                    <v-text-field
                                        v-model="form.state"
                                        label="State (Optional)"
                                        dark
                                        color="white"
                                    />
                                    <v-text-field
                                        v-model="form.city"
                                        label="City"
                                        dark
                                        color="white"
                                        :rules="[requiredRule]"
                                    />
                                    <v-text-field
                                        v-model="form.companyName"
                                        label="Company (Amazon) Name"
                                        dark
                                        color="white"
                                        :rules="[requiredRule]"
                                    />
                                    <v-text-field
                                        v-model="form.email"
                                        label="Contact Email"
                                        dark
                                        color="white"
                                        :rules="[requiredRule]"
                                    />
                                    <v-text-field
                                        v-model="form.couponCode"
                                        label="Coupon Code (Optional)"
                                        dark
                                        color="white"
                                    />
                                    <v-textarea
                                        v-model="form.message"
                                        label="Message (Optional)"
                                        dark
                                        color="white"
                                    />
                                    <div class="text-right">
                                        <v-btn
                                            :disabled="sendFormSuccess || sendFormLoading"
                                            :loading="sendFormLoading"
                                            type="submit"
                                            block
                                            dark
                                            color="#161616"
                                        >
                                            <template v-if="!sendFormSuccess">
                                                Send
                                            </template>
                                            <template v-else>
                                                <v-icon>mdi-check</v-icon>
                                            </template>
                                        </v-btn>
                                    </div>
                                </v-form>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
        <!--FOOTER-->
        <footer class="footer-holder">
            <h4 class="text-center white--text">
                {{ new Date().getFullYear() }} — <span class="white--text">One Start LLC</span>
            </h4>
            <div class="text-center mt-3">
                <router-link :to="{name: 'PrivacyPolicies'}" target="_blank"
                             class="white--text text-decoration-underline">Privacy
                    Policy
                </router-link>
                <span class="mx-3 white--text">-</span>
                <router-link :to="{name: 'CookiePolicies'}" target="_blank"
                             class="white--text text-decoration-underline">Cookie
                    Policy
                </router-link>
            </div>
        </footer>
        <!--SNACKBAR-->
        <v-snackbar
            v-model="snackbar.model"
            :color="snackbar.color"
        >
            {{ snackbar.message }}
            <template v-slot:action="{ attrs }">
                <v-btn
                    icon
                    dark
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
        <!--COOKIE ALERT-->
        <v-alert
            v-if="!cookiesAccepted"
            style="position: fixed; bottom: 15px; right: 15px; margin-left: 15px"
            dense
            class="mb-0"
            dark
        >
            <v-row align="center">
                <v-col class="py-0">
                    This website uses cookies to ensure you get the best experience on our web site
                    <router-link to="/cookie-policies" target="_blank">More info</router-link>
                </v-col>
                <div class="py-0 px-1">
                    <v-btn
                        outlined
                        @click="acceptCookiePolicy"
                    >
                        Got it!
                    </v-btn>
                </div>
            </v-row>
        </v-alert>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ImbursementWrapper",
    data() {
        return {
            drawer: false,
            menuItems: [
                {text: 'Home', href: 'home', product: false, free: false},
                {text: 'Bookz Pro', href: 'bookzpro', product: false, free: false},
                {text: 'Reimbursement', href: 'reimbursement', product: false, free: false},
                {text: 'About Us', href: 'about-us', product: false, free: false},
                {text: 'Contact', href: 'contact', product: false, free: false},
            ],
            menuModel: 0,
            requiredRule: v => !!v || 'This field is required',
            formValid: true,
            form: {
                contactName: '',
                state: '',
                city: '',
                companyName: '',
                email: '',
                couponCode: '',
                message: '',
            },
            snackbar: {
                model: '',
                message: '',
                color: ''
            },
            sendFormLoading: false,
            sendFormSuccess: false,
            cookiesAccepted: JSON.parse(localStorage.getItem('cookies-accepted')),
            isIntersecting: null
        }
    },
    methods: {
        scrollToComponent(href, focus) {
            this.$vuetify.goTo(`#${href}`, {duration: 1000})
            if (this.drawer) this.drawer = false;
            if (focus)
                document.getElementById('contactName').focus();
        },
        // eslint-disable-next-line no-unused-vars
        onIntersect(entries, observer) {
            if (entries[0].intersectionRatio >= 0.5)
                this.isIntersecting = entries[0].target.id;
        },
        acceptCookiePolicy() {
            localStorage.setItem('cookies-accepted', 'true');
            this.cookiesAccepted = true;
        },
        contactRequest() {
            if (this.$refs.landingContactForm.validate()) {
                this.sendFormLoading = true
                let payload = {
                    name: this.form.contactName,
                    email: this.form.email,
                    subject: "[OneStart] Reimbursement Request/Contact",
                    description: `${this.form.state || '-'} / ${this.form.city} --- ${this.form.companyName} --- ${this.form.couponCode} --- ${this.form.message}`
                }
                axios.post('https://prod-api.bookzpro.com/api/misc/reimbursement/request', payload)
                    .then((res) => {
                        if (res.data.success) {
                            this.sendFormSuccess = true;
                            this.showSnackbar('Your message has been received. We will contact with you as soon as possible.', 'success');
                        } else {
                            this.sendFormSuccess = false;
                            let message = '';
                            if (res.data?.apiError?.errorMessage)
                                message = res.data.apiError.errorMessage;
                            else
                                message = 'An error occurred. Please try again later.';
                            this.showSnackbar(message, 'error');
                        }
                    }).catch((error) => {
                    this.sendFormSuccess = false;
                    this.showSnackbar(error, 'error');
                }).then(() => {
                    this.sendFormLoading = false;
                });
            }
        },
        showSnackbar(message, color) {
            this.snackbar.message = message;
            this.snackbar.color = color;
            this.snackbar.model = true;
        },
    },
    watch: {
        $route(value) {
            this.menuModel = this.menu.findIndex(m => m.path === value.name);
        },

        formValid(value) {
            if (!value) {
                setTimeout(() => {
                    this.$refs.landingContactForm.resetValidation();
                }, 2000)
            }
        }
    }
}
</script>

<style>
.landing-page-wrapper {
    width: 100%;
    min-height: 100%;
}

.logo {
    width: 40px;
    max-width: 40px;
    height: 40px;
    max-height: 40px;
    margin-top: -2px;
    margin-right: 12px;
}

.header-holder {
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #060606;
    width: 100%;
}

.menu-wrapper {
    width: 98%;
    max-width: 1450px;
    min-height: 77px;
}

.relative {
    position: relative;
}

.center-relative {
    margin-left: auto;
    margin-right: auto;
}

.header-logo {
    float: left;
    position: absolute;
    transform: translateY(-50%);
    top: 42px;
    color: white;
    font-family: 'Galada', cursive;
    font-size: 18px;
    cursor: pointer;
}

.menu {
    float: right;
    max-width: 80%;
    background-color: #060606;
}

.menu-icon {
    float: right;
    margin: 18px 12px 0 12px;
}

.clear {
    clear: both;
}

.menu-container {
    display: inline-block;
    padding: 15px 0;
}

.main-menu {
    padding: 15px 0;
    list-style-type: none;
    padding-inline-start: 40px;
}

.menu-item {
    float: left;
    color: white;
    border-left: 3px solid #060606;
    margin-right: 10px;
}

.menu-item a {
    color: inherit !important;
}

.menu-item.active, .menu-item:hover {
    color: #ff4f5b;
    border-left: 3px solid;
    box-sizing: content-box;
    font-weight: bold;
}

.menu-item a {
    font-size: 14px;
    font-weight: 400;
    transition: color .3s ease, background-color .3s ease;
    padding: 15px;
    line-height: 17px;
    text-decoration: none;
    color: inherit;
}

.first-section {
    min-height: calc(100vh - 77px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
}

.first-section-cover {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.first-section-logo {
    font-family: 'Galada', cursive;
    color: #ff4f5b;
    font-size: 100px;
    text-align: center;
    cursor: default;
}

.first-section-light-text {
    font-size: 32px;
    font-weight: 300;
    color: white;
    text-align: center;
    cursor: default;
}

.second-section {
    background-color: #ff4f5b;
}

.third-section {
    background-color: #dc925e;
}

.fourth-section {
    background-color: #f34435;
}

.fifth-section {
    background-color: #7c688d;
}

.sixth-section {
    background-color: #999999;
}

.seventh-section {
    background-color: #060606;
}

.eighth-section {
    background-color: #FA6A3B;
}

.ninth-section {
    background-color: #3a52a7;
}

.content-1170 {
    width: 100%;
    max-width: 1170px;
}

.section {
    display: flex;
    padding: 0 12px;
    align-content: center;
    align-items: center;
    min-height: calc(100vh);
}

.section-wrapper {
    padding: 75px 0;
    color: white;
}

.section-title {
    margin-top: 75px;
    margin-bottom: 15px;
    font-size: 64px;
    line-height: 64px;
    font-weight: bold;
}

.section-text {
    font-size: 18px;
}

.section-small-bold {
    font-size: 16px;
    font-weight: bold;
}

.section-detail {
    margin-top: 5vw;
}

.detail-p {
    border-left: 5px solid white;
    padding-left: 20px;
}

.footer-holder {
    padding: 15px 0;
    background-color: #ff4f5b;
}

.outlined-container {
    border: thin solid #2d2d2d;
    padding: 24px;
    border-radius: 8px;
}

.outlined-container-light {
    border: thin solid rgba(0, 0, 0, 0.12);
    padding: 24px;
    border-radius: 8px;
}

.w-100 {
    width: 100%;
}

.avatar {
    background-color: white;
    display: flex;
    width: 136px;
    height: 136px;
    border-radius: 50%;
    overflow: hidden;
    align-content: center;
    border: 3px solid white;
    margin: 0 auto;
}

.card-text {
    min-height: 148px;
    text-align: center;
}

.card-rounded {
    border-radius: 20px !important;
}

ul {
    list-style: none;
}

ul li.arrow-bullet {
    position: relative;
    padding-bottom: 10px;
    padding-left: 12px;
    margin-bottom: 12px;
}

ul li.arrow-bullet:before {
    content: '';
    position: absolute;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    width: 16px;
    height: 16px;
    top: calc(50% - 4px);
    left: -20px;
    transform: translateY(-50%) rotate(-45deg);
}

@media only screen and (max-width: 640px) {
    .first-section-logo {
        font-size: 72px;
    }

    .section-title {
        font-size: 42px;
        line-height: 42px;
    }
}

@media only screen and (max-width: 1236px) {
    .menu {
        display: none;
    }

    .menu-item {
        float: none;
        margin: 30px 0;
    }

    .header-logo {
        margin-left: 12px;
    }
}

@media only screen and (min-width: 1236px) {
    .menu-icon {
        display: none;
    }
}
</style>
