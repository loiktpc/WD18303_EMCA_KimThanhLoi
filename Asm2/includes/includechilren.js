const headerrootchilren = document.getElementById("chilrenheader") ;

const headerchilrenpage = `
<nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div class="container">
					<div class="row">
						<div class="col-sm-7 col-md-9">
							<div id="colorlib-logo"><a href="../index.html">
								<img class="logobeephone" src="../images/logobeephone.png" />
							</a></div>
						</div>
						<div class="col-sm-5 col-md-3">
			            <form action="#" class="search-wrap">
			               <div class="form-group">
			                  <input type="search" class="form-control search" placeholder="Tìm kiếm">
			                  <button class="btn btn-primary submit-search text-center" type="submit"><i class="icon-search"></i></button>
			               </div>
			            </form>
			         </div>
		         </div>
					<div class="row">
						<div class="col-sm-12 text-left menu-1">
							<ul>
								<li class="active"><a href="../index.html" data-navigo>Trang chủ</a></li>
								<li class="has-dropdown">
									<a href="">Shop</a>
									<ul class="dropdown listcate_sub">
										
										
									</ul>
								</li>
								<li><a href="about.html" data-navigo>Giới thiệu</a></li>
								<li><a href="contact.html" data-navigo>Liên hệ</a></li>
								<li class="cart">
									<a href="./profile.html" class="iconuser">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
								<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
								</svg>
								</a>
										<a class="account" href="../auth/login.html"> tài khoản </a>
									<a href="cart.html" data-navigo><i class="icon-shopping-cart"></i> Giỏ hàng</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="sale">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 offset-sm-2 text-center">
							<div class="row">
								<div class="owl-carousel2">
									<div class="item">
										<div class="col">
											<h3><a href="#">TUẦN LỄ HP - Giảm giá 25% khuyến mãi những món đồ hấp dẫn</a></h3>
										</div>
									</div>
									<div class="item">
										<div class="col">
											<h3><a href="#">Cuối Tuần Săn Sale 50%</a></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>

`
headerrootchilren.insertAdjacentHTML('afterbegin',headerchilrenpage)