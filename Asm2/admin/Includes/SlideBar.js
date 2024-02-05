
let slideBar = `
<aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <a href="Dashboard.html">BeePhone</a>
          </div>
          <div class="sidebar-brand sidebar-brand-sm">
            <a href="Dashboard.html">BP</a>
          </div>
          <ul class="sidebar-menu">
            <li class="menu-header">Thống kê</li>
            <li class="dropdown active">
              <a href="#" class="nav-link has-dropdown"><i class="fas fa-fire"></i><span>Thống kê</span></a>
              <ul class="dropdown-menu">
              
                <li class=active><a class="nav-link" href="./Dashboard.html"> Thống kê tổng quan </a></li>
              </ul>
            </li>
            <li class="menu-header">Bảng</li>
           
            <li class="dropdown">
              <a href="#" class="nav-link has-dropdown"><i class="fas fa-th"></i> <span>Hóa Đơn </span></a>
              <ul class="dropdown-menu">
                <li><a class="nav-link" href="./ListOrder.html">Danh Sách Hóa Đơn</a></li>
              
                <li><a class="nav-link" href="./errors-404.html">Thùng Rác  </a></li>
              
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-columns"></i> <span>Danh Mục</span></a>
              <ul class="dropdown-menu" style="display: none;">
                <li><a class="nav-link" href="./ListCate.html">Danh Sách Danh Mục</a></li>
                <li><a class="nav-link" href="./CreateCate.html">Thêm Danh Mục</a></li>
                <li><a class="nav-link" href="./errors-404.html">Thùng Rác</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="nav-link has-dropdown"><i class="far fa-user"></i> <span>Khách Hàng</span></a>
              <ul class="dropdown-menu" style="display: block;">
                <li><a href="./ListUser.html">Danh Sách Khách Hàng</a></li> 
                <li><a href="./CreateUser.html">Thêm Khách Hàng</a></li> 
                <li><a href="./errors-404.html">Thùng Rác</a></li> 
                
              </ul>
            </li>
            <li class="dropdown">
            <a href="#" class="nav-link has-dropdown"><i class="fas fa-plug"></i> <span>Sản Phẩm</span></a>
            <ul class="dropdown-menu">
              <li><a class="nav-link" href="./ListProduct.html"> Danh Sách Sản Phẩm</a></li>
              <li><a class="nav-link" href="./CreateProduct.html">Thêm Sản Phẩm</a></li>
              <li><a class="nav-link" href="./errors-404.html">Thùng Rác</a></li>
            </ul>
          </li>

          </ul>

             
          </aside>
      </div>      `;

let rootsidebar = document.querySelector('.rootsildebar');
rootsidebar.insertAdjacentHTML('afterbegin',slideBar);