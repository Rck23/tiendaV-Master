<template>
  <nav class="navbar navbar-vertical fixed-start navbar-expand-md navbar-light" id="sidebar">
    <div class="container-fluid">
      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse"
        aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Brand -->
      <a class="navbar-brand" href="./index.html">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SCwdWG7UUlyo6JTcnkzrHJOWvu-jN6UZm2J-pECtQKej1nTa06cfhttEFc4tffKUq5I&usqp=CAU"
          class="navbar-brand-img mx-auto" alt="..." />
      </a>

      <!-- User (xs) -->
      <div class="navbar-user d-md-none">
        <!-- Dropdown -->
        <div class="dropdown">
          <!-- Toggle -->
          <a href="#" id="sidebarIcon" class="dropdown-toggle" role="button" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <div class="avatar avatar-sm avatar-online">
              <img src="/assets/img/avatar-1.jpg" class="avatar-img rounded-circle" alt="..." />
            </div>
          </a>

          <!-- Menu -->
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarIcon">
            <a href="./profile-posts.html" class="dropdown-item">Perfil</a>
            <a href="./account-general.html" class="dropdown-item">Configuracion</a>
            <hr class="dropdown-divider" />
            <a href="./sign-in.html" class="dropdown-item">Salir</a>
          </div>
        </div>
      </div>

      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidebarCollapse">
        <!-- Form -->
        <form class="mt-4 mb-3 d-md-none">
          <div class="input-group input-group-rounded input-group-merge input-group-reverse">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
            <div class="input-group-text">
              <span class="fe fe-search"></span>
            </div>
          </div>
        </form>

        <!-- Navigation -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="true"
              aria-controls="sidebarDashboards">
              <i class="fe fe-home"></i> Dashboard
            </a>
            <div class="collapse show" id="sidebarDashboards">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <router-link to="/dashboard" class="nav-link" active-class="active">Inicio</router-link>
                 
                </li>
                <!-- <li class="nav-item">
                  <a
                    href="./dashboard-project-management.html"
                    class="nav-link"
                  >
                    Project Management
                  </a>
                </li>
                <li class="nav-item">
                  <a href="./dashboard-ecommerce.html" class="nav-link">
                    E-Commerce
                  </a>
                </li> -->
              </ul>
            </div>
          </li>

          <li class="nav-item">

            <router-link to="/colaborador" class="nav-link" active-class="active"> <i class="fe fe-user"></i>
              Empleados</router-link>
          </li>
        </ul>

        <hr class="navbar-divider my-3"/>

        <h6 class="navbar-heading">CONTROL</h6>

        <ul class="navbar-nav mb-md-4">
             <li class="nav-item">
            
            <router-link to="/categorias" class="nav-link" active-class="active"> <i class="fe fe-tag"></i>
              Categorias</router-link>
            </li>

          <li class="nav-item">
            
            <router-link to="/producto" class="nav-link" active-class="active"> <i class="fe fe-shopping-cart"></i>
              Productos</router-link>
            </li>
            <li class="nav-item">
  
              <router-link to="/ingreso" class="nav-link" active-class="active"> <i class="fe fe-folder"></i>
                Ingresos</router-link>
            </li>
          </ul>
        <!-- Push content down -->
        <div class="mt-auto"></div>

        <!-- User (md) -->
        <div class="navbar-user d-none d-md-flex" id="sidebarUser">
          <!-- Icon -->
          <a class="navbar-user-link" data-bs-toggle="offcanvas" href="#sidebarOffcanvasActivity"
            aria-controls="sidebarOffcanvasActivity">
            <span class="icon">
              <i class="fe fe-bell"></i>
            </span>
          </a>

          <!-- Dropup -->
          <div class="dropup">
            <!-- Toggle -->
            <a href="#" id="sidebarIconCopy" class="dropdown-toggle" role="button" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <div class="avatar avatar-sm avatar-online">
                <img src="/assets/img/avatar-1.jpg" style="-webkit-mask-image: none" class="avatar-img rounded-circle"
                  alt="..." />
              </div>
            </a>

            <!-- Menu -->
            <div class="dropdown-menu" aria-labelledby="sidebarIconCopy">
              <a href="./profile-posts.html" class="dropdown-item">Perfil</a>
              <a href="./account-general.html" class="dropdown-item">Configuraciones</a>
              <hr class="dropdown-divider" />
              <a href="./sign-in.html" class="dropdown-item">Salir</a>
            </div>
          </div>

          <!-- Icon -->
          <a class="navbar-user-link" data-bs-toggle="offcanvas" href="#sidebarOffcanvasSearch"
            aria-controls="sidebarOffcanvasSearch">
            <span class="icon">
              <i class="fe fe-search"></i>
            </span>
          </a>
        </div>
      </div>
      <!-- / .navbar-collapse -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
