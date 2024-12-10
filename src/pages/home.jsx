import React from 'react'

export default function home() {
  return (
    <div>
    {/* <!-- onboarding section start --> */}
    <section class="onboarding-section pt-0">
        <div class="onboarding-wrapper user-intro">
            <img class="img-fluid vehicle1" src="/assets/images/onboarding/intro-bike.png" alt="bike"
                data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"/>
            <img class="img-fluid vehicle2" src="/assets/images/onboarding/intro-bike.png" alt="bike"
                data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"/>
            <img class="img-fluid vehicle3" src="/assets/images/onboarding/intro-car.png" alt="car" data-aos="zoom-in"
                data-aos-duration="500" data-aos-delay="1000"/>
        </div>

        <div class="user-onboarding-content-box">
            <img class="img-fluid union-img" src="https://themes.pixelstrap.com/pwa/taxify/assets/images/svg/union.svg" alt="union"/>
            <img class="img-fluid union-img-dark" src="https://themes.pixelstrap.com/pwa/taxify/assets/images/svg/union-dark.svg" alt="union"/>
            <h2>Tracking Realtime</h2>
            <p>Welcome to taxify app, the smartest way to book a cab! long waits and
                unpredictable fares.</p>
            <a href="/" class="onboarding-next">
                <i class="iconsax icon" data-icon="chevron-right"></i>
            </a>
        </div>
    </section>
    {/* <!-- onboarding section start --> */}

    {/* <!-- pwa install app popup start --> */}
    <div class="offcanvas offcanvas-bottom addtohome-popup theme-offcanvas show" tabindex="-1" id="offcanvas" aria-modal="true" role="dialog">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <div class="offcanvas-body small">
            <div class="app-info">
                <img src="/assets/images/logo/mini-logo.png" class="img-fluid" alt=""/>
                <div class="content">
                    <h3>e-Zem</h3>
                    <a href="#">www.e-zem.bj</a>
                </div>
            </div>

            <a href="#!" class="btn theme-btn install-app btn-inline home-screen-btn m-0" id="installApp">Add to Home
                Screen</a>
        </div>
    </div>
    {/* <!-- pwa install app popup start --> */}

    </div>
  )
}
