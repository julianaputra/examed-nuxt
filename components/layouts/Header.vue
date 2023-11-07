<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">Examed</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">{{ $t('home') }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/article" class="nav-link">Article</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/components" class="nav-link"
                >Components</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
