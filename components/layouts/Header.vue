<template>
    <header>
        <nav class="navbar navbar-expand-lg custom-navbar">
            <div class="container">
                <nuxt-link class="custom-navbar__logo-container" to="/">
                    <img
                        src="/images/examed-icon.png"
                        alt="examed icon"
                        class="ratio-item"
                        width="296"
                    />
                </nuxt-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarMainMenu"
                    aria-controls="navbarMainMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarMainMenu" class="offcanvas offcanvas-end">
                    <div class="offcanvas-header">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav custom-navbar__navbar-nav">
                            <li class="nav-item">
                                <nuxt-link
                                    to="/list-rumah-sakit"
                                    class="custom-navbar__nav-link"
                                    >List Rumah Sakit</nuxt-link
                                >
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/tentang-kami"
                                    class="custom-navbar__nav-link"
                                    >Tentang Kami</nuxt-link
                                >
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/resources"
                                    class="custom-navbar__nav-link"
                                    >Resources</nuxt-link
                                >
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/kontak"
                                    class="custom-navbar__nav-link"
                                    >Kontak</nuxt-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.custom-navbar {
    @include imageRatio(293, 72, true, contain, 'logo');
    background-color: #fff;
    padding: 14px 0;

    &__logo-container {
        @include vwMobile(max-width, 175);
    }

    &__navbar-nav {
        margin-left: auto;
        gap: 8px;
    }

    &__nav-link {
        display: block;
        padding: 8px 12px;
        @include typo(nav-link);
        font-weight: 400;
        color: #122032;
        text-decoration: none;
        border-radius: 6px;
        transition:
            background-color 0.3s ease,
            color 0.3s ease;

        &:hover {
            color: #303178;
            background-color: #e9f0fc;
        }
    }
}
</style>
