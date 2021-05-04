<template lang="">
    <aside class="main-sidebar custom-sidebar sidebar-dark-info elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link text-center">
      <img src="images/icons/sec-logo.png" alt="SEC Logo" class="brand-image" style="opacity: .8; float:none !important;">
      <br>
      <span class="brand-text font-weight-light">Issue Tracking System</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
     
      <!-- SidebarSearch Form -->
      <!-- <div class="form-inline">
        <div class="input-group mt-3 mb-3" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div> -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <router-link to="/dashboard" :class="$route.path == '/dashboard'? 'active' : ''" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pending" :class="$route.path == '/pending'? 'active' : ''" class="nav-link">
              <i class="nav-icon fas fa-clock"></i>
              <p>
                Pending
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-check-double"></i>
              <p>
                Completed
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-building"></i>
              <p>
                Project Site
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="increment">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Users
              </p>
            </a>
          </li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->

    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
  methods: {
    increment(){
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
}
</script>
<style lang="">
    
</style>